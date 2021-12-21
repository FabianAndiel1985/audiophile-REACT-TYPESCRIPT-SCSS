import styles from "./category.module.scss";
import {ArrowRight} from "../../constants/icons";

type  CategoryBoxProps = {
    categoryName:string;
}

const CategoryBox = 
({categoryName}:CategoryBoxProps): JSX.Element => {

  return (
    <>
        <div 
        className={styles.box}
        >

            <div
            className={styles.box_image}
            >


            </div>

            <div
             className={styles.box_category}
            >
                {categoryName}
            </div>

            <div
             className={styles.box_link}
            >
                Shop
                <span
                className={styles.box_link_arrow}
                > 
                    {ArrowRight}
                </span>
            
            </div>
        </div>
    </>
  );
}

export default CategoryBox;