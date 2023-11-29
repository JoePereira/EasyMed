import React, { useState } from  'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RegistroScreenNavigationProp } from '../../navigation/AppNavigator';
import { UsuariosProvider, useUsuarios } from '../../context/UsuariosContext';
import Toast from 'react-native-toast-message';
import { CheckBox } from 'react-native-elements';

export default function Registro() {

    const navigation = useNavigation<RegistroScreenNavigationProp>();
    const { adicionarUsuario } = useUsuarios();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
    const [ supervisor, setSupervisor ] = useState(false);
    const [dependente, setDependente] = useState<[]>([])

    const handleRegistro = () => {

        if (senha !== confirmarSenha) {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Erro',
                text2: 'As senhas não coincidem',
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 50,
            });
            return;
        }

        const novoUsuario = {
            nome,
            email,
            senha,
            supervisor,
            dependente
        };


        adicionarUsuario(novoUsuario);

        Toast.show({
            type: 'success',
            position: 'bottom',
            text1: `Parabens ${nome}! cadastro feito com sucesso`,
            visibilityTime: 3000, // Tempo que o toast ficará visível (em milissegundos)
            autoHide: true,
            topOffset: 50, // Distância do topo da tela
        });

        navigation.navigate('Login');
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

            <CheckBox
                title="Supervisor"
                checked={supervisor}
                onPress={() => {
                    setSupervisor(!supervisor);
                }}
                containerStyle={styles.checkBox}
            />

            <TouchableOpacity style={styles.botao} onPress={handleRegistro}>
                <Text style={styles.textoBotao}>Registrar-se</Text>
            </TouchableOpacity>
        </View>
    )
}