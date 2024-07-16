import { Component } from 'react';

export default class ClassComponent extends Component {
    //Class constructor
    /*constructor(props) {
        super(props);
    }*/

    //State initializator
    state = {
        type: this.props.type,
        name: this.props.name,
    }

    //State setter
    setType = (e) => {
        this.setState({type: e.target.value});
    }
    setName = (e) => {
        this.setState({name: e.target.value});
    }

    //Rendering method - define what will be returned to display
    render() {
        return (
        <div>
            <p>Type: {this.state.type}, Name: {this.state.name}</p>
            <input type="text" placeholder='Type'
                value={this.state.type} onChange={e => this.setType(e)} />
            <input type="text" placeholder='Name'
                value={this.state.name} onChange={e => this.setName(e)} />
        </div>
        );
    }
}