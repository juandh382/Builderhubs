

import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/phone-input.css";
import { Navbar, Footer } from "@/components/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BuilderHubs",
  description: "BuilderHubs",
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
