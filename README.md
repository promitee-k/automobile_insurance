# AXA | Car Insurance

User can get customized car insurance packages and make payments


## Features

- Get Custom Car Insurance Packages
- Make Insurance Payment
  
## Technologies

- MongoDB
- Express.js
- React
- Node.js


## Installation

1. Install the dependencies of both backend and frontend using command: `npm install`
2. Build using command:`npm run build`
3. Start the backend using command: `npm run start`
4. Start the frontend using command:`npm run dev`

## Usage

  `Getting a Quote` 
  - Select the car Brand 
  - Select the car Model
  - Type in the Year of the Model
  - Select Area
  - Check accident history 
  - Click `get quote` button
  

  `Selecting Packages`
  - Click the desired package card
  

  `Updating Insurance Form`
  - Type in data for all the empty fields
  - Click `Proceed to Payment`


  `Making Payment`
  - In order to make payment the user needs to be logged in
  - If the user already has an account, type in the login credentials and click `login`
  - If the user is new first `register` and then `login`
  - After logging in add a `16 digit` credit card number
  - Add expiry date in the format `mm/yy`
  - Add `3 digit` CVV code
  - Click `submit`

## Additional details
This project uses:
-  `atomic design` pattern for React
- `react-router-dom` for navigation and passing data
-  `axios` for fetching data
- `bcrypt`for password encryption




