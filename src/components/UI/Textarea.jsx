import styles from "./Textarea.module.scss";

export function Textarea(props) {
  return (
    <div
      className={`${styles.inputWrapper} ${
        props.className.includes("error") ? styles.error : ""
      }`}
    >
      <textarea
        {...props}
        className={`${styles.textarea} ${props.className}`}
      ></textarea>
    </div>
  );
}
