import { Text } from "react-native";
import { useRoute } from "@react-navigation/native";



export const DetailPage = () => {
    const { params} = useRoute<any>()

    return (<>
        <Text>Detail {params.rate}</Text>
    </>)
}