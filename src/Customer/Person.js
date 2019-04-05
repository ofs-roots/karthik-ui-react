import React from 'react';
import classes from '../App.css';

const person = (props) => {
    return (
        <div>
            <table className={classes.customerTable}>
                <tbody>
                    <tr>
                        <td>{props.name}</td>
                        <td>{props.age}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default person;