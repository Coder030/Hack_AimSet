import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "./components/ui/sonner";

import { ClerkProvider, SignedOut } from "@clerk/nextjs";

const nun = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata = {
  title: "Svagram",
  description: "Give it a try!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={nun.className}>
        <body>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
