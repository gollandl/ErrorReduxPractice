import { TabNavigator } from 'react-navigation';
//import ContainerOne from '../components/ContainerOne';
//import ContainerTwo from '../components/ContainerTwo';
import popUp from '../components/popup';

const TabNav = TabNavigator({
  popup: { screen: popUp }
});

export { TabNav };
