import {Component} from 'react';

export class Page1 extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return <div>{this.props.url}</div>;
    }
}
