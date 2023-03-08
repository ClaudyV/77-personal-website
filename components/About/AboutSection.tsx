import styles from "@/styles/About.module.css";

const AboutSection = () => {
  return (
    <>
      <div className={styles.aboutWrapper}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <div className={styles.aboutTitle}>
              <span>關於我</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "0.188rem",
                backgroundColor: "#806B5E",
              }}
            ></div>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutLeft}>
            <span className={styles.aboutLeftText}>
              現專注於研究所課業、從事韓文教學工作閒暇時經營自己創立的韓文Instagram專頁，
              夢想是能當一名專業的斜槓韓文老師，
              除了教學也能運用所學的專業韓文知識，
              走出有別於他人、屬於自己的韓文道路。
            </span>
          </div>
          <div className={styles.aboutRight}>
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src="/assets/img/about-me.svg"
              alt="About Me"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
