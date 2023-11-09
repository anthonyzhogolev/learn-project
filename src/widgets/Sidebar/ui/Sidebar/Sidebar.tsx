import { classNames } from "shared/lib/classNames";
import classes from "./Sidebar.module.scss";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev );
  };

  return (
    <div
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <button onClick={onToggle}>Toogle</button>
    </div>
  );
};

export default Sidebar;
