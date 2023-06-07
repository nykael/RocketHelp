import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import {THEME} from './src/styles/theme'

import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontLoaded] = useFonts({Roboto_700Bold, Roboto_400Regular})



  return (
    <NativeBaseProvider theme={THEME}> 
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent" 
        translucent     
      />
      {fontLoaded ? <Home /> : <Loading /> }
    </NativeBaseProvider>
  );
}