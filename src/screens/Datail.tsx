import { Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { TrouteProps } from "../Routes";



export const DetailPage = () => {
    const { params } = useRoute<TrouteProps<'detail'>>()

    return (<>
        <Text>Detail {params.rate}</Text>
    </>)
}