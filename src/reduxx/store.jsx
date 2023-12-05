

import { configureStore } from '@reduxjs/toolkit'
import d from './counterSlice'
import yeni from './todus'


export const store = configureStore({
    reducer: {
        count:d,
        todus:yeni,
    },
  })