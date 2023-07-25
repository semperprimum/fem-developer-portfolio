import styles from "./Input.module.scss";

export function Input(props) {
  return (
    <div
      className={`${styles.inputWrapper} ${
        props.className.includes("error") ? styles.error : ""
      }`}
    >
      <input {...props} className={`${styles.input} ${props.className}`} />
    </div>
  );
}
