import {
  MainTheme,
  DeskTopTheme,
  MobileTheme,
  css,
  CSSObject,
} from 'styled-components';

const desktop: DeskTopTheme = {
  type: 'desktop',
  background: 'pink',
  space: {},
  header: {},
  card: {},
  input: {
    width: 400,
  },
  button: {},
};

const mobile: MobileTheme = {
  type: 'mobile',
  space: {},
  header: {},
  card: {},
  input: {
    width: 280,
  },
  button: {},
};

const theme = (type: string) => {
  if (type === 'desktop') {
    return desktop;
  }
  if (type === 'mobile') {
    return mobile;
  }
};

export { theme };
