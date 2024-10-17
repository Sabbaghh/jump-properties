import { ReactNode } from "react";
import "@/assets/styles/global.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import connectDB from "@/config/database";

export const metadata = {
  title: "Jump properties",
  keyword: "Jump properties, rental , real estate",
  description:
    "Jump properties is a real estate company that provides rental services",
};

type props = {
  children: ReactNode;
};

const MainLayout = ({ children }: props) => {
  connectDB();
  return (
    <html>
      <body>
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default MainLayout;
