import styles from "./navbar.module.scss";
import {HamburgerIcon, ShoppingCartIcon} from "../../constants/icons"
import HorizontalList from "./horizontalList.component"

const Navbar = (): JSX.Element => {
  
  return (
    <div className={styles.mainNavbar}>
        
        <span
          className={styles.hamburgerIcon}
        >
          {HamburgerIcon}
        </span>
      
        <h2
         className={styles.heading}
        >
            audiophile
        </h2>

        <HorizontalList/>
        


        {ShoppingCartIcon}
    </div>
  );
}

export default Navbar;
