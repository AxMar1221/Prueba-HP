import Students from '../JSON/hp.students.json'
import { Card } from './Card';


console.log( Students.map( (item) => item ));

export const HpApp = () => {
  return (
    <>
    {Students.map( ( item )=>
    <Card
        key={ item.name }
        status={ item.alive ? 'Vivo' : 'Muerto' }
        category= { item.hogwartsStudent ? 'Estudiante' : 'Profesor' }
        image={ item.image }
        name={ item.name }
        dateOfBirth={ item.dateOfBirth }
        gender={ item.gender }
        eyeColor={ item.eyeColor }
        hairColor={ item.hairColor }
    />
    )}
</>
  )
}
