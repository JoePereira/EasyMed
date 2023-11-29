import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFDF5'

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
  entrar:{
    color: 'orange',
    fontSize: 20,
  },
  entrarText:{
    fontSize: 20,
  },
  input: {
    height: 50,
    width: 350,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 7
  },
  iconeSenha: {
    marginLeft: '70%',
    marginTop: '-11%',
    marginBottom: '5%'
  },
  iconeConfirmarSenha: {
    marginLeft: '70%',
    marginTop: '-11%',
    marginBottom: '5%'
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
  checkBox: {
    borderColor: '#FCFDF5',
    backgroundColor: '#FCFDF5',
    borderRadius: 7
  },
  containerEntrar: {
    top: 10,
    flexDirection: 'row'
  }
});
