import { useState } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import Produtos from "../data/Produtos";

const getProdutoPorId = (id) => {
    return Produtos.find(p => p.id == id)
}

export default ({route, navigation}) => {
    const [produto, setProduto] = useState(getProdutoPorId(route.perams.id))

    return (
        <View>
            <Card>
                <Card.Cover source={{uri: produto.urlImagem}} />
                <Card.Title title={produto.title} />
                <Card.Content>
                    <Text variant="bodyMedium">{produto.description}</Text>
                </Card.Content>
            </Card>
        </View>
    )
}