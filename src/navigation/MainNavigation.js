import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import Detail from '../screen/Detail/Detail';
import Home from '../screen/Home/Home';
import LinkingScreen from '../screen/LinkingScreen';
import linking from '../linking';
const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="LinkingScreen" component={LinkingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
