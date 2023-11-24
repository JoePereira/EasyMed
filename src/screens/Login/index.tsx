import React, { useState } from  'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/AppNavigator';

export default function Login() {

    const navigation = useNavigation<HomeScreenNavigationProp>()

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);



    const handleLogin = () => {
        // Adicione aqui a lógica para lidar com o registro
        // Por exemplo, você pode validar os campos e fazer uma chamada à API para registrar o usuário
        const credenciais = {
            email: 'teste',
            senha: 'teste'
        }

        if (email === credenciais.email && senha === credenciais.senha) {
            navigation.navigate('Home')
        }else {
            // Credenciais incorretas, você pode exibir uma mensagem de erro, por exemplo
            console.log('Credenciais incorretas. Tente novamente.');
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