import styles from "./footer.module.scss";
import SocialMediaIcon from "./socialMediaIcon.component";
import { socialMedias } from "../../constants/constants";

const Footer = (): JSX.Element => {
  
  return (
    <footer className={styles.footer}>



      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
        and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
        visit our demo facility - we’re open 7 days a week.
      </p>


      <p>
        Copyright 2021. All Rights Reserved
      </p>

      <div> 
          {socialMedias.map((sm)=>{
            let medium =  sm as any;
            return(
            <SocialMediaIcon
              mediaType={medium}            
            />
            )
          }
          )
          }
      </div>
    
    </footer>
  );
}

export default Footer;
