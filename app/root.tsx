import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  NavLink,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Logo from "./components/Logo";

import globalStylesUrl from "./styles/global.css";
import globalMediumStylesUrl from "./styles/global-medium.css";
import globalLargeStylesUrl from "./styles/global-large.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "RS Motors",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      href: "/bg-home.jpg",
      as: "image",
      type: "image/jpeg",
    },
    {
      rel: "preload",
      href: "/logo.png",
      as: "image",
      type: "image/png",
    },
    {
      rel: "stylesheet",
      href: globalStylesUrl,
    },
    {
      rel: "stylesheet",
      href: globalMediumStylesUrl,
      media: "print, (min-width: 640px)",
    },
    {
      rel: "stylesheet",
      href: globalLargeStylesUrl,
      media: "screen and (min-width: 1024px)",
    },
  ];
};

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="container">
          <header>
            <div className="banner">
              <Logo />
            </div>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="services">Diensten</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <main>
        <Outlet />
      </main>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <div className="error-container">
        <h1>Whoopsies!</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}
