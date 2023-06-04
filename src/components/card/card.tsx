import './card.css'

type CardProps = {
  title: string,
  price: number,
  image: string,
}

export function Card({ title, price, image } : CardProps){
    return(
        <div className="card">
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p><b>Valor:</b>{price}</p>
        </div>
    )
}
