import styles from "./heading.module.scss";

const Heading = ({heading}:{heading:string}) => {
  return (
    <h2
    className={styles.heading}
    >
        {heading}
    </h2>
  )
}

export default Heading