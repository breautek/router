'use strict';

import {Page} from '../../src/Page';

export class OuterView extends Page {
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
