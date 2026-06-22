const base = "https://fortunate-respect-d9ba68c326.strapiapp.com";

async function main() {
  // Login
  const login = await fetch(base + "/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "info@xntric.ca", password: "@Info@123" }),
  });
  const loginData = await login.json();
  const cookie = login.headers.get("set-cookie");
  console.log("Login OK");

  // Check CTB with cookie
  const ctb = await fetch(base + "/api/content-type-builder/content-types", {
    headers: { Cookie: cookie },
  });
  if (ctb.ok) {
    const data = await ctb.json();
    const custom = data.data.filter(d => !d.uid.includes("::"));
    console.log("\nCustom content types (" + custom.length + "):");
    for (const c of custom) {
      console.log("  " + c.uid + " - " + (c.schema?.displayName || c.schema?.info?.displayName));
    }
  } else {
    const text = await ctb.text();
    console.log("CTB error (" + ctb.status + "):", text.slice(0, 200));
  }
}
main().catch((e) => console.error(e));
