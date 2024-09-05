import { BuiltInCardOptions } from "./card";

type CardsList = Omit<BuiltInCardOptions, "id">[];
export default [
  {
    title: "Studio Akaru",
    color: "#000",
    fontColor: "#bfccd8",
    cover: "/covers/akaru.png",
    date: new Date("09-02-2024"),
    tags: ["web", "lyon", "creative design"],
    link: "https://akaru.fr",
  },
  {
    title: "Studio Beaucoup",
    color: "#0B3CF7",
    fontColor: "#ffffff",
    cover: "/covers/beaucoup.png",
    date: new Date("08-28-2024"),
    tags: ["web", "lyon", "creative-design"],
    link: "https://beaucoup.studio",
  },
  {
    title: "Digital Cover",
    color: "#bda67f",
    fontColor: "#0f0f0f",
    cover: "/covers/digital-cover.png",
    date: new Date("01-01-2012"),
    tags: ["seo", "web", "design"],
    link: "https://digital-cover.fr",
  },
  {
    title: "ZOL",
    color: "#9624e5",
    fontColor: "#ffffff",
    cover: "/covers/zol.png",
    date: new Date("01-01-2005"),
    tags: ["dynamic", "mobile", "web"],
    link: "https://zol.fr",
  },
] satisfies CardsList as CardsList;
