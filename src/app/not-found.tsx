import Link from "next/link";
import styles from "./NotFound.module.css";

const notFoundPage = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.error}>404</h1>
      <div className={styles.page}>Ooops!!! The page you are looking for is not found</div>
      <Link className={styles.back_home} href="/">
        Back to home
      </Link>
    </div>
  );
};

export default notFoundPage;
