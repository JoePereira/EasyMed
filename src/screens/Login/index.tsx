import React, { useState } from  'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/AppNavigator';
import { useUsuarios } from '../../context/UsuariosContext';
import Toast from 'react-native-toast-message';

export default function Login() {

    const navigation = useNavigation<HomeScreenNavigationProp>()

    const { usuarios } = useUsuarios();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);



    const handleLogin = () => {
        // Adicione aqui a lógica para lidar com o registro
        // Por exemplo, você pode validar os campos e fazer uma chamada à API para registrar o usuário
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.email === email && usuario.senha === senha
        );

        if (usuarioEncontrado) {
            // Credenciais válidas, realizar ação desejada (por exemplo, navegar para a próxima tela)
            Toast.show({
                type: 'success',
                position: 'bottom',
                text1: `Bem-vindo de volta!`,
                visibilityTime: 5000,
                autoHide: true,
                topOffset: 50,
            });

            // Implemente aqui a ação desejada após o login bem-sucedido, como navegar para a próxima tela.
            // Por exemplo:
            navigation.navigate('Home');
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
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.jpeg')} style={styles.logo} />
            <Text style={styles.titulo}>Entrar</Text>

            <TouchableOpacity style={styles.logarPosicao} onPress={handleLogar}>
                <Text style={styles.logar}>Registre-se</Text>
            </TouchableOpacity>

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
                <Text style={styles.textoBotao}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}