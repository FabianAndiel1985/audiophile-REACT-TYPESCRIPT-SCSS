import styles from "./footer.module.scss";
import SocialMediaIcon from "./socialMediaIcon.component";
import { socialMedias } from "../../constants/constants";
import Heading from "./heading.component";
import HorizontalList from "./horizontalList.component";
import { JSXElementConstructor } from "react";
import useWindowDimensions from "../../helpers/getWindowDimesions";
import { minDesktop } from "../../constants/constants";

const Footer  = (): JSX.Element => {

  console.log(minDesktop)

  const FooterHeading  = (<Heading
    heading={"audiophile"}
    location={"bottom"}
  />)

  const Footer_Copy = (
    <p
    className={styles.audioDescr}
    >
      Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
      and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
      visit our demo facility - we’re open 7 days a week.
    </p>
  )

  const Footer_CopyRight= (
    <p
        className={styles.copyrSm_cr}
        >
          Copyright 2021. All Rights Reserved
        </p>
  )


  const SocialMediaIcons= socialMedias.map((sm)=>{
    let medium =  sm as any;
    return(
    <SocialMediaIcon
      mediaType={medium}            
    />
    )
  }
  ) 

   let {width} = useWindowDimensions();
  console.log(width)
  console.log("min Desktop",minDesktop)
 
   if( width <  minDesktop  ) {
  console.log("Width greater than minim")
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.footer__headerListContainer}>
        {FooterHeading}
        <HorizontalList
          location={"bottom"}
        />
      </div>
      {Footer_Copy}
      <div
      className={styles.copyrSm}
      >
        {Footer_CopyRight}
        <div
        className={styles.copyrSm_sm}
        >
          {SocialMediaIcons} 
        </div>
      </div>
    
    </footer>
    </>
  );
  }


    //returns in case of Desktop Screen
    return(
      <>
        <footer className={styles.footerDesktop}>
          <div className={styles.footerDesktop_firstSection}>
          {FooterHeading}
            {Footer_Copy}
            {Footer_CopyRight}

          </div>
          <div
          className={styles.footerDesktop_secondSection}
          >
            <HorizontalList
            location={"bottom"}
            />
            <div
             className={styles.footerDesktop_sm}
            >
                {SocialMediaIcons}

            </div>
          </div>

        </footer>
      </>
    )


}

export default Footer;
