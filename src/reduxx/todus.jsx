import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const toduslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTodu: (state,action) => {
      state.value.push(action.payload)
    },
    editTodu:(state,action) => {
        const index=state.findIndex(todo=>todo.id===action.payload)
        state[index]=action.payload
    }
    
    
  },
})
export const {addTodu,editTodu} = toduslice.actions

export default toduslice.reducer