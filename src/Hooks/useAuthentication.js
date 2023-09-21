import {
    getAuth,
    creatUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut

} from 'firebise/auth'; // salvando no banco de dados da firebase

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

};