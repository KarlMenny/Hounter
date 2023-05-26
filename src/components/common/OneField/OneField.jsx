import React, { useEffect, useState } from 'react';
import './OneField.scss';

function getIconSvg(svg) {
  return (
    <>
      {svg === 'marker' ? (
        <svg
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 0C11.3869 0 13.6761 0.993372 15.364 2.76159C17.0518 4.5298 18 6.92801 18 9.42864C18 13.934 15.0975 18.081 9.402 21.8776C9.28181 21.9575 9.14237 22 9 22C8.85763 22 8.71819 21.9575 8.598 21.8776C2.9025 18.081 0 13.934 0 9.42864C0 6.92801 0.948211 4.5298 2.63604 2.76159C4.32387 0.993372 6.61305 0 9 0V0ZM9 6.28576C8.20435 6.28576 7.44129 6.61689 6.87868 7.20629C6.31607 7.7957 6 8.5951 6 9.42864C6 10.2622 6.31607 11.0616 6.87868 11.651C7.44129 12.2404 8.20435 12.5715 9 12.5715C9.79565 12.5715 10.5587 12.2404 11.1213 11.651C11.6839 11.0616 12 10.2622 12 9.42864C12 8.5951 11.6839 7.7957 11.1213 7.20629C10.5587 6.61689 9.79565 6.28576 9 6.28576V6.28576Z"
            fill="#F59E0B"
          />
        </svg>
      ) : svg === 'letter' ? (
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM17 2L10.5 6.47C10.348 6.55777 10.1755 6.60397 10 6.60397C9.82446 6.60397 9.65202 6.55777 9.5 6.47L3 2H17Z"
            fill="#3B82F6"
          />
        </svg>
      ) : svg === 'arrow' ? (
        <svg
          width="7"
          height="14"
          viewBox="0 0 7 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.993352 0.00180435C0.761661 0.00134945 0.537126 0.0825443 0.358724 0.231296C0.258315 0.315059 0.175316 0.417933 0.114479 0.534022C0.0536416 0.650112 0.0161625 0.777137 0.00418798 0.907824C-0.00778654 1.03851 0.00597897 1.17029 0.0446958 1.29562C0.0834126 1.42094 0.146319 1.53735 0.229814 1.63818L4.67221 6.98632L0.388472 12.3444C0.306104 12.4465 0.244592 12.5639 0.207475 12.69C0.170357 12.8161 0.158365 12.9482 0.172187 13.079C0.186009 13.2097 0.225373 13.3364 0.288017 13.4518C0.35066 13.5672 0.435349 13.669 0.537213 13.7513C0.639811 13.8421 0.75996 13.9107 0.89012 13.9526C1.02028 13.9945 1.15764 14.0088 1.29359 13.9948C1.42953 13.9807 1.56112 13.9385 1.68009 13.8709C1.79907 13.8032 1.90286 13.7116 1.98496 13.6016L6.77442 7.61492C6.92027 7.43638 7 7.21244 7 6.98133C7 6.75021 6.92027 6.52627 6.77442 6.34773L1.81639 0.361009C1.71691 0.240259 1.59055 0.144807 1.44755 0.0823965C1.30455 0.0199862 1.14894 -0.00762463 0.993352 0.00180435Z"
            fill="white"
          />
        </svg>
      ) : null}
    </>
  );
}

const OneField = ({
  textBtn = 'Button',
  svg = 'marker',
  placeholder = '',
  isArrow = false,
  className,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const oneFieldHandleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', oneFieldHandleResize);

    return () => {
      window.removeEventListener('resize', oneFieldHandleResize);
    };
  }, []);

  let ph = placeholder;

  if (windowWidth < 470) {
    ph = placeholder.slice(0, 23);
  }

  return (
    <div className={'one-field' + (className ? ` ${className}` : '')}>
      {getIconSvg(svg)}
      <input className="one-field__field" placeholder={ph} />
      <div className="one-field__btn">
        <span className="one-field__btn-text">{textBtn}</span>
        {isArrow ? getIconSvg('arrow') : null}
      </div>
    </div>
  );
};

export default OneField;
