import React, { useState } from 'react';
import './BurgerMenu.scss';

const BurgerMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSubMenuActive, setIsSubMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const toggleSubMenu = () => {
    setIsSubMenuActive(!isSubMenuActive);
  };

  return (
    <div className="burger-menu">
      <div
        className={
          'burger-menu__burger' +
          (isMenuActive ? ' burger-menu__burger--active' : '')
        }
        onClick={toggleMenu}
      >
        <div className="burger-menu__burger-item"></div>
        <div className="burger-menu__burger-item"></div>
        <div className="burger-menu__burger-item"></div>
      </div>

      <div
        className={
          'burger-menu__menu' +
          (isMenuActive ? ' burger-menu__menu--active' : '')
        }
      >
        <div className="burger-menu__header"></div>
        <div className="burger-menu__content">
          <a className="burger-menu__menu-item" href="#">
            About Us
          </a>
          <a className="burger-menu__menu-item" href="#">
            Article
          </a>
          <div className="burger-menu__menu-item" onClick={toggleSubMenu}>
            Property
          </div>
          <div
            className={
              'burger-menu__submenu' +
              (isSubMenuActive ? ' burger-menu__submenu--active' : '')
            }
          >
            <a className="burger-menu__submenu-item" href="#">
              House
            </a>
            <a className="burger-menu__submenu-item" href="#">
              Villa
            </a>
            <a className="burger-menu__submenu-item" href="#">
              Apartment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
