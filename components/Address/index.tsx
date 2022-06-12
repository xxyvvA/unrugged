import styles from "./index.module.scss";

const Address = () => {
  // prettier-ignore
  return (
    <div className={styles.container}>
      <p className={styles.top}>
        Scan your Token Address to verify a crypto token.
      </p>
      <div className={styles.inputCon}>
        <input
          className={styles.input}
          type={"text"}
          placeholder={"Token Address"}
        />
        <Link 
          href={"/scanner"} 
          passHref
        >
          <a className={styles.button}>Token Scanner</a>
        </Link>
      </div>
      <p className={styles.bottom}>Claim your UnruggedDAO</p>
    </div>
  );
};

export default Address;
