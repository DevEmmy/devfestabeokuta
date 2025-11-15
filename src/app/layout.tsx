import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";

import Head from "next/head";


const Bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

// const googleSans = Google_Sans({
//   subsets: ["latin"],
//   variable: "--font-google-sans",
// });

export const metadata: Metadata = {
  title: "Devfest Abeokuta",
  description: "Devfest Abeokuta",
  icons: {
    icon: '/favicon.png', // single favicon
    shortcut: '/favicon.png', // optional shortcut
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/public/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
      <body
        className={`${Bricolage.variable} ${manrope.className} antialiased`}
      >
        {/* <InvertedCursor /> */}
        {children}
      </body>
    </html>
  );
}
