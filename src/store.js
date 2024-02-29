import {createAction, createReducer, configureStore} from "@reduxjs/toolkit"


const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")

const reducer = createReducer([],(builder) =>{
  builder
    .addCase(addToDo, (state, action)=>{
      state.push({id :Date.now(), text : action.payload})
    })
    .addCase(deleteToDo, (state, action )=>{
      return state.filter((toDo) => toDo.id !== action.payload)
    })
})

const store = configureStore({reducer});

export const actionCreators={
  addToDo,
  deleteToDo
}

export default store