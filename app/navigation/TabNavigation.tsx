import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from 'app/Screens/Home/HomeScreen';
import {ProfileScreen} from 'app/Screens/Profile/ProfileScreen';
import Icon from 'react-native-ionicons';
import {LoginScreen} from '../Screens/Auth/LoginScreen';
import {SignUpScreen} from '../Screens/Auth/SignUpScreen';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
   return (
      <NavigationContainer>
         <Tab.Navigator
            initialRouteName="Home"
            // screenOptions={({route}) => ({
            //    tabBarIcon: ({focused, color, size}) => {
            //       let iconName;

            //       if (route.name === 'Home') {
            //          iconName = focused
            //             ? 'information-circle'
            //             : 'information-circle-outline';
            //       } else if (route.name === 'Profile') {
            //          iconName = 'list';
            //       }

            //       // You can return any component that you like here!
            //       return <Icon name={iconName} size={size} color={color} />;
            //    },
            //    tabBarActiveTintColor: 'tomato',
            //    tabBarInactiveTintColor: 'gray',
            // })}
         >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="SignUp" component={SignUpScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
         </Tab.Navigator>
      </NavigationContainer>
   );
}
