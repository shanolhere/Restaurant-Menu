import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
     <section className="main-card-container">
        {menuData.map((curElem) => {
            const {id,name,category, image, description} = curElem;

            return(
                <>
                  <div className="card-container" key={id}>
                    <div className="card">
                        <div className="card-body">
                            <span className="card-name">{name}</span>
                            <span className="card-category">{category}</span>
                            <h2 className="card-title">{name}</h2>
                            <span className='card-description'>{description}</span>
                            <img src={image} alt="dish" className="card-image"/>
                        </div>
                    </div>
                  </div>
                </>
            )

        })}
     </section>
    </>
  )
}

export default MenuCard;