import { ReactNode } from "react";
import "@/assets/styles/global.css";

type props = {
  children: ReactNode;
};

const MainLayout = ({ children }: props) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
