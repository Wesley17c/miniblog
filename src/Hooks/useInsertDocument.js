// inserindo documentos


import {db} from '../firebase/firebase'
import { useState, useEffect, Reducer, useReducer } from 'react'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

const initialState = {
    loading: null,
    error: null
};

const insertReducer = (state, action) =>{

    switch(action.type) {

        case 'LOADING':
            return {loading: true, error: null}
        case 'INSERTED_DOC':
            return {loading: false, error: null}
        case 'ERROR':
            return {loading: false, error: action.payload}
        default:
            return state;

    }

};

export const useInsertDocument = (docCollection) => {

    const [response, dispatch] = useReducer(insertReducer, initialState)

    // deal whit memory leak 

    const [cancel, setCancel] = useState(false);

    const checkCancelBeforeDispatch = (action)=>{

        if(!cancel){
            dispatch(action)
        }
    }

    const insertDocument = async (document)=> {

        checkCancelBeforeDispatch({
            type: 'LOADING',
        })

        try {
            
            const newDocument = {...document, createdAt: Timestamp.now() }

            const insertDoc = await addDoc(
                collection(db, docCollection), newDocument
            )

            checkCancelBeforeDispatch({
                type: 'INSERTED_DOC',
                payload: insertDoc
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

    return {insertDocument, response}

}