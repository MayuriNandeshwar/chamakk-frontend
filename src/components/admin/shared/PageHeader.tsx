import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
};

export default function PageHeader({
  title,
  subtitle,
  actionLabel,
  actionHref,
}: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>

      {actionLabel && actionHref && (
        <Link href={actionHref}>
          <Button>{actionLabel}</Button>
        </Link>
      )}
    </div>
  );
}
