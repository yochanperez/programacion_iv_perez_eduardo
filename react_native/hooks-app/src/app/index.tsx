import { Text, View } from 'react-native';
import Paso1 from './paso1';
import Paso2 from './paso2';
import Paso3 from './paso3';
import SumaPaso3 from './paso3_suma';
import Paso4 from './paso4';
import Paso5 from './paso5';
import Paso6 from './paso6';
import Paso7 from './paso7';
import { Paso8 } from './paso8'


const PASO = 9

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <SumaPaso3 />
    case 5:
      return <Paso4 />
    case 6:
      return <Paso5 />
    case 7:
      return <Paso6 />
    case 8:
      return <Paso7 />
    case 9:
      return <Paso8 />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}