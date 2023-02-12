import { Link, Outlet } from "@remix-run/react";

import { LinksFunction } from "@remix-run/cloudflare";

import stylesUrl from "~/styles/services.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function ServicesRoute() {
  return (
    <div className="services-layout">
      <header className="services-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Remix services" aria-label="Remix services">
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className="services-main">
        <div className="container">
          <div className="services-list">
            <Link to=".">Get a random joke</Link>
            <p>Here are a few more services to check out:</p>
            <ul>
              <li>
                <Link to="some-joke-id">Hippo</Link>
              </li>
            </ul>
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="services-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

export function ErrorBoundary() {
  return <div className="error-container">I did a whoopsies.</div>;
}
