

import * as React from 'react';

interface ITestAppProps {
    children: React.ReactElement[];
}

export class TestApp extends React.Component<ITestAppProps> {
    public render(): React.ReactNode {
        return <div className="app">{this.props.children}</div>
    }
}
