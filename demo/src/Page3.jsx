import {Component} from 'react';

export class Page3 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>Component 3: ({this.props.id}) {this.props.url || JSON.stringify(this.props)}</div>;
    }
}
