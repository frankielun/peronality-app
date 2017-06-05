import { TabNavigator } from 'react-navigation';
import CatalogStackScreen from './CatalogStackRouter';
import ResultStackScreen from './ResultStackRouter';
import SettingStackScreen from './SettingStackRouter';
import { Platform } from 'react-native';

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
    style: { marginTop: (Platform.OS === 'ios') ? 0 : 24 },
  },
});

export default TabRouter;
