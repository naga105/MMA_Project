import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExplorePage from './pages/Explore';

const Stack = createNativeStackNavigator();
export const HomeScreen = ({navigation, screenName}: any) => {
   return (
      <Stack.Navigator initialRouteName="Home">
         <Stack.Screen
            name="Home"
            component={ExplorePage}
            options={{headerShown: false}}
         />
      </Stack.Navigator>
   );
};
