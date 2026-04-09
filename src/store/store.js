import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
const storage = {
  getItem: (key) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
  removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
}
import { authApi } from "./api/authApi"
import authReducer from "./slices/authSlice"
import registerReducer from "./slices/registerSlice"

const registerPersistConfig = {
  key: "register",
  storage,
  blacklist: [],
}

const rootReducer = combineReducers({
  auth: authReducer,
  register: persistReducer(registerPersistConfig, registerReducer),
  [authApi.reducerPath]: authApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware),
})

export const persistor = persistStore(store)
