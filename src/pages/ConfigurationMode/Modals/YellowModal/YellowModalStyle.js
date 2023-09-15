import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '80%',
    height: '80%',
    padding: 20,
    borderRadius: 10,
    gap: 40,
  },
  modalTitle: {
    fontFamily: 'Garet Book',
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    width: 220,
    height: 60,
    borderRadius: 20,
    marginTop: 40,
    alignSelf: 'center',
  },
  buttonTitle: {
    fontFamily: 'Garet Book',
    fontSize: 16,
    color: 'white',
  },
  closeButton: {
    marginTop: 8,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontFamily: 'Garet Book',
    fontSize: 16,
    color: 'red',
  },
})
