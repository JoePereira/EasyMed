import { useState } from "react";
import { TextInput, View, Text, Image, TouchableOpacity, Modal } from "react-native";

import { styles } from "./styles";
import { HomeSupervisorScreenNavigationProp } from "../../navigation/AppNavigator";
import { useNavigation, useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { useUsuarios } from "../../context/UsuariosContext";

export default function CadDependente () {

    const { usuarios, adicionarDependente } = useUsuarios();
    const navigation = useNavigation<HomeSupervisorScreenNavigationProp>();
    const route = useRoute();

    const { nomeUsuario } = route.params as { nomeUsuario?: string };


    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('');

    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.nome === nome && usuario.email === email
    );
    const usuarioEncontradoCuidador = usuarios.find(
        (usuario) => usuario.nome === nomeUsuario
    );
    console.log("🚀 ~ file: index.tsx:30 ~ CadDependente ~ usuarioEncontradoCuidador:", usuarioEncontradoCuidador)

    const handleCadDependente = () => {
        if(!usuarioEncontrado){
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Dependente não encontrado',
                visibilityTime: 3000, // Tempo que o toast ficará visível (em milissegundos)
                autoHide: true,
                topOffset: 50, // Distância do topo da tela
            });
        }else {

            setShowConfirmationModal(true)
        }

    }

    const handleConfirmation = () => {

        const novoDependente = {
            nome,
            email
        };

        if(usuarioEncontradoCuidador ){
            adicionarDependente(usuarioEncontradoCuidador.email, novoDependente);
        }

        Toast.show({
            type: 'success',
            position: 'bottom',
            text1: 'Dependente cadastrado com sucesso',
            visibilityTime: 3000, // Tempo que o toast ficará visível (em milissegundos)
            autoHide: true,
            topOffset: 50, // Distância do topo da tela
        });

        setShowConfirmationModal(false);
        navigation.navigate('HomeSupervisor', route.params)

    };

    const handleCancel = () => {

        
        const novoDependente = {
            nome,
            email
        };
    
        // Fecha o modal de confirmação
        setShowConfirmationModal(false);
    };

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                    <Image source={require('../../assets/images/logo.jpeg')} style={styles.logo} />
                    <Text style={styles.titulo}>Easy Med</Text>
            </View>
            
            <View style={styles.containerFormMedicamento}>
                <Text style={styles.label}>Nome do dependente</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome do dependente"
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={styles.label}>Email do dependente</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Email do dependente"
                    value={email}
                    onChangeText={setEmail}
                />
                </View>

                <TouchableOpacity style={styles.botao} onPress={() => handleCadDependente()}>
                    <Text style={styles.textoBotao}>Cadastrar Dependente</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showConfirmationModal}
                    onRequestClose={() => setShowConfirmationModal(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>Atenção!</Text>
                            <Text style={styles.modalText}>As informações estão corretas?</Text>
                            <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                                <Text style={[styles.buttonText, { color: 'orange' }]}>Não</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmation}>
                                <Text style={styles.buttonText}>Sim, cadastrar</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

        </View>      
    )

}