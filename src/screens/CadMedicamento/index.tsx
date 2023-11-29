import { useState } from "react";
import { TextInput, View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { CheckBox } from "react-native-elements";

import { styles } from "./styles";
import { HomeScreenNavigationProp } from "../../navigation/AppNavigator";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { MedicamentosProvider, useMedicamentos } from "../../context/MedicamentosContext";
import { TimePickerModal } from "react-native-paper-dates";

export default function CadMedicamento () {

    const navigation = useNavigation<HomeScreenNavigationProp>();
    const { adicionarMedicamento } = useMedicamentos();
    
    const [medicamento, setMedicamento] = useState('');
    const [qntDias, setQntDias] = useState('');
    const [medicamentoSolido, setMedicamentoSolido] = useState(false);
    const [medicamentoLiquido, setMedicamentoLiquido] = useState(false);

    const [quantidade, setQuantidade] = useState('');
    const [volume, setVolume] = useState('');

    const [horario, setHorario] = useState('');
    const [selectedTime, setSelectedTime] = useState<{ hours: number; minutes: number } | null>(null);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const handleTimeConfirm = (hoursAndMinutes: { hours: number; minutes: number }) => {
        setShowTimePicker(false);
        setSelectedTime(hoursAndMinutes);
        setHorario(`${hoursAndMinutes.hours}:${hoursAndMinutes.minutes}`);
    };
      

    const handleConfirmation = () => {

        const novoMedicamento = {
            nome: medicamento,
            qntDias,
            medicamentoSolido,
            medicamentoLiquido,
            quantidade,
            volume,
            horario,
        };

        adicionarMedicamento(novoMedicamento);

        setMedicamento('')
        setQntDias('')
        setMedicamentoLiquido(false)
        setMedicamentoSolido(false)
        setQuantidade('')
        setVolume('')
    
        
        setShowConfirmationModal(false);
    };

    const handleCancel = () => {

        
        const novoMedicamento = {
            nome: medicamento,
            qntDias,
            medicamentoSolido,
            medicamentoLiquido,
            quantidade,
            volume,
            horario,
        };

        adicionarMedicamento(novoMedicamento);

        setMedicamento('')
        setQntDias('')
        setMedicamentoLiquido(false)
        setMedicamentoSolido(false)
        setQuantidade('')
        setVolume('')

        Toast.show({
            type: 'success',
            position: 'bottom',
            text1: 'Medicamento cadastrado com sucesso',
            visibilityTime: 5000, // Tempo que o toast ficará visível (em milissegundos)
            autoHide: true,
            topOffset: 50, // Distância do topo da tela
        });

        navigation.navigate('Home')
    
        // Fecha o modal de confirmação
        setShowConfirmationModal(false);
    };

    return (
        <MedicamentosProvider>

            <View style={styles.container}>

                <View style={styles.containerLogo}>
                        <Image source={require('../../assets/images/logo.jpeg')} style={styles.logo} />
                        <Text style={styles.titulo}>Easy Med</Text>
                </View>
                
                <View style={styles.containerFormMedicamento}>
                    <Text style={styles.label}>Nome do medicamento</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Nome do medicamento"
                        value={medicamento}
                        onChangeText={setMedicamento}
                    />

                    <Text style={styles.label}>Dias que irá tomar</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Dias que irá tomar"
                        value={qntDias}
                        onChangeText={(text) => {
                            if (/^\d+$/.test(text) || text === '') {
                                setQntDias(text);
                            }
                        }}
                        keyboardType="numeric"
                    />

                    <Text style={styles.label}>Tipo de medicamento</Text>
                    <View style={styles.containerCheckBox}>
                        <CheckBox
                            title="Med. Sólido"
                            checked={medicamentoSolido}
                            onPress={() => {
                                setMedicamentoSolido(!medicamentoSolido);
                                setMedicamentoLiquido(false);
                            }}
                            containerStyle={styles.checkBox}
                        />

                        <CheckBox
                            title="Med. Líquido"
                            checked={medicamentoLiquido}
                            onPress={() => {
                                setMedicamentoLiquido(!medicamentoLiquido);
                                setMedicamentoSolido(false);
                            }}
                            containerStyle={styles.checkBox}
                        />
                    </View>

                    {medicamentoSolido && (
                        <View>
                            <Text style={styles.label}>Comprimidos por dia</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Comprimidos por dia"
                                value={quantidade}
                                onChangeText={(text) => {
                                    if (/^\d+$/.test(text) || text === '') {
                                        setQuantidade(text);
                                    }
                                }}
                                keyboardType="numeric"
                            />
                        </View>
                    )}

                    {medicamentoLiquido && (
                        <View>
                            <Text style={styles.label}>Ml por dia</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ml por dia"
                                value={volume}
                                onChangeText={(text) => {
                                    if (/^\d+$/.test(text) || text === '') {
                                        setVolume(text);
                                    }
                                }}
                                keyboardType="numeric"
                            />
                        </View>
                    )}

                    <Text style={styles.label}>Horário que irá tomar</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Horario que irá tomar"
                        value={selectedTime ? `${selectedTime.hours}:${selectedTime.minutes}` : ""}
                        onTouchStart={() => setShowTimePicker(true)}
                    />
                    <TimePickerModal
                        visible={showTimePicker}
                        onDismiss={() => setShowTimePicker(false)}
                        onConfirm={handleTimeConfirm}
                        hours={12}
                        minutes={0}
                        label="Selecione o horário"
                        cancelLabel="Cancelar"
                        confirmLabel="Confirmar"
                    />

                    <TouchableOpacity style={styles.botao} onPress={() => setShowConfirmationModal(true)}>
                        <Text style={styles.textoBotao}>Salvar Medicamento</Text>
                    </TouchableOpacity>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showConfirmationModal}
                        onRequestClose={() => setShowConfirmationModal(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalText}>Medicamento cadastrado com sucesso!</Text>
                                <Text style={styles.modalText}>Deseja cadastrar um novo medicamento?</Text>
                                <View style={styles.modalButtons}>
                                <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                                    <Text style={[styles.buttonText, { color: 'orange' }]}>Não</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmation}>
                                    <Text style={styles.buttonText}>Sim</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>

                </View>
            </View>
        </MedicamentosProvider>       
    )

}