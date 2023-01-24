

export const Card = ( props ) => {
    const {
        status,
        category,
        image,
        name,
        dateOfBirth,
        gender,
        eyecColor,
        haircolor
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
        <p> { eyecColor } </p>
        <p> { haircolor } </p>
    </div>
</>
  )
}
