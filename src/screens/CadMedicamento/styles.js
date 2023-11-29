import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCFDF5',
    },
    containerLogo: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 20
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
      },
      titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      },
    containerFormMedicamento: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#FCFDF5',
    },
    input: {
        height: 50,
        width: 350,
        borderColor: '#b8b8b8',
        backgroundColor: '#E8E8E8',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 7
    },
    containerCheckBox: {
        flexDirection: 'row',
        marginBottom: 10,
        width: 360,
        justifyContent: 'space-between'
    },
    checkBox: {
        borderColor: '#FCFDF5',
        backgroundColor: '#FCFDF5',
        borderRadius: 7
    },
    label: {
        marginLeft: 5,
        marginBottom: 2.5,
        fontWeight: 'bold'
    },
    botao: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 15,
        width: 350,
    },
    textoBotao: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro para dar um efeito de sombra
      },
    
      modalContent: {
        backgroundColor: '#f2f2f2', // Cinza claro
        borderRadius: 10, // Bordas arredondadas
        padding: 20,
        width: '80%',
      },
    
      modalText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
      },
    
      modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
    
      confirmButton: {
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 10,
        minWidth: 100,
      },
    
      cancelButton: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'orange',
        padding: 10,
        minWidth: 100,
      },
    
      buttonText: {
        color: 'white', // Cor do texto dos botões
        textAlign: 'center',
      },
}) 