import { ReactNode } from "react";
import "@/assets/styles/global.css";
import NavBar from "@/components/Navbar";

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
  return (
    <html>
      <body>
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default MainLayout;
