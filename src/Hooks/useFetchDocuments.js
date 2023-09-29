import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";

import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
  
} from "firebase/firestore";

export const useFetchDocuments = (docCollection,  search = null, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // memory leak
  const [cancel, setCancel] = useState(false);

  useEffect(() => {
     async  function loadData() {

      if (cancel) return;

      setLoading(true);

      const collectionRef = await collection(db, docCollection);

      try {
        let q;

        //busca

        
        
        if(search){
          q = await query(collectionRef, where('tagArray', 'array-contains', search), orderBy("createdAt", "desc"));

        } else {
          q = await query(collectionRef, orderBy("createdAt", "desc"));
        }
        

        await onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        }, (error) => {
          console.error("Error getting documents: ", error);
          setError(error.message);
        });
        

        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);

        setLoading(false);
      }

      
    }

    loadData();
  }, [docCollection,  search, uid, cancel]);

  useEffect(() => {
    return () => setCancel(true);
  }, []);

  return {documents, loading, error}
};
