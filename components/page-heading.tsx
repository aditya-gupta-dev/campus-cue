import { Badge } from "@/components/ui/badge";
export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-heading">
      <Badge variant="secondary">{eyebrow}</Badge>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
