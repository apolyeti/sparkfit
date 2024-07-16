"use client";

import { useState } from "react";
import DashboardItem from "@/components/DashboardComponents/DashboardItem";
import "@styles/dashboard.css";


export default function Dashboard() {

    // use tailwindcss to make grid for dashboard
    // with each dashboard item just being
    // header1.. 2..
    // and each content just content 1.. 2..
    
        return (
            <div className="p-5 w-full">
                <div className="grid grid-cols-3 gap-4">
                    <DashboardItem name="Location">
                        Redmond, WA
                    </DashboardItem>
                    <DashboardItem name="Temperature">
                        72°F
                    </DashboardItem>
                    <DashboardItem name="Wind Speed">
                        5 mph
                    </DashboardItem>
                    <DashboardItem name="Dropzone Component" className="col-span-3">
                        Drop Items here
                    </DashboardItem>
                </div>
            </div>
        );
}