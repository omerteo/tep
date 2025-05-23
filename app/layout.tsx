import "./globals.css"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "NextAuth.js Example",
  description:
    "This is an example site to demonstrate how to use NextAuth.js for authentication",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body >
        <div className="flex h-full min-h-screen w-full flex-col justify-between">
        
          <main className="mx-auto w-full max-w-3xl flex-auto px-4 py-4 sm:px-6 md:py-6">
            {children}
          </main>
        
        </div>
      </body>
    </html>
  )
}
