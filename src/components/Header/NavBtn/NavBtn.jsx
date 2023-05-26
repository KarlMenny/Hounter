import React, { useEffect, useRef, useState } from 'react';
import './NavBtn.scss';
import SpriteSvg from '../../common/SpriteSvg';

const NavBtn = ({ hasDropdown = false, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (btnRef.current && btnRef.current.contains(event.target)) {
        return;
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-btn">
      {hasDropdown ? (
        <>
          <a
            className={`nav-btn__btn ${isOpen ? 'nav-btn__btn--active' : ''}`}
            href="#"
            ref={btnRef}
            onClick={toggleMenu}
          >
            {children}
            <SpriteSvg svg="arrow_dropdown_menu" />
          </a>
          <ul
            className={`nav-btn__menu ${isOpen ? 'nav-btn__menu--active' : ''}`}
            ref={menuRef}
          >
            <li>
              <a className="nav-btn__menu-link" href="#" onClick={toggleMenu}>
                House
              </a>
            </li>
            <li>
              <a className="nav-btn__menu-link" href="#" onClick={toggleMenu}>
                Villa
              </a>
            </li>
            <li>
              <a className="nav-btn__menu-link" href="#" onClick={toggleMenu}>
                Apartment
              </a>
            </li>
          </ul>
        </>
      ) : (
        <a className="nav-btn__btn" href="#">
          {children}
        </a>
      )}
    </div>
  );
};

export default NavBtn;
