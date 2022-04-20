import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

const setDark = () => {
  localStorage.theme = 'dark';
  document.documentElement.classList.add('dark');
};
const setLight = () => {
  localStorage.theme = 'light';
  document.documentElement.classList.remove('dark');
};

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    globalThis?.localStorage?.theme === 'dark'
  );

  return (
    <button
      id='theme-toggle'
      type='button'
      className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded text-sm p-1.5 mr-1'
      onClick={() => {
        isDark ? setLight() : setDark();
        setIsDark(!isDark);
      }}
    >
      {isDark ? (
        <MoonIcon className='w-4 h-4' />
      ) : (
        <SunIcon className='w-4 h-4' />
      )}
    </button>
  );
}
