import './App.css'
import { Card } from './components/card/card'
import { useFoodData } from './hooks/useFoodData'
import { FoodData } from './interface/FoodData'

export function App() {
  const { data } = useFoodData()

  return (
   <div className="container">
      <h1>Cardápio</h1>
      <div className='card-grid'>
        {data?.map((foodData) =>
         <Card
          title={foodData.title}
          price={foodData.price}
          image={foodData.image}
         />
        )}
      </div>
   </div>
  )
}
