import styles from "@/styles/Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: '3.875rem'
        }}
      >
        <div>
          <img src="/assets/img/logo.svg" alt="77_logo" />
        </div>

        <div style={{ display: "flex", gap: "8.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.navText}>首頁</div>
            <div className={styles.navActive}></div>
          </div>
          <div className={styles.navText}>
            <span>關於我</span>
          </div>
          <div className={styles.navText}>
            <span>聯絡我</span>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
