import React, { useState, useEffect } from 'react';
import { SwitcherWrapp, SwitcherBox } from '..//../components/ThemeSwitcher/ThemeSwitcher.styled';
//import SwitcherLanguage from 'components/SwitcherLanguage/SwitcherLanguage';

export const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
    const newTheme = !isDarkTheme ? 'dark' : 'light';
    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      document.body.dataset.theme = savedTheme;
      setIsDarkTheme(savedTheme === 'dark');
    } else {
      document.body.dataset.theme = prefersDarkMode ? 'dark' : 'light';
      setIsDarkTheme(prefersDarkMode);
    }
  }, []);

  return (
    <SwitcherBox>
      <SwitcherWrapp className="switcher-wrapp">
        <input type="checkbox" className="switcher" onChange={toggleTheme} checked={isDarkTheme} />
        <span className="switcher-slider"></span>
      </SwitcherWrapp>
      <SwitcherLanguage />
    </SwitcherBox>
  );
};

export default ThemeSwitcher;