const base = "https://fortunate-respect-d9ba68c326.strapiapp.com";

async function main() {
  const login = await fetch(base + "/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "info@xntric.ca", password: "@Info@123" }),
  });
  const cookie = login.headers.get("set-cookie");
  const d = await login.json();
  const jwt = d.data.token;
  const h = { Cookie: cookie, Authorization: "Bearer " + jwt };

  // Try admin content-type endpoint
  const r1 = await fetch(base + "/api/admin/content-types", { headers: h });
  console.log("GET /api/admin/content-types:", r1.status);
  if (r1.ok) {
    const data = (await r1.json()).data || [];
    console.log("Types:", data.length);
    for (const t of data.slice(0, 5)) console.log(" ", t.uid || t);
  }

  // Try project settings
  const r2 = await fetch(base + "/api/admin/project-settings", { headers: h });
  console.log("\nGET /api/admin/project-settings:", r2.status);

  // Try the admin panel's main resources
  const r3 = await fetch(base + "/admin/content-manager", {
    headers: { Cookie: cookie },
  });
  console.log("GET /admin/content-manager:", r3.status);
  const html = await r3.text();
  console.log("HTML length:", html.length);

  // Look for our content type names
  const names = ["home-page", "navbar", "footer", "waste-water", "vehicle-washing", "esg-platform", "contact-form", "wwtp-contact", "global-setting"];
  for (const name of names) {
    if (html.includes(name)) {
      const idx = html.indexOf(name);
      console.log("Found:", name, "at", idx);
    }
  }
}
main().catch((e) => console.error(e));
