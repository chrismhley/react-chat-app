import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
  className?: string;
}

const Sidebar = ({ children, className = "" }: SidebarProps) => {
  return <div className={`sidebar ${className}`}>{children}</div>;
};

export default Sidebar;
