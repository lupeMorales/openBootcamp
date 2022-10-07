import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';


const Greeting = (props) => {
    const [age, setAge] = useState(40);

    const birthay = () =>{
        setAge(age +1);

    }
    return (
        <div>
            <h1>
                SI LO DIGO {props.name}
            </h1>
            <h2> Tu edad es : {age} años</h2>
            <div>
                <button onClick={birthay}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


Greeting.propTypes = {
    name: PropTypes.string,

};


export default Greeting;





