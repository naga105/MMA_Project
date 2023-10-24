import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from 'app/Screens/Home/HomeScreen';
import {ProfileScreen} from 'app/Screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();
export const NavigationBar = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
               name="Home"
               component={HomeScreen}
               options={{title: 'Home'}}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};
