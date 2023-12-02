// MeusMedicamentos.tsx

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { useUsuarios } from '../../context/UsuariosContext';
import { useRoute } from '@react-navigation/native';

interface Dependente {
    nome: string;
}

export function MeusDependentes() {

    const { usuarios } = useUsuarios();

    const route = useRoute();

    const { nomeUsuario } = route.params as { nomeUsuario?: string };

    const usuarioEncontradoCuidador = usuarios.find(
        (usuario) => usuario.nome === nomeUsuario
    );
    console.log("🚀 ~ file: index.tsx:26 ~ MeusDependentes ~ usuarioEncontradoCuidador:", usuarioEncontradoCuidador?.dependentes?.length)
    
    if(usuarioEncontradoCuidador?.dependentes){
        console.log(usuarioEncontradoCuidador?.dependentes)
    }

    const renderItem = ({ item }: { item: Dependente }) => (
        <View style={styles.medicamentoItem}>
        <View style={styles.bolinhaLaranja} />

        <Text style={styles.nomeMedicamento}>{item.nome}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={require('../../assets/images/logo.jpeg')} style={styles.logo} />
                <Text style={styles.titulo}>Easy Med</Text>
            </View>

            <View style={styles.containerMeusRemedios}>
                <Text style={styles.titulo}>Meus Dependentes</Text>
                {usuarioEncontradoCuidador?.dependentes?.length == undefined ? (
                <Text>Nenhum dependente cadastrado.</Text>
                ) : (
                <FlatList
                    data={usuarioEncontradoCuidador?.dependentes}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => renderItem({ item })}
                />
                )}
            </View>
        </View>
    );
}
