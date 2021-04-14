import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: counterReducer,
//   filter: filterReduser,
// });

const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
