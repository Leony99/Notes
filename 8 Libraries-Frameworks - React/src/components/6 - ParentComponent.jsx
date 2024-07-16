import React from 'react';

export default function ParentComponent2(props) {
    return (
        <div>
            <h1>Parent component 2</h1>
            {
                //React.Clindren.map() - iterate through children
                //props.children - get child list from props
                React.Children.map(props.children, child => {
                    //React.cloneElement - clone element
                    return React.cloneElement(child, {...props, ...child.props});
                })
            }
        </div>
    );
}