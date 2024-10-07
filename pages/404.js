import Link from 'next/link'
import Layout from "@/src/layout/Layout"

export default function Custom404() {
  return (
    <Layout>
      <div className="overflow-hidden middle:inset-x-0 middle:bottom-0 middle:top-[55px]">
        <div className="main_content absolute top-0 right-0 bottom-0 w-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-8">The page you are looking for doesn't exist or has been moved.</p>
            <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}