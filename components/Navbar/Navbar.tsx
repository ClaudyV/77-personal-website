import { NavbarElement } from "@/shared/interfaces/navbarElements.interface";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  // Navbar Elements
  const navElements = [
    {
      title: "首頁",
      path: "/#home",
    },
    {
      title: "關於我",
      path: "/#about-me",
    },
    {
      title: "聯絡我",
      path: "/#contact-me",
    },
  ];
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
            <Link href={element.path}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={styles.navText}>
                  <span>{element.title}</span>
                </div>
                <div
                  className={
                    currentPath === element.path
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
