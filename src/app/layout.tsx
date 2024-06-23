import { Header } from "@t3-test/components/ui/Header";
import "@t3-test/styles/globals.css";
import clsx from "clsx";

import { Inter } from "next/font/google";
import './layouts.scss';

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["500"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Code workouts",
  description: "Movement library for coders",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  viewport: "width=device-width, initial-scale=1.0, user-scalable=no",
};

// export const Link = (props: LinkProps) => (
//   <RawLink {...props} className="gap-4" />
// );

const isDark = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classNames = clsx(isDark && 'dark', `grid ${inter.variable} p-6`);
  return (
    <html lang="en">
      <body className={classNames}>
        <Header
          links={[
            { title: "Home", href: "/" },
            { title: "CF-Stream", href: "/cf-stream" },
            { title: "Shaka", href: "/shaka" },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
