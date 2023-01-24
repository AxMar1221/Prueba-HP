

export const Card = ( props ) => {
    const {
        status,
        category,
        image,
        name,
        dateOfBirth,
        gender,
        eyeColor,
        hairColor
    } = props;
  return (
    <>
    <div>
        <p>
            { status }
            { category }
        </p>
        <img src={ image } alt={ name } />
        <p> { dateOfBirth } </p>
        <p> { gender } </p>
        <p> { eyeColor } </p>
        <p> { hairColor } </p>
    </div>
</>
  )
}
