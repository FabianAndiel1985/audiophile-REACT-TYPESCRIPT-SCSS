import styles from "./category.module.scss";
import {ArrowRight} from "../../constants/icons";

type  CategoryBoxProps = {
    categoryName:string;
    setMarginLeft:boolean;
    backgroundImage:any;
}

const CategoryBox = 
({categoryName,setMarginLeft,backgroundImage}:CategoryBoxProps): JSX.Element => {

console.log("background image is " + backgroundImage)

  return (
    <>
        <div 
        className={(setMarginLeft ? styles.boxInnerMargin :styles.box)}
        
        >

            <div
            className={styles.box_image}
            style={{backgroundImage: `url(${backgroundImage})`}}
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