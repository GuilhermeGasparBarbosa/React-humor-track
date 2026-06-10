import {SafeAreaView} from 'react-native-safe-area-context'; //Faz com que o conteúdo fique dentro da área segura do dispositivo, evitando sobreposição com elementos como a barra de status ou a barra de navegação.
import { MyButton } from './shared/Components/MyButton';
import { Text } from 'react-native';
import { useState } from 'react';

export default function App() {
    const [state, setState] = useState('teste');

    console.log('render')
    
    return (
     <SafeAreaView>

        <MyButton order={1} onPress={() => setState('teste2')}>
            <Text>Mybutton {state}</Text>
        </MyButton>

        <MyButton order={2} onPress={() => console.log('teste2')}>
            <Text>Mybutton {2}</Text>
        </MyButton>

        <MyButton order={3} onPress={() => console.log('teste3')}>
            <Text>Mybutton {3}</Text>
        </MyButton>

     </SafeAreaView>
    );
}



