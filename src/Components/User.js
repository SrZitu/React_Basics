import React from 'react';

const User = (props) => {
    return (
        <div>
            <h1>Name: {props.user.name}</h1>
            <h1>Email:{props.user.email}</h1>
        </div>
    );
};

export default User;