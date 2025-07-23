import type React from "react"
import type { Metadata } from "next"
import { Inter, Josefin_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation/navigation"
import { NavigationAnimationProvider } from "@/contexts/navigation-animation-context"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
})

export const metadata: Metadata = {
  title: "Federico Melo Barrero - Personal Portfolio",
  description: "Professional portfolio showcasing work experience, academic background, publications, and achievements.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${josefinSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <NavigationAnimationProvider>
              <div className="min-h-screen bg-background">
                <Navigation />
                <main className="container mx-auto px-4 py-8">{children}</main>
              </div>
            </NavigationAnimationProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
