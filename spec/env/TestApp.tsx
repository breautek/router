

import * as React from 'react';

interface ITestAppProps {
    children: React.ReactElement[];
}

export class TestApp extends React.Component<ITestAppProps> {
    render() {
        return <div className="app">{this.props.children}</div>
    }
}
