import React from "react";

let menu = [
    { label: "Home", url: "/home" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact Us", url: "/contact-us" }
  ];

function NavBar(){
    const items = menu.map(item =>(
        <li className="nav-item">
            <a className="nav-link" href={item.url}>
                {item.label}
            </a>
        </li>)
    );
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a className="navbar-brand p-1" href="#">
              Start Bootstrap
            </a>
            <ul className="navbar-nav mr-auto">{items}</ul>
          </div>
      </nav>
    );
};

export default NavBar;