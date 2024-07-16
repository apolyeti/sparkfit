"use client";

import { useState } from "react";
import DashboardItem from "@/components/DashboardComponents/DashboardItem";


export default function Dashboard() {

    // use tailwindcss to make grid for dashboard
    // with each dashboard item just being
    // header1.. 2..
    // and each content just content 1.. 2..
    
        return (
            <div className="grid grid-cols-3 gap-4 p-9">
                <DashboardItem name="header1">
                    content1
                </DashboardItem>
                <DashboardItem name="header2">
                    content2
                </DashboardItem>
                <DashboardItem name="header3">
                    content3
                </DashboardItem>
            </div>
        );
}