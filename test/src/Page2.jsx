import {Component} from 'react';

export class Page2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>Component 2</div>
                <div>{this.props.children}</div>
            </div>
        );
    }
}
