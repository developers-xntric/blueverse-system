import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD", "CONTACT_EMAIL"] as const;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const missingEnv = requiredEnv.filter((key) => !process.env[key]);

  if (missingEnv.length > 0) {
    return Response.json(
      { message: "Contact form is not configured. Please try again later." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  const data = {
    name: clean(payload.name),
    company: clean(payload.company),
    email: clean(payload.email),
    phone: clean(payload.phone),
    service: clean(payload.service),
    message: clean(payload.message),
  };

  if (!data.name || !data.email || !data.message) {
    return Response.json({ message: "Name, email, and message are required." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(data.email)) {
    return Response.json({ message: "Please provide a valid email address." }, { status: 400 });
  }

  const smtpPort = Number(process.env.SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const htmlRows = [
    ["Full Name", data.name],
    ["Company", data.company || "Not provided"],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Service Interest", data.service || "Not provided"],
    ["Message", data.message],
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #dce7f3;font-weight:700;color:#062b4f;">${label}</td>
          <td style="padding:10px 12px;border:1px solid #dce7f3;color:#4a5565;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

  try {
    await transporter.sendMail({
      from: `"BlueVerse Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: data.email,
      subject: `New BlueVerse contact request from ${data.name}`,
      text: [
        `Full Name: ${data.name}`,
        `Company: ${data.company || "Not provided"}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "Not provided"}`,
        `Service Interest: ${data.service || "Not provided"}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:720px;">
          <h2 style="color:#062b4f;">New BlueVerse contact request</h2>
          <table style="width:100%;border-collapse:collapse;">${htmlRows}</table>
        </div>
      `,
    });

    return Response.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact email failed:", error);
    return Response.json({ message: "Unable to send your message right now." }, { status: 500 });
  }
}
