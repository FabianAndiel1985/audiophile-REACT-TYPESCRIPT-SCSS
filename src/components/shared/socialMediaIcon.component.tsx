import { ReactComponent as Facebook }from "../../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as Instagram } from "../../assets/shared/desktop/icon-instagram.svg";
import styles from "./socialMediaIcon.module.scss";

export type SocialMediaTypes = {
  mediaType: "facebook" | "twitter" | "instagram" ;
}; 



const SocialMediaIcon = ({mediaType}:SocialMediaTypes): JSX.Element => {
  
  let icon;

  switch (mediaType) {
    case "facebook":
      icon = 
        <Facebook/>
      ;
      break;
      case "twitter":
        icon = 
          <Twitter/>
      break;
      case "instagram":
        icon = 
          <Instagram/>
        ;
      break;
    default:
      break;
  }

  return (
    <>
        <div
          className={styles.icon}
        >
            {icon}
        </div>
    </>
  );
}


export default SocialMediaIcon;