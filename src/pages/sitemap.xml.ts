const pages = [
  ["/", "weekly", "1.0"],
  ["/tienda", "monthly", "0.8"],
  ["/partidos", "weekly", "0.8"],
  ["/sumate", "monthly", "0.7"],
  ["/auspicios", "monthly", "0.7"],
  ["/club", "monthly", "0.6"],
  ["/equipos", "monthly", "0.7"],
  ["/eventos", "monthly", "0.6"],
  ["/noticias", "weekly", "0.7"],
  ["/comunidad", "monthly", "0.6"],
  ["/videos", "monthly", "0.6"],
  ["/tickets", "weekly", "0.7"],
  ["/privacidad", "yearly", "0.2"],
  ["/terminos", "yearly", "0.2"],
  ["/devoluciones", "yearly", "0.2"],
] as const;

export async function GET({ site }: { site?: URL }) {
  const base = site ?? new URL("https://horconesrc.cl");
  const urls = pages
    .map(([path, changefreq, priority]) => `  <url>
    <loc>${new URL(path, base).href}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
