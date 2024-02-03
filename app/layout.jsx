import { Poppins } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/providers/ThemeProviders";

const inter = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "900"]
});

export const metadata = {
  title: "EFLV Portfolio V2",
  description: "EFLV Portfolio V2 is a static portfolio site built with NextJS, Tailwind CSS & Shadcn UI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>
          <Header />
          {children}
          <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
