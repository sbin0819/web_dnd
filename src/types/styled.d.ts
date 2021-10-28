import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {}

  export interface MainTheme {
    desktop: DeskTopTheme;
    mobile: MobileTheme;
  }

  export interface DeskTopTheme {
    type: 'desktop';
    background: 'pink';

    space: {};
    header: {};
    card: {};
    input: {};
    button: {};
  }

  export interface MobileTheme {
    type: 'mobile';
    space: {};
    header: {};
    card: {};
    input: {};
    button: {};
  }
}
