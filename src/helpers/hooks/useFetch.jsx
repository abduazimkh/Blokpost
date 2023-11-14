import { useEffect, useState } from 'react';
import instance from '../../services/api';
import { useValue } from '../../context/AppProvider';

const useFetch = (URL) => {
    const [state, dispatch] = useValue();
    const [data, setData]= useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false)

    useEffect(() => {
        instance(URL, {
          headers: {
            "Authorization" : "Bearer " + state.auth.token 
          }
        })
          .then(response => {
            if(response.data.data._id){
                setData(response.data);
                setLoading(false);
                setMessage("Successfully got the user!")
            }
            else{
                throw new Error("Something went wrong") 
            }
          })
          .catch(err => {
                setLoading(false);
                setMessage(err);
                // .response.data.errors
                setError(true);

          })
      }, [URL])

      return {data, loading, message, error}
}

export {useFetch}