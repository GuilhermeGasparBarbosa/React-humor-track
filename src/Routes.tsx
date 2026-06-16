import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./screens/Home";
import { DetailPage } from "./screens/Datail";
import { SetUserNamePage } from "./screens/SetUserName";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home" component={HomePage} />
                <Stack.Screen name="detail" component={DetailPage} />
                <Stack.Screen name = "setUserName" component={SetUserNamePage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}