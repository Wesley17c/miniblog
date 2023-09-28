import styles from './Search.module.css';
//hooks
import { useFetchDocuments } from '../../Hooks/useFetchDocuments';
import { useQuery } from '../../Hooks/useQuery';



const Search = () => {

    const query = useQuery();

    const search = query.get('q')


  return (
    <div>
       <h1>Buscando tags</h1>
       <p> {search} </p>
    </div>
  )
}

export default Search;
