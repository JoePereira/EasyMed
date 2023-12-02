// MeusMedicamentosStyles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FCFDF5',
    },
    containerLogo: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        // position: 'absolute',
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
    containerMeusRemedios: {
      flex: 1,
    }, 
    medicamentoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    bolinhaLaranja: {
        backgroundColor: 'orange',
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    nomeMedicamento: {
        fontSize: 16,
        marginRight: 8,
    },
    iconContainer: {
        marginLeft: 'auto',
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 10,
        padding: 10,
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 8,
        margin: 16,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    modalCloseButton: {
        marginTop: 16,
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 8,
    },
    modalCloseButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    medItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        marginBottom: 8,
    }
      
});
