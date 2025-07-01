export type Project = {
  id: string;
  created_at: { _seconds: number; _nanoseconds: number };
  description: string;
  summary: string;
  img_urls: string[];
  title: string;
  updated_at: { _seconds: number; _nanoseconds: number };
}

export const emptyProject: Project = {
  id: "",
  created_at: { _seconds: 0, _nanoseconds: 0 },
  description: "loading",
  summary: "loading",
  img_urls: ["loading"],
  title: "loading",
  updated_at: { _seconds: 0, _nanoseconds: 0 },
};