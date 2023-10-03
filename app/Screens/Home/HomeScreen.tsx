import {Button, ScrollView, Text, View} from 'react-native';

export const HomeScreen = ({navigation, screenName}: any) => {
   return (
      <ScrollView>
         <Text>Helo from 123</Text>
         <Text style={{height: 200}}>{screenName}</Text>
         <Button
            title="go to profile"
            onPress={() => navigation.navigate('Profile')}
         />
      </ScrollView>
   );
};
