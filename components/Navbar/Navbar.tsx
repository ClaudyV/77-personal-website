import { NavbarElement } from "@/shared/interfaces/navbarElements.interface";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ setLink }: any) => {
  const router: any = useRouter();
  const [hydrated, setHydrated] = useState(false);

  // Navbar Elements
  const navElements = [
    {
      title: "自我介紹",
      path: "/#intro",
    },
    {
      title: "關於我",
      path: "/#about-me",
    },
  ];

  const hamburgerRef = useRef<HTMLDivElement>(null);
  const navmenuRef = useRef<HTMLUListElement>(null);

  // Toggle Mobile menu
  const hamburgerEvent = () => {
    hamburgerRef.current?.classList.toggle("active");
    navmenuRef.current?.classList.toggle("active");
  };

  // Close mobile menu
  const closeMenuEvent = () => {
    hamburgerRef.current?.classList.remove("active");
    navmenuRef.current?.classList.remove("active");
  };

  // Get the link clicked on the navbar
  const linkClicked = (link: string) => {
    setLink(link);
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <>
      <header className={"header"}>
        <nav className={"navbar"}>
          <Link href={"/"} className={"navLogo"}>
            <img
              className={"logo"}
              src="/assets/img/logo-77.svg"
              alt="77_logo"
            />
          </Link>

          <ul ref={navmenuRef} className={"navMenu"}>
            {navElements.map((element: NavbarElement) => (
              <li key={element.path} className={"navItem"}>
                <Link
                  href={element.path}
                  onClick={() => {
                    linkClicked(element.path);
                    closeMenuEvent();
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className={styles.navText}>
                      <span>{element.title}</span>
                    </div>
                    <div
                      className={
                        router.asPath === element.path
                          ? styles.navActive
                          : styles.navHover
                      }
                    ></div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div
            ref={hamburgerRef}
            className={"hamburger"}
            onClick={() => hamburgerEvent()}
          >
            <span className={"bar"}></span>
            <span className={"bar"}></span>
            <span className={"bar"}></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
