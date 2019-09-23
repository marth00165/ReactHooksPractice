import React, {useState, useEffect} from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({data: null, loading: true})

  useEffect(() => {
    setState({data:null, loading:true})
    fetch(url).then(res => res.text())
    .then(data => setState({
      data: data,
      loading: false
    }))
  }, [url, setState])

  return state
}
