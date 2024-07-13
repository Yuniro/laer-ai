// routing
import Routes from 'features/routes';

import NavigationScroll from 'components/nav-scroll';
import ThemeCustomization from 'themes';

const App = () => (
  <ThemeCustomization>
    <NavigationScroll>
      <Routes />
    </NavigationScroll>
  </ThemeCustomization>
);

export default App;
