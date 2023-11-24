import { StyleSheet } from 'react-native';

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
      botoesContainer: {
        flexDirection: 'row',
        marginTop: 20,
      },
      botaoWrapper: {
        alignItems: 'center'
      },
      botao: {
        width: 100,
        height: 100,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        marginHorizontal: 20,

      },
      imagemBotao: {
        width: 50,
        height: 50,
      },
      textoBotao: {
        textAlign: 'center',
        width: 100,
        marginTop: 5,
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
}) 