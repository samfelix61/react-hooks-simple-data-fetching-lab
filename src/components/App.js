// create your App component here
import React,{useState, useEffect} from 'react';

export default function App() {
  
    const [image, setImage] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
       .then(res => res.json())
       .then((data) => {
            setImage(data.message)
        })
    },[])
    if(!image) return <p>Loading...</p>


  return (
    <img src = {image} alt = "A Random Dog"/>
  )
}