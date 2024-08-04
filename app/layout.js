import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuizAccordino",
  description: "Una web app per esercitarsi con le verifiche del prof. Accordino",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
