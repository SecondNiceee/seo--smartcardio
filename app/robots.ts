import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://smartcardio.ru"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/congratulation"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/congratulation"],
      },
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/api/", "/congratulation"],
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/congratulation"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
