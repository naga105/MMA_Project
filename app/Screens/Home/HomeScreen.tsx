import {Button, Text, View} from 'react-native';

export const HomeScreen = ({navigation, screenName}: any) => {
   return (
      <View>
         <Text>Helo from 123</Text>
         <Text>{screenName}</Text>
         <Button
            title="go to profile"
            onPress={() => navigation.navigate('Profile')}
         />
      </View>
   );
};
