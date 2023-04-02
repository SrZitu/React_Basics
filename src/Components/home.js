import React from 'react';

const Home = ({test,test2}) => {
    return (
        <div>
            <h2>Home Component</h2>
            <h3>I'm {test}</h3>
            <h3>My city is {test2}</h3>
        </div>
    );
};

export default Home;