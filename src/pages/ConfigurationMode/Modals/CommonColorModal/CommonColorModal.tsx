import React, {useState} from 'react'
import {Modal, View, Text, TouchableOpacity} from 'react-native'
import {Button} from '@rneui/themed'
import {DropdownComponent} from '../../../../components/UI/Dropdown'
import {CommonColorModalProps} from './types'
import {BUTTONS_FUNCTIONS, CHARACTERS} from './definitions'
import {styles} from './CommonColorModalStyle'

export const CommonColorModal = ({
  visible,
  onClose,
  color,
}: CommonColorModalProps) => {
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
    console.log(`Funcionalidad seleccionada: ${selectedValue}`)
    if (selectedValue === '7') {
      console.log(`Letra seleccionada: ${selectedLetter}`)
    }
  }

  return (
    <Modal visible={visible} animationType='slide' transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Configuración del botón {color}</Text>
          <DropdownComponent
            data={BUTTONS_FUNCTIONS}
            labelField='label'
            valueField='value'
            placeholder='Selecciona una función'
            value={selectedValue}
            onChange={handleDropdownChange}
          />
          {selectedValue === '7' && (
            <DropdownComponent
              data={CHARACTERS}
              labelField='label'
              valueField='value'
              placeholder='Selecciona una letra'
              value={selectedLetter}
              onChange={handleLetterDropdownChange}
            />
          )}

          <Button
            title='Asignar funcionalidad'
            titleStyle={styles.buttonTitle}
            color='black'
            buttonStyle={styles.button}
            onPress={handleAssignFunctionality}
          />

          <Button type='clear' title='Cerrar' titleStyle={styles.closeButtonText} buttonStyle={styles.closeButton}  onPress={onClose} />
        </View>
      </View>
    </Modal>
  )
}
