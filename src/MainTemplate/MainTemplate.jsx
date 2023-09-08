import { Link, Outlet, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import { Typography } from "@mui/material";

import "./styles.css";

export default function MainTemplate() {
  const { pathname } = useLocation();

  const menu = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/counters",
      label: "Counters",
    },
  ];

  return (
    <>
      <header>
        <nav>
          <ol>
            {menu.map(({ to, label }) => (
              <li key={label}>
                <Link
                  to={to}
                  className={clsx("menu-item", { current: to === pathname })}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Typography variant="overline">© 2023</Typography>
      </footer>
    </>
  );
}
