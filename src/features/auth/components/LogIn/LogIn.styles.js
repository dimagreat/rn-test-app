import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '30%',
    marginBottom: 30,
  },
  titleText: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    backgroundColor: '#e0e0e0',
  },
  loginButton: {
    justifyContent: 'center',
    backgroundColor: '#3498db',
    height: 40,
    marginVertical: 20,
  },
  loginButtonText: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
  error: {
    flex: 1,
    height: 40,
    padding: 5,
    borderWidth: 1,
    margin: 10,
    borderColor: '#ff192f',
    backgroundColor: '#d73a49',
  }
});
