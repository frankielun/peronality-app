import { TabNavigator } from 'react-navigation';
import CatalogStackScreen from './CatalogStackRouter';
import ResultStackScreen from './ResultStackRouter';
import SettingStackScreen from './SettingStackRouter';

const TabRouter = TabNavigator({
  Catalog: {
    screen: CatalogStackScreen,
  },
  Result: {
    screen: ResultStackScreen,
  },
  Setting: {
    screen: SettingStackScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#000000',
  },
});

export default TabRouter;
