import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://resiklo.org";

const staticRoutes = ["/", "/about", "/products", "/contact-us"];

type ProductLike = { slug?: string };

async function getProductRoutes(): Promise<string[]> {
  try {
    const { products } = (await import("./const")) as { products?: ProductLike[] };

    return (products ?? [])
      .map((product) => product.slug?.trim())
      .filter((slug): slug is string => Boolean(slug))
      .map((slug) => `/products1/group-shredder/${slug}`);
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