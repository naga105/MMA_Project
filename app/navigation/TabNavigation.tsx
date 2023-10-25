import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from 'app/Screens/Home/HomeScreen';
import {ProfileScreen} from 'app/Screens/Profile/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LoginScreen} from '../Screens/Auth/LoginScreen';
import {SignUpScreen} from '../Screens/Auth/SignUpScreen';
import {RootStackParamList} from '~/type.d/type';
//Thêm tab screen thì nhớ add cái name vào RootStackParam type này
const Tab = createBottomTabNavigator<RootStackParamList>();

export default function TabNavigation() {
   return (
      <NavigationContainer>
         <Tab.Navigator
            initialRouteName="Explore"
            screenOptions={({route}) => ({
               tabBarIcon: ({focused, color, size}) => {
                  let iconName;

                  if (route.name === 'Explore') {
                     iconName = 'magnify';
                  } else if (route.name === 'Wishlists') {
                     iconName = 'heart-outline';
                  } else if (route.name === 'Profile') {
                     iconName = 'account-box-outline';
                  } else {
                     iconName = 'airplane';
                  }

                  // You can return any component that you like here!
                  return <Icon name={iconName} size={size} color={color} />;
               },
               tabBarActiveTintColor: 'tomato',
               tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen
               name="Explore"
               component={HomeScreen}
               options={{
                  headerShown: false,
               }}
            />

            <Tab.Screen name="Wishlists" component={SignUpScreen} />
            <Tab.Screen name="Trips" component={SignUpScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
         </Tab.Navigator>
      </NavigationContainer>
   );
}
