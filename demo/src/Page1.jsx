import {Component} from 'react';

export class Page1 extends Component {
    constructor(props) {
        super(props);
        window.r = props.router;
    }

    render() {
        return (
            <div>
                <div>Component 1</div>
                <div>{this.props.children}</div>
            </div>
        );
    }
}
