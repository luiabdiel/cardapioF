import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card'
import { useFoodData } from './hooks/useFoodData'
import { CreateModal } from './components/createModal/CreateModal'

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data } = useFoodData()

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

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
      {isModalOpen && <CreateModal />}
      <button onClick={handleOpenModal}>
        {isModalOpen ? 'Fechar' : 'Novo produto'}
      </button>
   </div>
  )
}
