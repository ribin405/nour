import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { courses } from "@/content/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/courses",
    "/teachers",
    "/how-it-works",
    "/pricing",
    "/free-trial",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const courseRoutes = courses.map((course) => ({
    url: `${siteConfig.url}/courses/${course.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...courseRoutes];
}
