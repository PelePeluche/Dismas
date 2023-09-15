import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title:{
    fontFamily: 'Garet Book',
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
  },
  button: {
    width: 300,
    height: 65,
    borderRadius: 20,
  },
  buttonTitle: {
    fontFamily: 'Garet Book',
    fontSize: 20,
    color: 'white',
  },
  exitButton: {
    width: 220,
    height: 60,
    borderRadius: 20,
  },
  exitButtonTitle: {
    fontFamily: 'Garet Book',
    fontSize: 14,
    color: 'white',
  }
})
