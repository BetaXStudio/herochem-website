import { notFound } from "next/navigation";

// Catch-all route that triggers 404 for any unmatched path
export default function CatchAllPage() {
  notFound();
}
