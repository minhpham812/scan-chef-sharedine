import { Outlet } from "react-router-dom";
import { ChefSidebar } from "./chef-sidebar";

export function ChefLayout() {
  return (
    <div className="flex h-screen bg-background">
      <ChefSidebar />
      <main className="flex-1 flex flex-col overflow-hidden bg-background">
        <Outlet />
      </main>
    </div>
  );
}
