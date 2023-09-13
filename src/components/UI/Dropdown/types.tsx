export type IDropdownItem = {
  label: string
  value: string
}

export type DropdownComponentProps = {
  data: IDropdownItem[]
  labelField: 'label'
  valueField: 'value'
  placeholder: string
  value: string | null
  onChange: (item: IDropdownItem) => void
}
