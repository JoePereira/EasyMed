import React, { useState } from  'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RegistroScreenNavigationProp } from '../../navigation/AppNavigator';

export default function Registro() {

    const navigation = useNavigation<RegistroScreenNavigationProp>();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);


    const handleRegistro = () => {
        // Adicione aqui a lógica para lidar com o registro
        // Por exemplo, você pode validar os campos e fazer uma chamada à API para registrar o usuário
    };

    const handleEntrar = () => {
        // Adicione aqui a lógica para navegar para a tela de login ou qualquer outra ação desejada
        // Por exemplo: 
        navigation.navigate('Login');
    };

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };
    const toggleMostrarConfirmarSenha = () => {
        setMostrarConfirmarSenha(!mostrarConfirmarSenha);
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.jpeg')} style={styles.logo} />
            <Text style={styles.titulo}>Registre-se</Text>

            <TouchableOpacity style={styles.entrarPosicao} onPress={handleEntrar}>
                <Text style={styles.entrar}>Entrar</Text>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
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
            <TextInput
                style={styles.input}
                placeholder="Confirme a senha"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry={!mostrarConfirmarSenha}
            />
            <TouchableOpacity onPress={toggleMostrarConfirmarSenha} style={styles.iconeConfirmarSenha}>
                <Ionicons
                    name={mostrarConfirmarSenha ? 'eye-off' : 'eye'}
                    size={24}
                    color="black"
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={handleRegistro}>
                <Text style={styles.textoBotao}>Registrar-se</Text>
            </TouchableOpacity>
        </View>
    )
}