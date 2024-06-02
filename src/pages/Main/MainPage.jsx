import React, { useEffect } from "react";
import styles from "./styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const MainPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className={styles.section}>
        <div className={styles.overlay}></div>
        <div className={styles.text}>
          <h1 className={styles.h1}>Thomas Anderson</h1>
          <p className={styles.p}>
            I am a sales professional specializing in product marketing and
            distribution
          </p>
          <p className={styles.p}>based in Clarcton, MA</p>
          <button className={`${styles.button}`}>Download Resume</button>
        </div>
      </section>
      <section className={styles.section2}>
        <h6 className={styles.h6} data-aos="fade-up">
          EXPERIENCE
        </h6>
        <div className={styles.textNested} data-aos="fade-up">
          <div className={styles.section2div}>
            <h4 className={styles.h4}>Senior Sales Analyst</h4>
            <h5 className={styles.h5}>Intelitec Solutions</h5>
          </div>
          <p className={styles.textNestedp}>May 2018 - Present</p>
        </div>

        <p className={styles.section2p} data-aos="fade-up">
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway heading towards a
          streamlined cloud solution. User generated content in real-time will
          have multiple touchpoints for offshoring.
        </p>

        <div className={styles.textNested} data-aos="fade-up">
          <div className={styles.section2div}>
            <h4 className={styles.h4}>Marketing Analyst</h4>
            <h5 className={styles.h5}>Shout Media Productions</h5>
          </div>
          <p className={styles.textNestedp}>August 2015 - May 2018</p>
        </div>
        <p className={styles.section2p} data-aos="fade-up">
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line.
        </p>
        <div className={styles.textNested} data-aos="fade-up">
          <div className={styles.section2div}>
            <h4 className={styles.h4}>Sales Representative</h4>
            <h5 className={styles.h5}>Gamby Enterprises</h5>
          </div>
          <p className={styles.textNestedp}>June 2011 - August 2015</p>
        </div>
        <p className={styles.section2p} data-aos="fade-up">
          Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits. Dramatically visualize customer directed convergence without
          revolutionary ROI.
        </p>
      </section>
    </>
  );
};

export default MainPage;
