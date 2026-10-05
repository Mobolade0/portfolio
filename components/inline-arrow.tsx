import { ArrowUpRight } from "lucide-react";

export function InlineArrow({ size = 18 }: { size?: number }) {
  return <ArrowUpRight className="inline-arrow" size={size} strokeWidth={1.75} aria-hidden="true" />;
}
