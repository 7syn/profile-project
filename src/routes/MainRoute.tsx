import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ProfileCreate from '../screens/ProfileCreate/Index';
import ProfileDetail from '../screens/ProfileDetail/Index';

const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="ProfileCreate" component={ProfileCreate} />
        <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainRoute