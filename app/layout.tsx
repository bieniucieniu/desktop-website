import { MainLayout } from "@/components/Main/MainLayout"
import "./globals.css"
import { vt323 } from "@/fonts"
export const metadata = {
  title: "Mikołaj Bień  website",
  description: "portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={vt323.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
