import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from './Card';
import { addCharater } from '../Store/slice/charaters/charater';

import Students from '../JSON/hp.students.json'
import Staff from '../JSON/hp.staff.json'

console.log( Students.map( (item) => item ));

export const HpApp = () => {

    const [ studen, setStuden] = useState( true );

    const { favoriteCharater } = useSelector (
        ( state ) => state.favoriteCahacter
    );
    console.log(favoriteCharater);
    
    const dispatch = useDispatch();

    const filterCharater = ( status ) => {
        setStuden( status );
    };

    const saveFavorite = ( personaje ) => {
        if ( Students.find(( item) => item.name !== personaje.name )) {
            dispatch( addCharater( personaje ));
        } else {
            console.log( 'Personaje duplicado' );
        }
    };

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
                    hadleFavorite={ saveFavorite }
                    charater={ item }
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