import { useContext, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { classNames } from "shared/lib/classNames";

import "./styles/index.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Sidebar } from "widgets/Sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <ThemeSwitcher />
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
