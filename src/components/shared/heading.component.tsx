import styles from "./heading.module.scss";

const Heading = ({heading,location}:{heading:string,location:"top" | "bottom"}) => {
  return (
    <h2
    //className={styles.heading}
      className={location === "top" ? styles.headingTop : styles.headingBottom}
    >
        {heading}
    </h2>
  )
}

export default Heading