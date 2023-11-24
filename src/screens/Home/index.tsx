import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { styles} from './styles';

export default function Home() {
    const navigation = useNavigation();

    const handleButtonPress = (buttonNumber: number) => {
        console.log(`Botão ${buttonNumber} pressionado`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={require('../../assets/images/logo.jpeg')} style={styles.logo} />
                <Text style={styles.titulo}>Easy Med</Text>
            </View>

            <View style={styles.botoesContainer}>
                {/* Botão 1 */}
                <View style={styles.botaoWrapper}>
                    <TouchableOpacity
                    style={styles.botao}
                    onPress={() => handleButtonPress(1)}
                    >
                        <Image source={require('../../assets/images/comprimido.png')} style={styles.imagemBotao} />
                    </TouchableOpacity>
                    <Text  style={styles.textoBotao}>Cadastrar Medicamento</Text>
                </View>

                {/* Botão 2 */}
                <View style={styles.botaoWrapper}>
                    <TouchableOpacity
                    style={styles.botao}
                    onPress={() => handleButtonPress(2)}
                    >
                        <Image source={require('../../assets/images/remedios.png')} style={styles.imagemBotao} />
                    </TouchableOpacity>
                    <Text  style={styles.textoBotao}>Meus Medicamento</Text>
                </View>
            </View>

            <View style={styles.botoesContainer}>
                {/* Botão 3 */}
                <View style={styles.botaoWrapper}>
                    <TouchableOpacity
                    style={styles.botao}
                    onPress={() => handleButtonPress(3)}
                    >
                        <Image source={require('../../assets/images/mao.png')} style={styles.imagemBotao} />
                    </TouchableOpacity>
                    <Text  style={styles.textoBotao}>Supervisionar</Text>
                </View>
            </View>
        </View>
    )
}