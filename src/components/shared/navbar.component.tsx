import styles from "./navbar.module.scss";
import {HamburgerIcon, ShoppingCartIcon} from "../../constants/icons"
import HorizontalList from "./horizontalList.component"
import Heading from "./heading.component";

const Navbar = (): JSX.Element => {
  
  return (
    <div className={styles.mainNavbar}>
        
        <span
          className={styles.hamburgerIcon}
        >
          {HamburgerIcon}
        </span>
      
        <Heading
          heading={"audiophile"}
          location={"top"}
        />

        <HorizontalList
          location={"top"}
        />
      
        {ShoppingCartIcon}
    </div>
  );
}

export default Navbar;
