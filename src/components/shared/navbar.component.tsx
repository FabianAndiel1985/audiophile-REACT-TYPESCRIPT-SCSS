import styles from "./navbar.module.scss";
import {HamburgerIcon} from "../../constants/icons"

const Navbar = (): JSX.Element => {
  
  return (
    <div className={styles.mainNavbar}>
        {HamburgerIcon}
        <h2>
            audiophile
        </h2>
    </div>
  );
}

export default Navbar;
