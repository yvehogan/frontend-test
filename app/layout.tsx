import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SideMenu from "@/components/layouts/SideMenu";
import Provider from "@/lib/utilities/provider";

const monaSans = localFont({
  src: "../public/fonts/Mona-Sans.ttf",
  variable: "--font-mona-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "A frontend engineer role test",
  description: "An E-commerce dashboard showing list of courses and their details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={monaSans.variable}>
      <Provider>
      <body className="font-sans antialiased">
      <ToastContainer />
        <div className="flex h-screen">
          <SideMenu />
          <main className="flex-1 overflow-auto pl-14 pr-6">
            {children}
          </main>
        </div>
      </body>
      </Provider>
    </html>
  );
}