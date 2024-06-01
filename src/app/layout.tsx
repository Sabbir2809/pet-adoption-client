import Providers from "@/lib/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adoptify",
  description:
    "The Pet Adoption website is a comprehensive platform designed to facilitate the adoption of pets by connecting potential adopters with available animals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
