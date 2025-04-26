"use client";

import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

// One way to do Authentication
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";

export default function Page() {
  // One way to do Authentication
  // const { isAuthenticated } = getKindeServerSession();
  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login?post_login_redirect_url=/crease-post");
  // }

  return (
    <main className="text-center pt-16">
      <h1 className="text-zinc-200 text-4xl md:text-5xl font-bold mb-5">
        Create post
      </h1>

      <Form />

      <LogoutLink className="flex flex-col justify-center h-10 px-5 max-w-[400px] mx-auto border-gray-400 border-2 border-solid rounded">
        Log out
      </LogoutLink>
    </main>
  );
}
