import React from 'react';
function List(props) {
    return (
        <ol>
            {props.items.map((item) => (
                <li>{item}</li>
            ))}
        </ol>
    );
}
export default List;