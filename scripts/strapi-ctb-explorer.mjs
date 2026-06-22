async function main() {
  const base = "https://beneficial-frog-9092414fe7.strapiapp.com";

  const login = await fetch(base + "/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "info@xntric.ca", password: "@Info@123" }),
  });
  if (login.status === 429) { console.log("RATE LIMITED"); return; }
  const loginData = await login.json();
  const cookie = login.headers.get("set-cookie");

  const apiToken = "b075b93666666098d96226713c7aa10f19fabb5c251b697d75bbaecd577fb5981a1f7968e7d6e747b7b3294005764ec0a2148ec107ecf5b6bfc84f32fb7638717fe8f0243fe293865ba18ae18c51ed1c0038a0118ac70c61d4092a54aa8a6c2f1c2e71b0525527e7feddaf89f0f74998dfa0073c0bdab722e25f44706ed24715";

  const headersBoth = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + apiToken,
    Cookie: cookie,
  };

  const paths = [
    ["POST", "/api/content-type-builder/content-types"],
    ["POST", "/api/content-type-builder/components"],
    ["POST", "/api/content-type-builder/component-categories"],
    ["POST", "/api/content-type-builder/categories"],
    ["POST", "/api/content-type-builder"],
    ["PUT", "/api/content-type-builder"],
    ["PATCH", "/api/content-type-builder/content-types"],
    ["POST", "/api/content-type-builder?action=create"],
    ["POST", "/api/admin/content-type-builder"],
    ["POST", "/admin/api/content-type-builder"],
  ];

  const body = {
    contentType: {
      singularName: "test-ct6",
      pluralName: "test-ct6s",
      displayName: "Test CT6",
      kind: "singleType",
      attributes: { title: { type: "string" } },
    },
  };

  for (const [method, path] of paths) {
    try {
      const r = await fetch(base + path, {
        method,
        headers: headersBoth,
        body: method !== "GET" ? JSON.stringify(body) : undefined,
      });
      const text = await r.text();
      console.log(method, path, "->", r.status, text.slice(0, 100));
    } catch (e) {
      console.log(method, path, "-> ERROR:", e.message);
    }
  }
}
main().catch((e) => console.error(e));
