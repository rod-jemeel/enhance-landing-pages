import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 p-6 py-8">
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
        <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
          Terms
        </Link>
        <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
          Privacy
        </Link>
        <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-700">
          Contact
        </Link>
      </div>
    </footer>
  )
}