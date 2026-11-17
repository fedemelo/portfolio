import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation/navigation"
import { NavigationAnimationProvider } from "@/contexts/navigation-animation-context"
import { LanguageProvider } from "@/contexts/language-context"
import { PageEnterAnimationWrapper } from "@/components/page-enter-animation-wrapper"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
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
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <NavigationAnimationProvider>
              <div className="min-h-screen bg-background">
                <Navigation />
                <main className="container mx-auto px-4 pt-20 pb-8">
                  <PageEnterAnimationWrapper>{children}</PageEnterAnimationWrapper>
                </main>
              </div>
              <Toaster />
            </NavigationAnimationProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
