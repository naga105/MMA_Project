import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from 'app/Screens/Home/HomeScreen';
import {ProfileScreen} from 'app/Screens/Profile/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LoginScreen} from '../Screens/Auth/LoginScreen';
import {SignUpScreen} from '../Screens/Auth/SignUpScreen';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
   return (
      <NavigationContainer>
         <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
               tabBarIcon: ({focused, color, size}) => {
                  let iconName;

                  if (route.name === 'Home') {
                     iconName = 'home-outline';
                  } else if (route.name === 'Profile') {
                     iconName = 'format-list-bulleted';
                  } else if (route.name === 'Favorite') {
                     iconName = 'cards-heart-outline';
                  }

                  // You can return any component that you like here!
                  return <Icon name={iconName} size={size} color={color} />;
               },
               tabBarActiveTintColor: 'tomato',
               tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen
               name="Home"
               component={HomeScreen}
               options={{
                  headerShown: false,
               }}
            />
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Favorite" component={SignUpScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
         </Tab.Navigator>
      </NavigationContainer>
   );
}
