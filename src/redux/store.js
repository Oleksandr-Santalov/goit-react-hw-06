import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const contactsSlice = persistReducer(
  {
    key: "contacts",
    storage,
  },
  contactsReducer
);

const filtersSlice = persistReducer(
  {
    key: "filters",
    storage,
  },
  filtersReducer
);

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filtersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
