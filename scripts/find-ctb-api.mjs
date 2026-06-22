async function main() {
  const base = "https://beneficial-frog-9092414fe7.strapiapp.com";

  const login = await fetch(base + "/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "info@xntric.ca", password: "@Info@123" }),
  });
  if (login.status === 429) {
    console.log("RATE LIMITED"); return;
  }
  const loginData = await login.json();
  const cookie = login.headers.get("set-cookie");
  const jwt = loginData.data.token;

  const ctbHtml = await fetch(base + "/admin/content-type-builder", {
    headers: { Cookie: cookie },
  });
  const html = await ctbHtml.text();

  // Find JS bundle URLs
  const jsRegex = /src="([^"]+\.js[^"]*)"/g;
  const jsUrls = [];
  let match;
  while ((match = jsRegex.exec(html)) !== null) {
    jsUrls.push(match[1]);
  }
  console.log("JS bundles:", jsUrls.length);

  // Search main bundles for API patterns
  for (const url of jsUrls.slice(0, 5)) {
    const fullUrl = url.startsWith("http") ? url : base + url;
    const r = await fetch(fullUrl, { headers: { Cookie: cookie } });
    if (!r.ok) continue;
    const js = await r.text();

    // Find content-type-builder related API paths
    const patterns = [
      ...js.matchAll(/["'](\/(?:api|admin)\/[^"']*content[^"']*type[^"']*builder[^"']*)["']/gi),
      ...js.matchAll(/["'](\/(?:api|admin)\/[^"']*content-type[^"']*)["']/gi),
    ];
    for (const p of patterns) {
      console.log("  API:", p[1]);
    }
  }
}
main().catch((e) => console.error(e));
