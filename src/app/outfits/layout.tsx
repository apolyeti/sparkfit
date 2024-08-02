import                      "@styles/dashboard.css";
import OutfitNavBar from    "@/components/DashboardComponents/NavBar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: DashboardLayoutProps) => {
    return (
        <div>
            <OutfitNavBar />
            {children}
        </div>
    );
  };
  
  export default Layout;
  