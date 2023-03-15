import { ADD_GOOD,DELETE_GOOD } from "../constants";


export const addGoodAction=(good)=>({
    type:ADD_GOOD,
    payload:good,
})
export const deleteGoodAction=(id)=>({

            type:DELETE_GOOD,
            payload:id,
        }
)
