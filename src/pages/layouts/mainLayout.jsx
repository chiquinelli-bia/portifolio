import { Menu } from "@/components/sidebar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <main>
      <Menu />
      <Outlet />
    </main>
  );
};
