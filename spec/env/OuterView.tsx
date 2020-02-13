
import * as React from 'react';
import {View} from '../../src/View';

export class OuterView extends View {
    getClassName() {
        return 'OuterView';
    }

    getTitle() {
        return Promise.resolve(this.getClassName());
    }

    $render() {
        return (
            <div>
                <div>Outer View</div>
                {this.props.children}
            </div>
        );
    }
}
