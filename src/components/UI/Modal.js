import { Fragment } from "react";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop onClose={props.onClose}/>

      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;

// Dont know why portal is not working

// import { Fragment } from 'react';
// import ReactDOM from 'react-dom';

// import classes from './Modal.module.css';

// const Backdrop = (props) => {
//   return <div className={classes.backdrop} />;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div className={classes.modal}>
//       <div className={classes.content}>{props.children}</div>
//     </div>
//   );
// };

// const portalElement = document.getElementById('overlays');

// const Modal = (props) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(<Backdrop />, portalElement)}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         portalElement
//       )}
//     </Fragment>
//   );
// };

// export default Modal;
