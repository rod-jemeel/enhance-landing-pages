import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 text-center">
        <h1 className="text-4xl font-bold">Landing Pages</h1>
        <p className="text-lg text-gray-600">Choose a landing page to preview</p>
        
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/landing-page-1"
            className="rounded-lg bg-blue-600 px-8 py-4 text-white transition-colors hover:bg-blue-700"
          >
            Landing Page 1
          </Link>
          <Link
            href="/landing-page-2"
            className="rounded-lg bg-purple-600 px-8 py-4 text-white transition-colors hover:bg-purple-700"
          >
            Landing Page 2
          </Link>
        </div>
      </main>
    </div>
  );
}
