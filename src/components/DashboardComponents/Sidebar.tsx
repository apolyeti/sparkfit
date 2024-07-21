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
                    <Link href="/auth">
                        Sign Out
                    </Link>
                </div>
                <div className="mb-6">
                    link 2
                </div>
                <div className="mb-6">
                    {/* link that opens a new tab to github */}
                    <a href="https://github.com/apolyeti/sparkfit" target="_blank" rel="noreferrer">
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
  };
  
  export default Sidebar;
  