import styles from "./horizontalList.module.scss";
import {headings} from "../../constants/constants"

type AppProps = {
  showOnMobile:boolean
}




const HorizontalList = ({location}:{location:"top" | "bottom"}): JSX.Element => {

  return (
    <ul
    className={location === "top" ? styles.listTop : styles.listBottom}
    >
    { headings && headings.map(heading=>(
      <li className={styles.listItem} >
        {heading}
      </li>
    )
    )
    }
    </ul>
  );
}

export default HorizontalList;
