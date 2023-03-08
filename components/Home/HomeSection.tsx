import styles from "@/styles/Home.module.css";

const HomeSection = () => {
  return (
    <>
      <div className={styles.homeWrapper}>
        <div className={styles.homeWrapperLeft}>
          <div className={styles.introTitle}>
            <span>大家好，我是77</span>
          </div>
          <div className={styles.introDesc}>
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
        </div>
        <div className={styles.homeWrapperRight}>
          <img
            style={{
              height: "100%",
              width: "100%",
            }}
            src="/assets/img/intro.svg"
            alt="Intro Image"
          />
        </div>
      </div>
    </>
  );
};

export default HomeSection;
