export const JWT_API = {
    secret: 'SECRET-KEY',
    timeout: '1 days'
};

// basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs,
// also Don't put only '/' use blank('') instead,
// like '/berry-material-react/react/default'
export const BASE_PATH = '';

export const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
export const DASHBOARD_PATH = "/dashboard/default";

const config = {
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 8,
    outlinedFilled: true,
    navType: 'light', // light, dark
    presetColor: 'default', // default, theme1, theme2, theme3, theme4, theme5, theme6
};

export default config;
