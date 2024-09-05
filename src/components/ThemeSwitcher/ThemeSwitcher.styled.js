import styled from 'styled-components';
import sun from '../../components/images/sun.png';
import moon from '../../components/images/moon.png';
import clouds from '../../components/images/cloudy.png';

export const SwitcherBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;
  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

export const SwitcherWrapp = styled.label`
  display: block;
  position: relative;

  width: 40px;
  height: 24px;

  .switcher {
    height: 0;
    width: 0;
    opacity: 0;
  }
  .switcher-slider {
    position: absolute;
    left: 0;
    bottom: 8.33%;
    top: 8.33%;
    right: 0;

    border-radius: 30px;
    background-color: #d8f5ff;
    background-image: url(${clouds});
    background-size: 17px;
    background-repeat: no-repeat;
    background-position: 19px;
    cursor: pointer;
    transition: background-image 350ms cubic-bezier(0.4, 0, 0.2, 1),
      background-position 350ms cubic-bezier(0.4, 0, 0.2, 1),
      background-size 350ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 450ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .switcher-slider::before {
    content: '';
    position: absolute;
    top: -2px;
    right: 52.5%;
    bottom: 12.5%;
    left: auto;

    height: 24px;
    width: 24px;
    background-image: url(${sun});
    background-size: cover;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 450ms cubic-bezier(0.4, 0, 0.2, 1),
      background-image 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .switcher:checked + .switcher-slider::before {
    transform: translateX(25px) rotate(346deg);
    background-image: url(${moon});
    transition: transform 450ms cubic-bezier(0.4, 0, 0.2, 1),
      background-image 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .switcher:checked + .switcher-slider {
    background-color: #2f4e90;
  }
`;