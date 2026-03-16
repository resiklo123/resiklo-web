import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://resiklo.org";

const staticRoutes = [
  "/",
  "/about",
  "/products1",
  "/contact-us",
  "/plastic-shredder-machines",
  "/plastic-crusher",
  "/plastic-extrusion-machines",
  "/recycling-machines",
  "/double-axis-shredder",
  "/balers",
];

type ProductLike = { slug?: string };
type SitemapModule = {
  products?: ProductLike[];
  getProductHref?: (product: ProductLike) => string;
};

async function getProductRoutes(): Promise<string[]> {
  try {
    const { products, getProductHref } = (await import("./const")) as SitemapModule;

    if (!getProductHref) {
      return [];
    }

    return (products ?? [])
      .map((product) => product.slug?.trim())
      .filter((slug): slug is string => Boolean(slug))
      .map((slug) => getProductHref({ slug }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const productRoutes = await getProductRoutes();
  const allRoutes = [...new Set([...staticRoutes, ...productRoutes])];
  const lastModified = new Date();

  return allRoutes.map((route) => ({
    url: new URL(route, `${baseUrl}/`).toString(),
    lastModified,
  }));
}