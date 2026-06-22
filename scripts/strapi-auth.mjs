async function main() {
  const base = "https://beneficial-frog-9092414fe7.strapiapp.com";

  // Login
  const login = await fetch(base + "/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "info@xntric.ca", password: "@Info@123" }),
  });
  if (login.status === 429) {
    console.log("RATE LIMITED");
    return;
  }
  const loginData = await login.json();
  if (!loginData.data) {
    console.log("LOGIN FAILED:", login.status, JSON.stringify(loginData).slice(0, 200));
    return;
  }
  const cookie = login.headers.get("set-cookie");
  const jwt = loginData.data.token;
  console.log("Login OK, JWT:", jwt.slice(0, 20) + "...");

  // Get admin page to find CSRF
  const ctbPage = await fetch(base + "/admin/content-type-builder", {
    headers: { Cookie: cookie },
  });
  const html = await ctbPage.text();
  const csrfMeta = html.match(/csrf.*?content[=]"[^"]+"/i);
  console.log("CSRF meta:", csrfMeta ? csrfMeta[0] : "not found");

  // Also try to find strapi CSRF token
  const csrfCookie = html.match(/strapi_csrf[^;]+/i);
  console.log("CSRF cookie ref:", csrfCookie ? csrfCookie[0] : "not found");

  // Try POST with JWT + cookie
  const body = {
    contentType: {
      singularName: "test-ct5",
      pluralName: "test-ct5s",
      displayName: "Test CT5",
      kind: "singleType",
      attributes: { title: { type: "string" } },
    },
  };
  const r = await fetch(base + "/api/content-type-builder/content-types", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt,
      Cookie: cookie,
    },
    body: JSON.stringify(body),
  });
  const text = await r.text();
  console.log("POST /api/content-type-builder/content-types:", r.status, text.slice(0, 300));
}
main().catch((e) => console.error(e));
