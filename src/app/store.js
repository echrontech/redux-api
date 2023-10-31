import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { testApi } from "../services/testapi"
import counterReducer from '../features/counter/counterSlice'
import themeReducer from '../features/theme/themeSlice'
export const store = configureStore({
  reducer: {
    [testApi.reducerPath]: testApi.reducer,
    counter: counterReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(testApi.middleware)
})

setupListeners(store.dispatch)