import HeaderMain from "./compoments/Header/HeaderMain";
import "./globals.css";
import { Manrope } from "next/font/google";

const FONT = Manrope({ subsets: ['latin'] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={FONT.className}>
        <HeaderMain />
        {children}
      </body>
    </html>
  );
}
