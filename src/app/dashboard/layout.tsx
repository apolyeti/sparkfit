import Sidebar from "@/components/DashboardComponents/Sidebar";
import "@styles/dashboard.css";
interface DashboardLayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: DashboardLayoutProps) => {
    return (
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    );
  };
  
  export default Layout;
  