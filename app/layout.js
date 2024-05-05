import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedOut } from "@clerk/nextjs";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Svagram",
  description: "Give it a try!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
