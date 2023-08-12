"use client";
import CategoryList from "@/components/Home/CategoryList";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push("/login");
    }
  }, [session]);

  return (
    <div className="grid h-screen grid-cols-4">
      <div className="p-1 md:p-3">
        <CategoryList />
      </div>
      <div className="col-span-3 bg-blue-300">second</div>
    </div>
  );
}
{
  /* <h2>Some random text</h2>
      <button onClick={() => signOut()}>Sign Out</button> */
}
