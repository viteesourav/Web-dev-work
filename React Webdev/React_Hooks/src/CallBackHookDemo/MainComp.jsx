import React, { useCallback, useState } from 'react'
import Title from './Title'
import ShowCountComp from './ShowCountComp'
import ButtonComp from './ButtonComp'

//Main Comp: Calls a bunch of other Components to Render a Title, Info and a button...
function MainComp() {

    let[age, setAge] = useState(10);
    let[salary, setSalary] = useState(10);

    //Without callback hook...
    // const increaseAge = () =>{
    //     setAge(prevAge => prevAge + 1);
    // }

    // const increaseSalary = () =>{
    //     setSalary(prevSalary => prevSalary + 1);
    // }

    /*
    NOTE: When the component Re-renders, a new instance of setState functs are created, Old ones are removed.
        That's why evenif you have included memo for child Component [memo allows render only if the prop/state changes]
        It still re-renders as the fun reference is different.
        Solution: Put the setState Function inside useCallback hook, it preserve the old reference untill any change happens to the dependencies.
    */

    //With Callback hook...
    const increaseAge = useCallback(() =>{
        setAge(prevAge => prevAge + 1);
    }, [age]);

    const increaseSalary = useCallback(() =>{
        setSalary(prevSalary => prevSalary + 1);
    }, [salary]);

    return (
        <div>
            <Title />
            <ShowCountComp title="Age" count={age} />
            <ButtonComp setStateFun={increaseAge}> Increment Age </ButtonComp> 
            <ShowCountComp title="Salary" count={salary} />
            <ButtonComp setStateFun={increaseSalary}> Increment Salary </ButtonComp> 
        </div>
    )
}

export default MainComp