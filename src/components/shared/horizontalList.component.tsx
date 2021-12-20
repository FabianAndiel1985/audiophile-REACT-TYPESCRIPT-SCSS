import styles from "./horizontalList.module.scss";
import {headings} from "../../constants/constants"

const HorizontalList = (): JSX.Element => {

  
  return (
    <ul>
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
