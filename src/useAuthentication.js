import { db } from './firebase/firebase';



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
        setError(null)

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
            });

            setLoading(false)

            return user

        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage 

            if (error.message.includes('Password')) {
                systemErrorMessage = 'A senha precisa conter ao menos 6 caracteres'
                
            } else if(error.message.includes('email-already')){
                systemErrorMessage = 'E-mail já cadastrado'
            }else { 
                systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.'

            }
            
            setLoading(false)
            setError(systemErrorMessage);
        }

        
        
        
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