import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'
import { useState, useEffect } from "react"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dogs, setDogs] = useState([])
  const [numberOfDogs, setNumberOfDogs] = useState(0)

  // You will need to put a state here to save all the dogs data into
  const fetchDogs = async () => {

    if (numberOfDogs > 0) {
      const data = await fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
      const response = await data.json()
      setDogs(response.message)
    }



  }
  // And you will fetch the data with useEffect
  useEffect(() => {
    fetchDogs()
  }, [numberOfDogs])

  const handleReset = (e) => {
    e.preventDefault()
    setDogs([])
  }


  return (

    <div className="card mt-3" >

      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
         
      */}
      {/* <Form /> Uncomment <Form /> if you are going after the bonus */}
      {/* This page should receive the images array */}
      <Form setNumberOfDogs={(dog) => setNumberOfDogs(dog)} handleReset={handleReset} />
      <DogList dogsList={dogs} />
    </div>
  );
}

