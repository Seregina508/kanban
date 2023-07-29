import React from 'react';
import classes from './MyInput.module.css'

const MyInput = ({searchQuery, setSearchQuery}) => {
    return (
        <div>

            <input className={classes.myInput} type="text" placeholder="Find Task" value={searchQuery} onChange={(e) =>
                setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default MyInput;