import Select from 'react-select';

const colorPallete = {
  dark: '#073b4c',
  light: '#118ab2',
  white: '#fff',
  selected: '#03344490',
};
const CustomSelect = ({
  optionsList = [],
  value,
  onSelectChange,
  selectStyle = {
    textColor: colorPallete.dark, // Default text color
    backgroundColor: colorPallete.white, // Default background color
    borderColor: colorPallete.light, // Default border color
    dropdownBackgroundColor: colorPallete.white, // Background color of dropdown
    optionTextColor: colorPallete.dark, // Text color of options
    optionHoverBackgroundColor: colorPallete.light, // Background color of option on hover
    optionSelectedBackgroundColor: colorPallete.selected, // Background color of selected option
    optionSelectedTextColor: colorPallete.white, // Text color of selected option
    fontSize: '1rem', // Add font size
    fontWeight: 900, // Add font weight
    fontFamily: 'monospace', // Add font family
    borderRadius: '10px', // Add border radius
  },
}) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      color: selectStyle.textColor,
      backgroundColor: selectStyle.backgroundColor,
      borderColor: selectStyle.borderColor,
      boxShadow: state.isFocused
        ? `0 0 0 1px ${selectStyle.borderColor}`
        : null,
      borderRadius: selectStyle.borderRadius,
      fontSize: selectStyle.fontSize,
      fontWeight: selectStyle.fontWeight,
      fontFamily: selectStyle.fontFamily,
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: selectStyle.dropdownBackgroundColor,
      borderRadius: selectStyle.borderRadius,
    }),
    option: (provided, state) => ({
      ...provided,
      color: selectStyle.optionTextColor,
      backgroundColor: state.isSelected
        ? selectStyle.optionSelectedBackgroundColor
        : state.isFocused
        ? selectStyle.optionHoverBackgroundColor
        : null,
      fontSize: selectStyle.fontSize,
      fontWeight: selectStyle.fontWeight,
      fontFamily: selectStyle.fontFamily,
      '&:hover': {
        backgroundColor: selectStyle.optionHoverBackgroundColor,
      },
      '&:active': {
        backgroundColor: selectStyle.optionSelectedBackgroundColor,
        color: selectStyle.optionSelectedTextColor,
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: selectStyle.textColor,
      fontSize: selectStyle.fontSize,
      fontWeight: selectStyle.fontWeight,
      fontFamily: selectStyle.fontFamily,
    }),
  };

  return (
    <Select
      styles={customStyles}
      options={optionsList}
      className="basic-single"
      classNamePrefix="select_react_"
      isClearable={true}
      isSearchable={true}
      isRtl={true}
      value={optionsList.find((item) => item?.value === value)}
      onChange={(e) => {
        onSelectChange(e ? e.value : '');
      }}
    />
  );
};

export default CustomSelect;
