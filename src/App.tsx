import { useContext, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { ThemeContext, ThemeContextProps, Theme } from "./theme/ThemeContext";

import { Counter } from "./components/Counter";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>ToggleTheme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback="...Loading">
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
