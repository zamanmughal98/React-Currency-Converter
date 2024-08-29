# Currency Converter

This repository contains a currency converter application built using React. It allows users to convert amounts between different currencies. The application fetches real-time conversion rates from an external API and provides a user-friendly interface to perform conversions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Hooks](#hooks)
- [Styling](#styling)
- [ Variables Used](variables-Used)
- [API](#api)
- [Customization](#customization)
- [Example Customization](#example-customization)
- [Contributing](#contributing)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone  https://github.com/zamanmughal98/React-Currency-Converter.git
   ```

2. Navigate to the project directory:

   ```bash
   cd currency-converter

   ```

3. Install the dependencies:

   ```bash
   npm install

   ```

4. Start the application:

   ```bash
   npm run start

   ```


   The server will run on http://localhost:3000 by default.



## Usage

Once the app is running, you can use the currency converter to convert amounts between different currencies. The interface provides a dropdown menu to select the currencies, input fields to enter the amount, and buttons to swap currencies or convert the amount.

## Components

### CurrencyConverter

The main component that renders the currency converter interface. It handles the logic for converting amounts, swapping currencies, and fetching the conversion rates.

### CustomTile

A reusable component for displaying an input field for the amount and a dropdown for selecting the currency.

### CustomSelect

A customized select dropdown component using react-select for currency selection. It allows for custom styling and provides a user-friendly interface for selecting currencies.

## Hooks

### useCurrencyInfo

A custom hook that fetches the currency conversion rates and provides a list of available currencies. It handles the API request and data conversion to provide usable currency data.

## Styling

The application uses custom CSS to style the components. The main color theme is based on a dark blue and light blue palette. The CSS variables used are defined in the :root section, and the styles are applied throughout the app to maintain consistency.

Key styles include:

- CurrencyConverter_section: The main container for the currency converter, styled with padding, border-radius, and a background color.
- inputField: Styled input fields with custom fonts, colors, and padding.
- Swapbutton and convertbutton: Custom buttons with hover and active states for interactivity.

- **.Swapbutton**: A button for swapping the selected currencies. It includes hover, active, and disabled states with smooth transitions and scale effects.
- **.convertbutton**: The main button for converting the currency. It features similar hover and active states, with a solid border and background color transition.

The CSS file ensures that the application is visually appealing and maintains a consistent layout and design.

### Variables Used

- `--backgroundColor`: Defines the background color for various elements.
- `--borderClors`: Used for borders and certain background colors.
- `--inputFieldsFont`: Specifies the font for the input fields.
- `--labelFont`: Specifies the font for the labels.

## API

The application uses the following API to fetch real-time currency conversion data:

- **Currency API**: Data is fetched from the [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/currency-api), which provides conversion rates in JSON format.

Example API call:

```bash
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/{currency}.json
```

## Customization

You can customize the appearance of the CustomSelect component by adjusting the selectStyle prop. This allows you to modify the colors, font size, and other style properties directly within the component.

#### Example customization:

```jsx
<CustomSelect
  optionsList={currencyOptions}
  value={selectedCurrency}
  onSelectChange={handleCurrencyChange}
  selectStyle={{
    textColor: '#000',
    backgroundColor: '#fff',
    borderColor: '#118ab2',
  }}
/>
```

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. Any contributions, whether it be bug fixes, new features, or improvements, are welcome.
