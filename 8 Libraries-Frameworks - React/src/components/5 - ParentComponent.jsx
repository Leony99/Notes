import ChildComponent from './5 - ChildComponent';

export default function ParentComponent(props) {
    return (
        <div>
            <h1>Parent component</h1>
            <ChildComponent name="Todd" lastName={props.lastName} />
            <ChildComponent {...props} />
            <ChildComponent {...props} name="Jack" />
        </div>
    );
}