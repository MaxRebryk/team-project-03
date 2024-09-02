import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import css from './AuthNav.module.css';
import Logo from '../AppBar/Logo.png';
import Ellipse from '../Ellipse.png';

import LogOut from '../LogOut/Logout';
import ModalSetting from '../ModalSetting/ModalSetting';
import ModalUser from '../ModalUser/ModalUser';

export default function AuthNav() {
  //=========modalOpenSetting===================
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  //=========ContextModal=======================
  const [contextModalIsOpen, setIsContextModalOpen] = useState(false);
  function openContext() {
    setIsContextModalOpen(true);
  }
  function closeContext() {
    setIsContextModalOpen(false);
  }
  //=========LogOutModal========================
  const [logOutModalIsOpen, setLogOutModalIsOpen] = useState(false);
  function openLogOut() {
    setLogOutModalIsOpen(true);
  }
  function closeLogOut() {
    setLogOutModalIsOpen(false);
  }
  const handleClick = () => {
    openContext();
  };
  return (
    <div className={css.wrap}>
      <NavLink to="/">
        {/* Home Page */}
        <img src={Logo} width="102" height="48" alt="Logo" />
      </NavLink>
      <div className={css['user-container']}>
        <p className={css['name-text']}>Davide</p>
        <img
          src={Ellipse}
          className={css.image}
          width="28"
          height="28"
          alt="user"
        />
        <button type="button" className={css.button} onClick={handleClick}>
          <IoIosArrowDown />
        </button>
      </div>
      <ModalUser
        openLogOut={openLogOut}
        openModal={openModal}
        closeContext={closeContext}
        contextModalIsOpen={contextModalIsOpen}
      />
      <LogOut logOutModalIsOpen={logOutModalIsOpen} closeLogOut={closeLogOut} />
      <ModalSetting closeModal={closeModal} isOpen={modalIsOpen} />
    </div>
  );
}
