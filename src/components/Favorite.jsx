
export const Favorite = ( props ) => {

    const {
        image,
        name,
        removeFavorite 
    } = props

  return (
    <>
        <div>
            <ul>
                <img src={ image } alt={ name } />
                <p> { name } </p>
                <button onClick={() => removeFavorite( name) }>
                    Borrar 
                </button>
            </ul>
        </div>
    </>
  )
};
