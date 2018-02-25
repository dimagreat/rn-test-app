import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8c8c8c'
  },
  loadingTitle: {
    color: '#fff',
    paddingLeft: 10,
  },
  questionContainer: {
    flexDirection: 'row',
    padding: 10
  },
  questionTitle: {
    color: 'black',
    flex: 1,
  },
});
