import { classNames } from "shared/lib/classNames";
import classes from "./AppLink.module.scss";
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    theme = AppLinkTheme.PRIMARY,
    className,
    children,
    to,
    ...other
  } = props;

  return (
    <Link
      to={to}
      className={classNames(classes.AppLink, {}, [className, classes[theme]])}
      {...other}
    >
      {children}
    </Link>
  );
};

export default AppLink;
