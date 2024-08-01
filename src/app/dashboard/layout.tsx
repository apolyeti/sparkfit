import              "@styles/dashboard.css";
import NavBar from  "@/components/DashboardComponents/NavBar";

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
  