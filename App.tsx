/* eslint-disable semi */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, View, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import TabNavigation from 'app/navigation/TabNavigation';
import ContextProvider from '~/utils/context';

function App(): JSX.Element {
   const isDarkMode = useColorScheme() === 'dark';

   return (
      <ContextProvider>
         <TabNavigation />
      </ContextProvider>
   );
}

export default App;
