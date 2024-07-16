"use client";

import { useState } from "react";
import DashboardItem from "@/components/DashboardComponents/DashboardItem";


export default function Dashboard() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row p-10">
                <DashboardItem name={"header"}>
                    content
                    {/* <Weather weather={location?.weather} /> */}
                </DashboardItem>
            </div>
        </div>
    );
}