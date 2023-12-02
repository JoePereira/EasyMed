import React, { useState } from  'react';
import { Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp, HomeSupervisorScreenNavigationProp } from '../../navigation/AppNavigator';
import { useUsuarios } from '../../context/UsuariosContext';
import Toast from 'react-native-toast-message';

export default function Login() {

    const navigation = useNavigation<HomeScreenNavigationProp | HomeSupervisorScreenNavigationProp>()

    const { usuarios } = useUsuarios();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);



    const handleLogin = () => {
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.email === email && usuario.senha === senha
        );

        if (usuarioEncontrado) {
            Toast.show({
                type: 'success',
                position: 'bottom',
                text1: `Bem-vindo de volta!`,
                visibilityTime: 5000,
                autoHide: true,
                topOffset: 50,
            });

            const params = { nomeUsuario: usuarioEncontrado.nome };

            if(usuarioEncontrado.supervisor === true){
                navigation.navigate('HomeSupervisor', params);
            }else {

                navigation.navigate('Home', params);
            }

            setEmail('')
            setSenha('')
            
        } else {
            // Credenciais inválidas, exibe mensagem de erro
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Erro de Login',
                text2: 'Credenciais inválidas. Verifique seu nome e senha.',
                visibilityTime: 5000,
                autoHide: true,
                topOffset: 50,
            });
        }
    };

    const handleLogar = () => {
        // Adicione aqui a lógica para navegar para a tela de login ou qualquer outra ação desejada
        // Por exemplo: navigation.navigate('Login');
        navigation.navigate('Registro');
      };

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.container}>
                <Image source={require('../../assets/images/logo.jpeg')} style={styles.logo} />
                <Text style={styles.titulo}>Login</Text>


                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={!mostrarSenha}
                />
                <TouchableOpacity onPress={toggleMostrarSenha} style={styles.iconeSenha}>
                    <Ionicons
                        name={mostrarSenha ? 'eye-off' : 'eye'}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={handleLogin}>
                    <Text style={styles.textoBotao}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.containerRegistrar}>
                    <Text style={styles.logarText}>Não Possui Cadastro?{' '}</Text>
                    <TouchableOpacity onPress={handleLogar}>
                        <Text style={styles.logar}>Registre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}