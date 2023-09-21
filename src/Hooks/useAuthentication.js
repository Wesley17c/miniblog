import {db} from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'; // Certifique-se de que seja 'firebase/auth' em vez de 'firebise/auth'

import { useState, useEffect } from 'react';


export const useAuthentication = () => {

    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // clearup 
    const [cancel, setCancel] = useState(false);


    const auth = getAuth();


    function chekIniSCancel() {

        if(cancel){
            return;
        }
    }

    const createUser = async (data)=> {
        chekIniSCancel();

        setLoading(true);

        try {
                    //função que originará um user
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            //quando o user chegar, iremos atualiza-lo através do updateProfile
            //iremos passar nosso user junto de um obj com os dados
            await updateProfile(user, {
                displayName: data.displayName
            })

            return user

        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message)
        }
        // após o termino da função, definimos o loading como false
        setLoading(false)
    };

    // manterá o cancel como true assim que sair da page
    useEffect(()=>{

        return ()=> setCancel(true);

    },[])


    return {
        auth,
        createUser,
        error,
        loading
    }
};