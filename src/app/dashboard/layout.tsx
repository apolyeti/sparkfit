import NavBar from "@/components/DashboardComponents/NavBar";
import "@styles/dashboard.css";
interface DashboardLayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: DashboardLayoutProps) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
  };
  
  export default Layout;
  