import Post from "@/components/post";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main className="px-5 pt-24 text-center">
      <Suspense fallback="Loading post...">
        <Post params={params} />
      </Suspense>
    </main>
  );
}
