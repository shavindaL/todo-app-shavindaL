'use client';
import './sidebar.css';
import Link from "next/link";
import SidebarPill from "./SidebarPill";

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <p className="h3 h-min content-center justify-center items-center">Acmy Solutions</p>
            </div>
            <div className="my-20">
                <Link href="/">
                    <SidebarPill />
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;