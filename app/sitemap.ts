import type { MetadataRoute } from "next";

const base = "https://joshuaubatindugan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                              priority: 1.0, changeFrequency: "monthly" },
    { url: `${base}/about`,                   priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/cv`,                      priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/project/sage-editorial`,  priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/project/sage-financial`,  priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/project/intuition`,       priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/project/gw-ride`,         priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/project/photography`,     priority: 0.8, changeFrequency: "monthly" },
  ];
}
