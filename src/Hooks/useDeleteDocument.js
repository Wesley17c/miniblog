// inserindo documentos


import {db} from '../firebase/firebase'
import { useState, useEffect, useReducer } from 'react'
import { doc, deleteDoc} from 'firebase/firestore'

const initialState = {
    loading: null,
    error: null
};

const deleteReducer = (state, action) =>{

    switch(action.type) {

        case 'LOADING':
            return {loading: true, error: null}
        case 'DELETED_DOC':
            return {loading: false, error: null}
        case 'ERROR':
            return {loading: false, error: action.payload}
        default:
            return state;

    }

};

export const useDeleteDocument = (docCollection) => {

    const [response, dispatch] = useReducer(deleteReducer, initialState)

    // deal whit memory leak 

    const [cancel, setCancel] = useState(false);

    const checkCancelBeforeDispatch = (action)=>{

        if(!cancel){
            dispatch(action)
        }
    }

    const deleteDocument = async (id)=> {

        checkCancelBeforeDispatch({
            type: 'LOADING',
        })

        try {
            
           const deleteDocumente = await deleteDoc(doc(db, docCollection, id))

            checkCancelBeforeDispatch({
                type: 'DELETED_DOC',
                payload: deleteDocumente
            });

        } catch (error) {
            
            checkCancelBeforeDispatch({
                type: 'ERROR',
                payload: error.message
            });
        }

    }

    useEffect(()=>{
        return ()=> setCancel(true)
    },[])

    return {deleteDocument, response}

}