import { create } from 'zustand';

type TStore = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

export const useMobileMenu = create<TStore>((set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}));
