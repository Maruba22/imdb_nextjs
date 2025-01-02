import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Learning NextJS - ",
  description: "Internet Movie DataBase ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        { /* Header */}
        < Header/>

        {/* Nav bar*/}

        {/* Search Bar */}
        {children}
      </body>
    </html>
  );
}
