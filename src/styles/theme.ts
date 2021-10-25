import { DefaultTheme, css, CSSObject } from 'styled-components';
const sizes = {
  desktop_1: 1919,
  desktop_2: 1599,
  desktop_3: 1365,
  desktop_4: 1023,
  tablet: 600,
  mobile: 374,
};

const theme: DefaultTheme = {
  media: Object.keys(sizes).reduce((acc: any, label: string) => {
    if (
      label === 'desktop_1' ||
      label === 'desktop_2' ||
      label === 'desktop_3' ||
      label === 'desktop_4' ||
      label === 'tablet' ||
      label === 'mobile'
    ) {
      acc[label] = (args: CSSObject | TemplateStringsArray) =>
        css`
          @media (max-width: ${sizes[label]}px) {
            ${css(args)};
          }
        `;
    }
    return acc;
  }, {}),
};
export { theme };
