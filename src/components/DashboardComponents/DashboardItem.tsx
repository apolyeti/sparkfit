import "@styles/dashboard.css"

interface DashboardItemProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    children: React.ReactNode;
}

export default function DashboardItem({ name, children }: DashboardItemProps) {
    // Have a card with top being header (or name of item)
    // and everything below it being the children

    return (
        <div className="card flex flex-col items-center justify-center no-line">
            <div className="text-lg mb-6">
                {name}
            </div>
            <div className="mb-6">
                {children}
            </div>
        </div>
    );
}