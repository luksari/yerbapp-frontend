/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { memoize, find } from 'lodash';

export type NavSliceState = {
  navItems: NavigationItem[];
}

const commonNavItems: NavigationItem[] = [
  {
    to: '/explore',
    selected: undefined,
    title: 'Przeglądaj',
    visible: true,
    icon: 'search',
  },
  {
    to: '/tutorial',
    selected: undefined,
    title: 'Poradnik',
    visible: true,
    icon: 'book',
  },
  {
    to: '/admin',
    selected: undefined,
    title: 'Panel administratora',
    visible: true,
    icon: 'appstore',
  },
  {
    to: '/',
    selected: undefined,
    title: 'Strona główna',
    visible: true,
    icon: 'home',
  },
];

const adminNavItems: NavigationItem[] = [
  {
    to: '/explore',
    selected: undefined,
    title: 'Wróć do aplikacji',
    visible: true,
    icon: 'arrow-left',
  },
  {
    to: '/admin/manufacturers',
    selected: undefined,
    title: 'Lista producentów',
    visible: true,
    icon: 'global',
  },
  {
    to: '/admin/types',
    selected: undefined,
    title: 'Typy Yerba Mate',
    visible: true,
    icon: 'coffee',
  },
  {
    to: '/admin/users',
    selected: undefined,
    title: 'Użytkownicy',
    visible: true,
    icon: 'smile',
  },

  {
    to: '/admin/ranks',
    selected: undefined,
    title: 'Rangi',
    visible: true,
    icon: 'trophy',
  },
];

const initialState: NavSliceState = {
  navItems: commonNavItems,
};

export const { name, actions, reducer } = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    setAdminNavItems(state) {
      state.navItems = adminNavItems;
    },
    setCommonNavItems(state) {
      state.navItems = commonNavItems;
    },
    setNavItems(state, action: PayloadAction<NavigationItem[]>) {
      state.navItems = action.payload;
    },
    addNavItem(state, action: PayloadAction<NavigationItem>) {
      state.navItems.push(action.payload);
    },
    removeNavItem(state, action: PayloadAction<string>) {
      state.navItems = state.navItems.filter((item) => item.to === action.payload);
    },
    setItemVisible(state, action: PayloadAction<string>) {
      state.navItems = state.navItems.map((elem) => {
        if (elem.to === action.payload) {
          return { ...elem, visible: true };
        }
        return elem;
      });
    },
    setItemHidden(state, action: PayloadAction<string>) {
      state.navItems = state.navItems.map((elem) => {
        if (elem.to === action.payload) {
          return { ...elem, visible: false };
        }
        return elem;
      });
    },
    setItemSelected(state, action: PayloadAction<string>) {
      state.navItems = state.navItems.map((elem) => {
        if (elem.to === action.payload) {
          return { ...elem, selected: true };
        }
        return { ...elem, selected: false };
      });
    },
  },
});

export const navDomain = (state) => state[name] as NavSliceState;

export const makeSelectNavItems = () => createSelector(
  navDomain,
  (substate) => substate.navItems,
);

export const makeSelectNavItem = () => createSelector(
  makeSelectNavItems(),
  (items) => memoize((itemId: string) => find(items, ['to', itemId])),
);
