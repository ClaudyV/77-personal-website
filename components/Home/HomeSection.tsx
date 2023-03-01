import styles from "@/styles/Home.module.css";
const HomeSection = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "7rem" }}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "2.25rem", paddingTop: '2rem' }}
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
              是韓文Instagram 專頁「77的韓文筆記」小編，
              同時也是一個喜歡研究、熱愛韓文的韓文老師，
              如果大家想要課後嘗試自學卻不知從何開始，
              或是常常對於相似文法感到混亂卻束手無策，
              也對於吸收課本沒教、網路查不太到的專業韓文知識感趣，
              都歡迎在這與我聯繫、找我討論！
            </span>
          </div>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "1.125rem",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className={styles.introAction}>瞭解更多</div>
          </div>
        </div>
        <div>
          <img src="/assets/img/intro.svg" alt="Intro Image"/>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
