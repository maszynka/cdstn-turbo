import clsx from "clsx";
import Link from "next/link";
import "./Header.scss";
import { useEffect } from "react";

const headers = ["Async Workouts", "Code_Workouts_"];

const H1 = () => {
  return <h1 className="font-sans text-xl font-medium leading-6 tracking-tighter text-left">Code_Workouts_</h1>;
};

// const links = [
//   { title: "Home", href: "/" },
//   { title: "Workouts", href: "/workouts" },
//   { title: "Newsletter", href: "/newsletter" },
// ];

export interface Link {
    title: string;
    href: string;
}

export type Links = Link[];

const Nav = ({links}: {links: Links}) => {
  return (
    <nav>
      <ul>
        {links.map(({ title, href }) => (
          <li key={`${title}_${href}`}>
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const NewsletterLink = () => {
  return (
    <Link className={clsx("header__newsletter-link")} href="/newsletter">
      Newsletter
    </Link>
  );
};

const Invitation = () => {
  return (
    <div className="invitation">
      <h3 className="button-like-invitation"><span>✨ Make work efficient without body pain</span></h3>
      <h2 className="slogan">Mobility workouts not only for the coders_</h2>
      <h4 className="subslogan">Minimize your your pain with our movement library.</h4>
    </div>
  )
}

export const Header = ({links}: {links: Links}) => {
  return (
    <div className="header">
      <div className={clsx("header__h1-and-nav")}>
        <H1/>
        <Nav links={links}/>
        <NewsletterLink/>
      </div>
      <Invitation/>
    </div>
  );
};
