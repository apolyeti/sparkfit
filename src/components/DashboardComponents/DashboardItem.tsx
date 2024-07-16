import "@styles/dashboard.css"
import clsx from "clsx";

interface DashboardItemProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    children: React.ReactNode;
}

export default function DashboardItem({ name, children, className }: DashboardItemProps) {
    // use tailwindcss to make the dashboard items
    // top left of card will be header name
    // rest will be content below the header

    return (
        <div className={clsx("dashboard-item p-4 rounded-lg max-h-60", className)}>
            <div className="text-xl font-semibold mb-4">
                {name}
            </div>
            <div>
                {children}
            </div>
        </div> 
    );
}