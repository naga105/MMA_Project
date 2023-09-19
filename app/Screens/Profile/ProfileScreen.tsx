import {Button, Text, View} from 'react-native';

export const ProfileScreen = ({navigation}: any) => {
   return (
      <View>
         <Text>Helo from Profile</Text>
         <Button
            title="got to home"
            onPress={() => navigation.navigate('Home')}
         />
      </View>
   );
};
