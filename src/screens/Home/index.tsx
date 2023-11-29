import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { styles} from './styles';
import { CadMedicamentoScreenNavigationProp, CameraScreenNavigationProp, MeusMedicamentoScreenNavigationProp } from "../../navigation/AppNavigator";
import Modal from 'react-native-modal';
import { Camera, CameraType } from 'expo-camera';

export default function Home() {
    const navigation = useNavigation<CadMedicamentoScreenNavigationProp | MeusMedicamentoScreenNavigationProp | CameraScreenNavigationProp>();

    const [isModalVisible, setModalVisible] = useState(false);

    const [openCamera, setOpenCamera] = useState(false)

    const handleButtonPress = (buttonNumber: number) => {
        if(buttonNumber === 1 ){
            navigation.navigate('CadMedicamento')
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
                    <Text  style={styles.textoBotao}>Simular</Text>
                </View>
            </View>
            <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.5}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Atenção, você tem um remedio para tomar</Text>
                    <Text>Remedio: Aspirina</Text>
                    <Text>Comprimidos: 1</Text>
                    <View style={styles.botoesContainer}>
                        <View style={styles.botaoWrapper}>
                            <TouchableOpacity
                            style={styles.botao}
                            onPress={() => startCamera()}
                            >
                                <Image source={require('../../assets/images/camera.png')} style={styles.imagemBotao} />
                            </TouchableOpacity>
                            <Text  style={styles.textoBotao}>Identificar Remédio</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}