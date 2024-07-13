import { useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Palette from './palette';
import Typography from './typography';
import componentStyleOverrides from './compStyleOverride';
import customShadows from './shadows';
import config from 'config';

export default function ThemeCustomization({ children }) {

  const theme = useMemo(() => Palette(config.navType, config.presetColor), []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = useMemo(() => Typography(theme, config.borderRadius, config.fontFamily), [theme]);
  const themeCustomShadows = useMemo(() => customShadows(config.navType, theme), [theme]);

  const themeOptions = useMemo(
    () => ({
      direction: 'ltr',
      palette: theme.palette,
      mixins: {
        toolbar: {
          minHeight: '48px',
          padding: '16px',
          '@media (min-width: 600px)': {
            minHeight: '48px'
          }
        }
      },
      typography: themeTypography,
      customShadows: themeCustomShadows
    }),
    [theme, themeCustomShadows, themeTypography]
  );

  const themes = createTheme(themeOptions);
  themes.components = useMemo(
    () => componentStyleOverrides(themes, config.borderRadius, config.outlinedFilled),
    [themes]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
