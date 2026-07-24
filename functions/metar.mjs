// Live METAR proxy — South Canterbury Aero Club flying-conditions dashboard.
//
// The browser cannot read aviationweather.gov directly: it's a public,
// keyless, official US government aviation weather feed, but it does not
// send the CORS header that lets a page on a different domain read it.
// That restriction only applies to browser JavaScript — a server calling it
// has no such restriction — so this tiny function does the fetch here, on
// Netlify's servers, and hands the JSON straight to the page.
//
// No API key, no dependencies, nothing to configure. Runs on Netlify's
// modern Functions runtime (Node 18+, built-in fetch).

export default async (req) => {
  const url = new URL(req.url);
  const ids = url.searchParams.get("ids") || "NZTU,NZCH,NZDN,NZQN";

  const upstream =
    "https://aviationweather.gov/api/data/metar?ids=" +
    encodeURIComponent(ids) +
    "&format=json";

  const cors = {
    "content-type": "application/json",
    "access-control-allow-origin": "*",
    // METARs update roughly every half hour; a short edge cache keeps this
    // fast and avoids hammering aviationweather.gov on every page load.
    "cache-control": "public, max-age=300",
  };

  try {
    const res = await fetch(upstream, {
      headers: {
        "User-Agent":
          "scaeroclubwx.netlify.app (South Canterbury Aero Club flying-conditions dashboard)",
      },
    });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "upstream HTTP " + res.status, data: [] }),
        { status: 502, headers: cors }
      );
    }

    const data = await res.json();
    return new Response(
      JSON.stringify({ data, source: "aviationweather.gov" }),
      { status: 200, headers: cors }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: String((e && e.message) || e), data: [] }),
      { status: 502, headers: cors }
    );
  }
};

export const config = {
  path: "/api/metar",
};
