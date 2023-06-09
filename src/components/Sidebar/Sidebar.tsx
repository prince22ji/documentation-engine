import "./Sidebar.css";
import { Outlet, Link } from "react-router-dom";

export default function Sidebar({ pages, title,setActive,activePage}: any) {
  function renderNavs() {
    return pages.map((nav: any) => {
      return (
        <li className="my-1 nav-item" key={nav.code}>
          <Link className="nav-link py-2" to={nav.url}>
            {nav.label}
          </Link>
        </li>
      );
    });
  }
  return (
    <>
      <div className="container-fluid no-gutters m-0 h-100 nav-container">
        <div className="title align-items-center">
          <span>{title || "Pages Menu"}</span>
        </div>
        <ul className="nav-list m-0 p-0 pt-4">{renderNavs()}</ul>
      </div>
    </>
  );
}
