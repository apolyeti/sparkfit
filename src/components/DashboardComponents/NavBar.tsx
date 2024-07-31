// this will be on teh very top of the page
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="p-2">
            <div className="navbar justify-between items-center p-3">
                <div className="text-xl">
                    <Link href="/">
                        Sparkfit
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="/auth" as={`/auth`}>
                        Sign Out
                    </Link>
                </div>
            </div>
        </div>
    );
}