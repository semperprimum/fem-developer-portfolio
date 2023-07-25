import styles from "./Anchor.module.scss";

export function Anchor(props) {
  return (
    <a {...props} className={`${styles.anchor} ${props.className}`}>
      {props.children}
    </a>
  );
}
