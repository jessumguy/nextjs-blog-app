import Post from "@/components/post";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback="Loading post...">
      <Post params={params} />
    </Suspense>
  );
}
