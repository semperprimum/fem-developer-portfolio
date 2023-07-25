import styles from "./Button.module.scss";

export function Button(props) {
  return (
    <button {...props} className={`${styles.btn} ${props.className}`}>
      {props.children}
    </button>
  );
}

// import styled from "styled-components";

// export const Button = styled.button`
//   position: relative;
//   font-family: "Space Grotesk";
//   color: hsla(0, 0%, 100%, 1);
//   text-transform: uppercase;
//   font-size: 1rem;
//   background: transparent;
//   border: none;
//   line-height: 1.625;
//   letter-spacing: 0.14288rem;
//   padding-bottom: 0.745rem;
//   cursor: pointer;

//   &::after {
//     content: "";
//     position: absolute;
//     bottom: 0.125rem;
//     left: 0;
//     width: 100%;
//     height: 0.125rem;
//     background-color: hsla(154, 71%, 59%, 1);
//   }
// `;
