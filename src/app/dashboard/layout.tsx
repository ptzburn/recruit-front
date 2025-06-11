"use client";

import Header from "@/components/Header";
import { NavigationProvider } from "@/lib/NavigationProvider";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavigationProvider>
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex-1">
          <Header />

          <main>{children}</main>
        </div>
      </div>
    </NavigationProvider>
  );
};

export default DashboardLayout;
