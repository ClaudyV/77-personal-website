import { NavbarElement } from "@/shared/interfaces/navbarElements.interface";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Navbar = () => {
  const router: any = useRouter();
  const [hydrated, setHydrated] = useState(false);
  // Navbar Elements
  const navElements = [
    {
      title: "首頁",
      path: "/",
      route: "/",
    },
    {
      title: "關於我",
      path: "/#about-me",
      route: "/",
    },
    {
      title: "聯絡我",
      path: "/#contact-me",
      route: "/",
    },
  ];

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "3.875rem",
        }}
      >
        <div>
          <img src="/assets/img/logo.svg" alt="77_logo" />
        </div>

        <div style={{ display: "flex", gap: "8.5rem" }}>
          {navElements.map((element: NavbarElement) => (
            <Link key={element.path} href={element.path}>
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
          ))}

          <div></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
