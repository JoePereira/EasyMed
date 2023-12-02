import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { styles} from './styles';
import { CadDependenteScreenNavigationProp, CameraScreenNavigationProp, MeusDependentesScreenNavigationProp, MeusMedicamentoScreenNavigationProp } from "../../navigation/AppNavigator";

export default function HomeSupervisor() {
    const navigation = useNavigation<CadDependenteScreenNavigationProp | MeusDependentesScreenNavigationProp>();
    const route = useRoute();

    const { nomeUsuario } = route.params as { nomeUsuario?: string };
    console.log("🚀 ~ file: index.tsx:12 ~ HomeSupervisor ~ nomeUsuario:", nomeUsuario)

    const params = { nomeUsuario: nomeUsuario };

    const handleButtonPress = (buttonNumber: number) => {
        if(buttonNumber === 1 ){
            navigation.navigate('CadDependente', params)
        }else if (buttonNumber === 2){
            navigation.navigate('MeusDependentes', params)
        }
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
                    <Text  style={styles.textoBotao}>Cadastrar Dependente</Text>
                </View>

                {/* Botão 2 */}
                <View style={styles.botaoWrapper}>
                    <TouchableOpacity
                    style={styles.botao}
                    onPress={() => handleButtonPress(2)}
                    >
                        <Image source={require('../../assets/images/remedios.png')} style={styles.imagemBotao} />
                    </TouchableOpacity>
                    <Text  style={styles.textoBotao}>Meus Dependentes</Text>
                </View>
            </View>
        </View>
    )
}