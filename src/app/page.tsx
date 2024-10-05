import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-sans">
      <main className="text-center">
        <h1 className="text-2xl font-bold mb-4">nextjs-magic-link-auth</h1>
        {session?.user?.email ? (
          <>
            <p className="mb-4">Logged in as: {session.user.email}</p>
            <Link
              href="/api/auth/signout"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <p className="mb-4">Not logged in</p>
            <Link
              href="/api/auth/signin"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Sign In
            </Link>
          </>
        )}
      </main>
    </div>
  );
}
