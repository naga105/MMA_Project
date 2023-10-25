import {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import {HeaderNav} from './component/HeaderNav';
import {HotelCards} from './component/HotelCards';
import {Footer} from './component/Footer';
import {DummyContext} from '~/utils/context';

export default function ExplorePage({navigation}: any) {
   const [data, setData] = useState<any>();
   const [isLoading, setisLoading] = useState(true);
   return (
      <View className="flex-1 mt-4 w-full">
         <HeaderNav />
         <HotelCards navigation={navigation} />
         <Footer />
      </View>
   );
}
