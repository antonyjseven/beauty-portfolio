import React from "react";
import Link from "next/link";

const links = [
  { href: "https://zeit.co/now", label: "Portfolio" },
  { href: "https://github.com/zeit/next.js", label: "Works" },
  { href: "https://github.com/zeit/next.js", label: "Contacts" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      // :global(body) {
      //   margin: 0;
      //   font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
      //     Helvetica, sans-serif;
      // }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: center;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 24px;
      }
      a {
        color:black;
        text-decoration: none;
        font-size: 16px;
      }
    `}</style>
  </nav>
);

export default Nav;
