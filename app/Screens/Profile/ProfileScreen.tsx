import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '~/type.d/type';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const ProfileScreen: React.FC<Props> = ({navigation}) => {
   return (
      <View>
         <Text>Helo from Profile</Text>
         <Button
            title="got to home"
            onPress={() => navigation.navigate('Explore')}
         />
      </View>
   );
};
