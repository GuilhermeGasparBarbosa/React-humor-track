import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type TNavigationScreemProps = NativeStackNavigationProp<Record<string, any>>;

export const HomePage = () => {
    const navigation = useNavigation<TNavigationScreemProps>();


    return (<>
        <Text>Home Page</Text>

        <Button
            title="Go to Detail"
            onPress={() => navigation.push('detail', { rate : 3 })}
        />
    </>)
}