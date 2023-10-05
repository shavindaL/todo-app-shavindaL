'use client';
import './sidebar.css';
import Link from "next/link";
import SidebarPill from "./SidebarPill";
import { SIDEBAR_TITLE } from '@/app/constants/constants';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <p className="h3 h-min content-center justify-center items-center">{SIDEBAR_TITLE}</p>
            </div>
            <div className="my-16">
                <Link href="/">
                    <SidebarPill />
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;