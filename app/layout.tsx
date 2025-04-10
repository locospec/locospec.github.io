import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { description } from "./layout.config";
import { cn } from "@/lib/utils";
import { Provider } from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

// https://github.com/vercel/next.js/discussions/54433

export const metadata = createMetadata({
  title: {
    template: "%s | locospec",
    default: "locospec",
  },
  description: description,
  metadataBase: baseUrl,
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Locospec" />
        <link rel="shortcut icon" href="/icon0.svg" />
        <link rel="apple-touch-icon" href="/icon0.svg" />
        <script
          crossOrigin="anonymous"
          src="//cdn.jsdelivr.net/npm/meta-scan@0.11.2/dist/auto.global.js"
          data-auto-enable={"false"}
        />
      </head>
      <body
        className={cn("relative flex min-h-svh flex-col overflow-x-hidden")}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
