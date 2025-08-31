import Link from "next/link";

export default function DocsQuickLink() {
  return (
    <div className="inline-block">
      <Link href="/docs" prefetch={false} className="underline">
        Vai ai Docs (test link)
      </Link>
    </div>
  );
}
