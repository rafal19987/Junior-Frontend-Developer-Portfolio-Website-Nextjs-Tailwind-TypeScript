'use client';

import { createContext, useContext, useState } from 'react';

type TAppContext = {
  selectedSection: TSelectedSection;
  handleSelect: (section: TSelectedSection) => void;
};

export type TSelectedSection =
  | 'home'
  | 'about'
  | 'experience'
  | 'projects'
  | 'contact'
  | string;

export const AppContext = createContext<TAppContext>({
  selectedSection: 'home',
  handleSelect: (section: TSelectedSection) => {},
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedSection, setSelectedSection] =
    useState<TSelectedSection>('home');

  const handleSelect = (section: TSelectedSection) => {
    setSelectedSection(section);
  };

  return (
    <AppContext.Provider value={{ selectedSection, handleSelect }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): TAppContext => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
