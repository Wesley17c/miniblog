import { db } from '../firebase/firebase';



import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut

} from 'firebase/auth'; 

import { useState, useEffect } from 'react';


export const useAuthentication = () => {

    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    
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