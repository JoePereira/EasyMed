import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { styles} from './styles';
import { CadDependenteScreenNavigationProp, CameraScreenNavigationProp, MeusMedicamentoScreenNavigationProp } from "../../navigation/AppNavigator";

export default function HomeSupervisor() {
    const navigation = useNavigation<CadDependenteScreenNavigationProp | MeusMedicamentoScreenNavigationProp | CameraScreenNavigationProp>();

    const [isModalVisible, setModalVisible] = useState(false);

    const [openCamera, setOpenCamera] = useState(false)

    const handleButtonPress = (buttonNumber: number) => {
        if(buttonNumber === 1 ){
            navigation.navigate('CadDependente')
        }else if (buttonNumber === 2){
            navigation.navigate('MeusMedicamentos')
        }else if (buttonNumber === 3){
            setModalVisible(true)
        }
    }

    const startCamera = () => {
        setOpenCamera(true);
        setModalVisible(false);
        navigation.navigate('CameraScreen');
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