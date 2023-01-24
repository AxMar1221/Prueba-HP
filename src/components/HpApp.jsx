import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from './Card';
import { Favorite } from './Favorite';
import { addCharater, removeCharater } from '../Store/slice/charaters/charater';

import Students from '../JSON/hp.students.json'
import Staff from '../JSON/hp.staff.json'

console.log( Students.map( (item) => item ));

export const HpApp = () => {

    const [ studen, setStuden] = useState( true );
    const [ open, setOpen ] = useState( false);

    const { favoriteCharater } = useSelector (
        ( state ) => state.favoriteCharater
    );
    console.log(favoriteCharater);
    
    const dispatch = useDispatch();

    const filterCharater = ( status ) => {
        setStuden( status );
    };

    const saveFavorite = ( personaje ) => {
        dispatch( addCharater( personaje ));
    };
    const removeFavorite = ( name ) => {
        dispatch( removeCharater( name ));
    };

  return (
    <>
        <button onClick={() => setOpen( true )}> Favoritos </button>
        {open &&
            favoriteCharater.map(( item ) => (
                <div>
                    <li key={ item.name }>
                    <Favorite 
                        name={ item.name }
                        image={ item.image }
                        removeFavorite={ removeFavorite }
                        />
                    </li>
                </div>
            ))}
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