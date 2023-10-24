import { useEffect, useState } from "react";

const usePetition = (endPoint, tag, string) => {
  const API_URL = import.meta.env.VITE_API_URL
    const [posts, setPosts] = useState(string)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)

        fetch(`${API_URL}${endPoint}`)
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
          setPosts(data.data.filter(post => post.tags.includes(tag)).slice(-3).reverse())
            setLoading(false)
        })
        .catch(e => {
            setLoading(false)
            console.error(e)
        }
        )
    },[])

    return [posts, loading]
}

export default usePetition