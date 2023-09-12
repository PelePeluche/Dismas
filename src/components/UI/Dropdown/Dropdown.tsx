import React from 'react'
import {Dropdown} from 'react-native-element-dropdown'

type IDropdownItem = {
  label: string
  value: string
}

type DropdownComponentProps = {
  data: IDropdownItem[]
  labelField: 'label'
  valueField: 'value'
  placeholder: string
  value: string | null
  onChange: (item: IDropdownItem) => void
}

/**
 * A dropdown component that renders a dropdown with provided data and handles value changes.
 *
 * @param data - The array of data to populate the dropdown options.
 * @param labelField - The key in the data object used as the label for each option.
 * @param valueField - The key in the data object used as the value for each option.
 * @param placeholder - The text to display when no option is selected.
 * @param value - The currently selected value.
 * @param onChange - The function to call when the value changes.
 *
 * @returns The dropdown component.
 */
export const DropdownComponent: React.FC<DropdownComponentProps> = ({
  data,
  labelField,
  valueField,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Dropdown
      data={data}
      mode='modal'
      labelField={labelField}
      valueField={valueField}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
