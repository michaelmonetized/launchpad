import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://launchpad.hustlelaunch.com",
      lastModified: new Date(),
    },
  ];
}
