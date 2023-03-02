import styles from "@/styles/Home.module.css";
import Image from "next/image";
const HomeSection = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.25rem",
            paddingTop: "2rem",
            paddingBottom: "2rem",
            width: "43%",
          }}
        >
          <div className={styles.introTitle}>
            <span>大家好，我是77</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
            className={styles.introDesc}
          >
            <span>
              是韓文Instagram 專頁「77的韓文筆記」小編， <br />
              同時也是一個喜歡研究、熱愛韓文的韓文老師，
              <br />
              如果大家想要課後嘗試自學卻不知從何開始，
              <br />
              或是常常對於相似文法感到混亂卻束手無策，
              <br />
              也對於吸收課本沒教、網路查不太到的專業韓文知識感趣，
              <br />
              都歡迎在這與我聯繫、找我討論！
            </span>
          </div>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "1.125rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "10px 10px 4px rgba(0, 0, 0, 0.25)",
              cursor: "pointer",
            }}
            className={styles.homeButton}
          >
            <div className={styles.introAction}>瞭解更多</div>
          </div>
        </div>
        <div style={{ width: "57%", position: "relative" }}>
          <Image fill src="/assets/img/intro.svg" alt="Intro Image" />
        </div>
      </div>
    </>
  );
};

export default HomeSection;
