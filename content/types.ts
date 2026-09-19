export interface Source { url: string; reviewedOn: string; modifiedAt: string; }
export interface Media { kind: "image" | "video"; src: string; alt: string; caption?: string; }
export interface Project {
  slug: string; title: string; period: string; role: string; summary: string;
  contributions: string[]; decisions: string[]; teamOutcomes: string[];
  evidenceLimits: string[]; tags: string[]; media: Media[]; source: Source;
}
export interface Experience {
  id: string; organisation: string; title: string; period: string; summary: string;
  contributions: string[]; teamOutcomes: string[]; source: Source;
}
