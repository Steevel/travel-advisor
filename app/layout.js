import Navbar from "@/components/Navbar";
import Provider from "./Provider";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Advisor",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
