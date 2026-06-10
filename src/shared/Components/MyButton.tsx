
import { TouchableOpacity, View, Text } from 'react-native';

interface IMyButtonProps {
    onPress?: () => void;
    order?: number;
    children: React.ReactNode; // Define a propriedade children para permitir que o componente MyButton receba elementos filhos, como o texto que será exibido dentro do botão.
}
export const MyButton = (props: IMyButtonProps) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View>
                {props.children}
            </View>
        </TouchableOpacity>
    );
}