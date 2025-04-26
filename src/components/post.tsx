import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { id: string } }) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  // fetching dummy data
  // const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  // const post = await response.json();

  // https://stackoverflow.com/questions/79145063/params-should-be-awaited-nextjs15

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!post) {
    notFound();
  }

  return (
    <main className="px-5 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
}
