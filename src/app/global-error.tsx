"use client";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, fontFamily: "sans-serif" }}>
          <div style={{ maxWidth: 520, textAlign: "center" }}>
            <h1 style={{ margin: 0, color: "#062b4f", fontSize: 32 }}>Something went wrong</h1>
            <p style={{ color: "#4a5565", lineHeight: 1.6 }}>
              The page could not be rendered. Try again, or restart the development server if this happened after a code change.
            </p>
            {error.digest ? (
              <p style={{ color: "#6a7282", fontSize: 14 }}>Error digest: {error.digest}</p>
            ) : null}
            <button
              type="button"
              onClick={() => unstable_retry()}
              style={{
                marginTop: 16,
                border: 0,
                borderRadius: 5,
                background: "linear-gradient(180deg, #1191d0 23.381%, #1f62af 100%)",
                color: "white",
                cursor: "pointer",
                fontSize: 16,
                padding: "12px 20px",
              }}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
