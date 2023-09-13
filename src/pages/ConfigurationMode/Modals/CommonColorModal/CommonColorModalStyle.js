import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  redModal: {
    backgroundColor: 'white',
    width: '80%',
    height: '80%',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
  },
  closeButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    color: 'red',
  },
})
