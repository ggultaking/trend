import { ADD_GOOD,DELETE_ALL,DELETE_GOOD,HIDE_DELETE_ALL_BUTTON,SHOW_DELETE_ALL_BUTTON} from "../constants";


export const addGoodAction=(good)=>({
    type:ADD_GOOD,
    payload:good,
})
export const deleteGoodAction=(id)=>({

            type:DELETE_GOOD,
            payload:{id}
        }
)

export const deleteAllAction=()=>({
    type:DELETE_ALL,
    
})

export const showDeleteAllButtonAction = () => ({
    type: SHOW_DELETE_ALL_BUTTON,
  });
  
  export const hideDeleteAllButtonAction=()=>({
    type:HIDE_DELETE_ALL_BUTTON
  })