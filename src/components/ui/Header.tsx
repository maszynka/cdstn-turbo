import clsx from "clsx";
import Link from "next/link";
import "./Header.scss";

const headers = ["Async Workouts", "Code_Workouts_"];

const H1 = () => {
  return <h1>Async Workouts</h1>;
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

export const Header = ({links}: {links: Links}) => {
  return (
    <div className="header">
      <div className={clsx("header__h1-and-nav")}>
        <H1 />
        <Nav links={links}/>
      </div>
      <NewsletterLink />
    </div>
  );
};
