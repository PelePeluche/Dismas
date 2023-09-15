import React, {useState} from 'react'
import {Modal, View, Text} from 'react-native'
import {Button} from '@rneui/themed'
import {DropdownComponent} from '../../../../components/UI/Dropdown'
import {YellowModalProps} from './types'
import {BUTTONS_FUNCTIONS, ROTATION} from './definitions'
import {styles} from './YellowModalStyle'

export const YellowModal = ({visible, onClose}: YellowModalProps) => {
  const [selectedFunction, setSelectedFunction] = useState('')
  const [selectedRotation, setSelectedRotation] = useState('')

  const handleDropdownChange = (item: {label: string; value: string}) => {
    setSelectedFunction(item.value)
  }

  const handleLetterDropdownChange = (item: {label: string; value: string}) => {
    setSelectedRotation(item.value)
  }

  const handleAssignFunctionality = () => {
    console.log(`Funcionalidad seleccionada: ${selectedFunction}`)

    console.log(`Rotación seleccionada: ${selectedRotation}`)
  }

  return (
    <Modal visible={visible} animationType='slide' transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>
            Configuración de los botones amarillos{' '}
          </Text>
          <DropdownComponent
            data={BUTTONS_FUNCTIONS}
            labelField='label'
            valueField='value'
            placeholder='Selecciona una función'
            value={selectedFunction}
            onChange={handleDropdownChange}
          />

          <DropdownComponent
            data={ROTATION}
            labelField='label'
            valueField='value'
            placeholder='Selecciona la orientación'
            value={selectedRotation}
            onChange={handleLetterDropdownChange}
          />

          <Button
            title='Asignar funcionalidad'
            titleStyle={styles.buttonTitle}
            color='black'
            buttonStyle={styles.button}
            onPress={handleAssignFunctionality}
          />

          <Button
            type='clear'
            title='Cerrar'
            titleStyle={styles.closeButtonText}
            buttonStyle={styles.closeButton}
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
  )
}
