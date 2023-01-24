
export const Card = ( props ) => {
    const {
        charater,
        status,
        category,
        image,
        name,
        dateOfBirth,
        gender,
        eyeColuor,
        hairColuor,
        saveFavorite
    } = props;

  return (
    <>
      <div>
          <div>
            <img src={ image } alt={ name } />
          </div>
          <div>
            <button onClick={() => saveFavorite( charater ) }>Agregar</button>
            <p>
                { status }
                { category }
            </p>
            <p> { name } </p>
            <p> { dateOfBirth } </p>
            <p> { gender } </p>
            <p> { eyeColuor } </p>
            <p> { hairColuor } </p>
          </div>
      </div>
    </>
  )
}
