import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "../../services/Redux/store";
import "./PageNavs.css"

export default function PageNavs({ navs }: any) {
  const [items, setNavs] = useState([]);

  store.subscribe(() => {
    const data: any = store.getState();
    console.log(data)
    setNavs(data);
  });

  return (
    <>
      <div className="container-fluidno-gutters page-navs-container">
        <div className="title">
          <span>Contents</span>
        </div>
        <div className="navs">
          <ul className="page-navs p-0">
            {items.map((item: any) => {
              return (
                <li className="page-nav-item" key={item.code}>
                  <a  href={"#" + item.code}>{item.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
