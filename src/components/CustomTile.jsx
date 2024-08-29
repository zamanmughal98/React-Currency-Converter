import CustomSelect from './CustomSelect';

import { useId } from 'react';

const CustomTile = ({
  title,
  dataList,
  currencyValue,
  onCurrencyChange,
  selectionValue,
  onSelectionChange,
  readOnly = false,
}) => {
  const amountId = useId();
  return (
    <section className="subContaierOfCurrency justifyContentSpaceAround">
      <div className="inputWrapper">
        <label htmlFor={amountId} className="inputLabel">
          {title}
        </label>
        <input
          readOnly={readOnly}
          id={amountId}
          className="inputField"
          type="number"
          value={currencyValue}
          onChange={(e) =>
            onCurrencyChange(parseFloat(e.target.value))
          }></input>
      </div>

      {/* select component */}
      <div className="inputWrapper">
        <label className="inputLabel">Currency Type</label>
        <CustomSelect
          optionsList={dataList}
          value={selectionValue}
          onSelectChange={onSelectionChange}
        />
      </div>
    </section>
  );
};

export default CustomTile;
