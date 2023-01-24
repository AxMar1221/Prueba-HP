
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
        <button onClick={() => saveFavorite( charater ) }>Agregar</button>
        <div>
          <img src={ image } alt={ name } />
        </div>
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
</>
  )
}
