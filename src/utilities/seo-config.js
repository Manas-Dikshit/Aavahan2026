const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aavahan-suiit-2k26.netlify.app/";

export const siteMetadata = {
  siteName: "AAVAHAN'26 | SUIIT Cultural Fest",
  shortName: "AAVAHAN'26",
  tagline: "Annual Cultural Fest of SUIIT, Burla",
  description:
    "AAVAHAN'26 is the annual cultural fest of SUIIT (Sambalpur University Institute of Information Technology), Burla – celebrating music, dance, drama, art, fashion, gaming, workshops and competitions.",
  url: BASE_URL,
  locale: "en_IN",
  twitterHandle: "@aavahan_suiit",
  themeColor: "#004aad",
  keywords: [
    "Aavahan 2026",
    "Aavahan'26",
    "Aavahan SUIIT",
    "SUIIT cultural fest",
    "SUIIT fest 2026",
    "Sambalpur University cultural fest",
    "college fest Burla",
    "Odisha college fest",
    "Aavahan events",
    "Aavahan competitions",
    "Aavahan workshops",
    "SUIIT cultural festival",
    "SUIIT Burla events",
    "techno cultural fest",
    "SUIIT Aavahan registration",
  ],
};

export function buildAbsoluteUrl(path = "") {
  if (!path || path === "/") return siteMetadata.url;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteMetadata.url}${normalizedPath}`;
}
