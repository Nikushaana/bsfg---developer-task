import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/SideBar/sidebar";
import BottomMenu from "./components/bottomMenu/BottomMenu";

export const metadata: Metadata = {
  title: "BSFG - Developer Task | Nikolozi Anashvili",
  description: "bsfg - developer task | nikolozi anashvili",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-[100vh]">
          <Sidebar />
          <div className="w-full">
            <Header />
            <div className="bg-mainPageBgColor flex justify-center">
              <div className="w-[1200px] max-[1400px]:w-[80vw] max-[800px]:w-[100vw] shrink-0 flex items-center justify-between pt-[15px] pb-[30px] max-[800px]:px-[10px]">
                {children}
              </div>
            </div>
            <Footer />
            <BottomMenu />
          </div>
        </div>
      </body>
    </html>
  );
}
