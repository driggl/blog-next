// import Logo from 'components/logo';
import React from 'react';
import Link from 'next/link';
import '../assets/sass/general.sass';

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav className="container navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a href="/" className="navbar-item">
        <div className="logo"></div>
      </a>

      <a
        role="button"
        className="navbar-burger burger"
        // className="{ 'is-active': expanded }"
        aria-label="menu"
        // :aria-expanded="expanded"
        data-target="navbarTop"
        // @click="expanded = !expanded"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarTop"
      className="navbar-menu"
      // :className="{ 'is-active': expanded }"
    >
      <div className="navbar-start"></div>

      <div className="navbar-end">
        <Link href="/blog">
          <a  className="navbar-item">Blog</a>
        </Link>

        <a href="/#courses" className="navbar-item">
          Courses
        </a>

        <a href="https://patreon.com/driggl" target="_blank" className="navbar-item">
          Support
        </a>
      </div>
    </div>
    <style jsx>{`
      .logo {
        width: 83px;
        height: 28px;
        display: block;
        background-image: url("/logo-small.png");
        background-size: 83px 28px;
      }
    `}</style>
  </nav>
);

export default Nav;
