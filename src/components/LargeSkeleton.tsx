export default function LargeSkeleton() {
    return (
        
        <div role="status" className="animate-pulse">
            <div className="lg-skeleton h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-72 mb-4"></div>
            <div className="sm-skeleton h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="lg-skeleton h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-72 mb-4"></div>
            <div className="sm-skeleton h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="lg-skeleton h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-72 mb-4"></div>
        </div>
    )
}