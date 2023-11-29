// MeusMedicamentos.tsx

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { useMedicamentos } from '../../context/MedicamentosContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

interface Medicamento {
    nome: string;
    qntDias: string;
    medicamentoSolido: boolean;
    medicamentoLiquido: boolean;
    quantidade: string;
    volume: string;
    horario: string;
}

export function MeusMedicamentos() {

    const { medicamentos, removerMedicamento } = useMedicamentos();

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedMedicamento, setSelectedMedicamento] = useState<Medicamento | null>(null);   

    const renderItem = ({ item }: { item: Medicamento }) => (
        <View style={styles.medicamentoItem}>
        <View style={styles.bolinhaLaranja} />

        <Text style={styles.nomeMedicamento}>{item.nome}</Text>

        <View style={styles.iconContainer}>
            <TouchableOpacity
            style={styles.icon}
            onPress={() => {
                setSelectedMedicamento(item);
                setModalVisible(true);
            }}
            >
                <Icon name="eye" size={20} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.icon}
            onPress={() => {
                // Adicione a lógica para remover o medicamento
                removerMedicamento(item);
            }}
            >
            <Icon name="trash" size={20} color="red" />
            </TouchableOpacity>
        </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={require('../../assets/images/logo.jpeg')} style={styles.logo} />
                <Text style={styles.titulo}>Easy Med</Text>
            </View>

            <View style={styles.containerMeusRemedios}>
                <Text style={styles.titulo}>Meus Medicamentos</Text>
                {medicamentos.length === 0 ? (
                <Text>Nenhum medicamento cadastrado.</Text>
                ) : (
                <FlatList
                    data={medicamentos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => renderItem({ item })}
                />
                )}
            </View>
            <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.5}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Detalhes do Medicamento</Text>
                    {selectedMedicamento && (
                    <>
                        <View style={styles.medItem}>
                            <Text>Medicamento:</Text>
                            <Text>{selectedMedicamento.nome}</Text>
                        </View>
                        <View style={styles.medItem}>
                            <Text>Dias de consumo:</Text>
                            <Text>{selectedMedicamento.qntDias}</Text>
                        </View>
                        {selectedMedicamento.medicamentoSolido === true ? 
                            (<View style={styles.medItem}>
                                <Text>Comprimidos por dia:</Text>
                                <Text>{selectedMedicamento.quantidade}</Text>
                            </View>) : 
                            (
                                <View style={styles.medItem}>
                                    <Text>Ml por dia:</Text>
                                    <Text>{selectedMedicamento.volume} ml</Text>
                                </View>
                            )
                        }
                        <View style={styles.medItem}>
                            <Text>Horario de Consumo:</Text>
                            <Text>{selectedMedicamento.horario}</Text>
                        </View>
                    </>
                    )}
                    <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={() => setModalVisible(false)}
                    >
                    <Text style={styles.modalCloseButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}
