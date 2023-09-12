import React, {useState} from 'react'
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {DropdownComponent} from '../../../../components/UI/Dropdown'

type CommonColorModalProps = {
  visible: boolean;
  onClose: () => void;
  color: string; // Nueva prop para especificar el color
};


const data = [
  {label: 'Click izquierdo', value: '1'},
  {label: 'Click derecho', value: '2'},
  {label: 'Click central', value: '3'},
  {label: 'Barra espaciadora', value: '4'},
  {label: 'Tecla enter', value: '5'},
  {label: 'Doble click', value: '6'},
  {label: 'Una letra', value: '7'},
  {label: 'Nada (anular botón)', value: '8'},
]

export const CommonColorModal = ({visible, onClose, color}: CommonColorModalProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [selectedLetter, setSelectedLetter] = useState<string>('')

  const handleDropdownChange = (item: {label: string; value: string}) => {
    setSelectedValue(item.value)
    setSelectedLetter('')
  }

  const handleLetterDropdownChange = (item: {label: string; value: string}) => {
    setSelectedLetter(item.value)
  }

  const handleAssignFunctionality = () => {
    // Lógica para asignar la funcionalidad según los valores seleccionados en los dropdowns
    console.log(`Funcionalidad seleccionada: ${selectedValue}`)
    if (selectedValue === '7') {
      console.log(`Letra seleccionada: ${selectedLetter}`)
    }
  }

  return (
    <Modal visible={visible} animationType='slide' transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.redModal}>
          <Text style={styles.modalText}>Configuración del botón {color}</Text>
          <DropdownComponent
            data={data}
            labelField='label'
            valueField='value'
            placeholder='Selecciona una función'
            value={selectedValue}
            onChange={handleDropdownChange}
          />
          {selectedValue === '7' && (
            <DropdownComponent
              data={[
                {label: 'A', value: 'A'},
                {label: 'B', value: 'B'},
                {label: 'C', value: 'C'},
                // Agrega más opciones de letra según sea necesario
              ]}
              labelField='label'
              valueField='value'
              placeholder='Selecciona una letra'
              value={selectedLetter}
              onChange={handleLetterDropdownChange}
            />
          )}
          <TouchableOpacity onPress={handleAssignFunctionality}>
            <Text>Asignar funcionalidad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
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
