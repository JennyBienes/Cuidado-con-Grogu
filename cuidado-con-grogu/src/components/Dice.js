import { useState } from 'react';

const DiceValue = ({diceValue})=> {
const [newDiceValue,setNewDiceValue]= useState('');
console.log('Dentro de DiceValue pruebo lanzar el dado', diceValue);            

switch (diceValue) {
    case 7:
        setNewDiceValue(Math.floor(Math.random() * 4));
        diceValue = parseInt(newDiceValue);        
        console.log('El nuevo valor del dado ahora lanzado es', diceValue);
    break;
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    default:
        break;
   } 

return (
    <> </>
);
};

export default DiceValue;
