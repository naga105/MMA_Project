import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExplorePage from './pages/Explore';
import SearchPage from './pages/SearchPage';
import HotelDetail from './pages/HotelDetail';

const Stack = createNativeStackNavigator();
export const HomeScreen = ({navigation, screenName}: any) => {
   return (
      <Stack.Navigator initialRouteName="Home">
         <Stack.Screen
            name="Home"
            component={ExplorePage}
            options={{headerShown: false}}
         />
         <Stack.Screen
            name="Search"
            component={SearchPage}
            options={{headerShown: false}}
         />
         <Stack.Screen
            name="Hotel"
            component={HotelDetail}
            options={{headerShown: false}}
         />
      </Stack.Navigator>
   );
};
