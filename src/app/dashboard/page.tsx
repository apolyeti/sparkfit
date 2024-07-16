"use client";

import { useState } from "react";
import DashboardItem from "@/components/DashboardComponents/DashboardItem";


export default function Dashboard() {

    // use tailwindcss to make grid for dashboard
    // with each dashboard item just being
    // header1.. 2..
    // and each content just content 1.. 2..
    
        return (
            <div className="grid grid-cols-12 gap-3 p-9">
                <DashboardItem name="Weather Condition" className="col-span-4">
                    Sunny (example)
                </DashboardItem>
                <DashboardItem name="Location" className="col-span-3">
                    City, State
                </DashboardItem>
                <DashboardItem name="Temperature" className="col-span-3">
                    72°F (example)
                </DashboardItem>
                <DashboardItem name="Wind" className="w-52 col-span-2">
                    5 mph (example)
                </DashboardItem>
            </div>
        );
}