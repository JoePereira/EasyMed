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
    display:  'flex',
    justifyContent: 'center'
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
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  closeCameraButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  closeCameraButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 8,
    margin: 16,
  },
  containerCamera: {
    flex: 1, 
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  camera: {
    flex: 1
  }
}) 