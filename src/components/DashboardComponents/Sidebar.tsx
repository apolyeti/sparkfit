import "@styles/dashboard.css"
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="sidebar text-white w-32 min-h-screen p-4">
            <div className="flex flex-col items-center justify-center">
                <div className="text-2xl mb-6">
                    <Link href="/">
                        Sparkfit
                    </Link>
                </div>
                <div className="mb-6">
                    link 1
                </div>
                <div className="mb-6">
                    link 2
                </div>
                <div className="mb-6">
                    link 3
                </div>
            </div>
        </div>
    );
  };
  
  export default Sidebar;
  