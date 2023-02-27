import React from 'react';
import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

const Modal = ({ children }) => {
  const navigate = useNavigate();

  const closeModalHandler = () => {
    navigate('..');
  }
  return (
    <>
    <div className={classes.backdrop} onClick={closeModalHandler}></div>
    <dialog open className={classes.modal}>{children}</dialog>
    </>
  )
}

export default Modal
