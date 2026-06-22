import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TNavigationScreenProps } from "../Routes";




export const HomePage = () => {
    const navigation = useNavigation<TNavigationScreenProps>();


    return (<>
        <Text>Home Page</Text>

        <Button
            title="Go to Detail"
            onPress={() => navigation.navigate('detail', { rate : 3 })}
        />

         <Button
            title="Go to Set User Name"
            onPress={() => navigation.navigate('setUserName')}
        />
    </>)
}