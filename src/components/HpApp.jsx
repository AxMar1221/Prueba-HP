import { useState } from 'react';

import { Card } from './Card';

import Students from '../JSON/hp.students.json'
import Staff from '../JSON/hp.staff.json'

console.log( Students.map( (item) => item ));

export const HpApp = () => {

    const [ studen, setStuden] = useState( true );

    const filterCharater = ( status ) => {
        setStuden( status );
    }

  return (
    <>

        <button onClick={() => filterCharater( true ) } >Estudiantes</button>
        <button onClick={() => filterCharater( false ) } >Profesor</button>
        <div>
        {studen
            ? Students.map(( item ) => (
                <Card
                    key={ item.name }
                    status={ item.alive ? 'Vivo' : 'Muerto' }
                    category= { item.hogwartsStudent ? 'Estudiante' : 'Profesor' }
                    image={ item.image }
                    name={ item.name }
                    dateOfBirth={ item.dateOfBirth }
                    gender={ item.gender }
                    eyeColor={ item.eyeColour }
                    hairColor={ item.hairColour }
                />
            ))
            : Staff.map(( item ) => (
                <Card
                    key={ item.name }
                    status={ item.alive ? 'Vivo' : 'Muerto' }
                    category= { item.hogwartsStudent ? 'Estudiante' : 'Profesor' }
                    image={ item.image }
                    name={ item.name }
                    dateOfBirth={ item.dateOfBirth }
                    gender={ item.gender }
                    eyeColor={ item.eyeColour }
                    hairColor={ item.hairColour }
                />
            ))}
        </div>
    </>
    )
};