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
import ContextProvider from '~/utils/context';
import StackScreen from 'app/navigation/TabNavigation';

function App(): JSX.Element {
   const isDarkMode = useColorScheme() === 'dark';

   return (
      <ContextProvider>
         <StackScreen />
      </ContextProvider>
   );
}

export default App;
