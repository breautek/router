
import {TransitionStrategy} from './TransitionStrategy';
import { Page } from './Page';

export enum TransitionSlideDirection {
    LEFT = 1,
    RIGHT,
    UP,
    DOWN
}

export class TransitionSlide extends TransitionStrategy {
    private _slideDirection: TransitionSlideDirection;
    private _slideSpeed: number;
    private _transitionTimeout: number;

    public constructor(slideDirection: TransitionSlideDirection, slideSpeed: number) {
        super();

        this._slideDirection = slideDirection || TransitionSlideDirection.LEFT;
        this._slideSpeed = slideSpeed || 0.25;
    }

    public execute(incoming: Page, exiting: Page): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            let incomingNode: HTMLElement = incoming.getNode();
            let exitingNode: HTMLElement = exiting.getNode();

            //First set initial transition CSS
            incomingNode.style.willChange = 'transform';
            incomingNode.style.transform = 'translate3d(0,0,0)';
            incomingNode.style.pointerEvents = 'none';
            incomingNode.style.zIndex = '1';
            exitingNode.style.willChange = 'transform';
            exitingNode.style.transform = 'translate3d(0,0,0)';
            exitingNode.style.pointerEvents = 'none';
            exitingNode.style.zIndex = '2';

            switch (this._slideDirection) {
                case TransitionSlideDirection.LEFT:
                    incomingNode.style.left = '100%';
                    exitingNode.style.left = '0%';
                    break;
                case TransitionSlideDirection.RIGHT:
                    incomingNode.style.left = '-100%';
                    exitingNode.style.left = '0%';
                    break;
                case TransitionSlideDirection.UP:
                    incomingNode.style.top = '100%';
                    exitingNode.style.top = '0%';
                    break;
                case TransitionSlideDirection.DOWN:
                    incomingNode.style.top = '-100%';
                    exitingNode.style.top = '0%';
                    break;
            }

            //Set the appropriate transition string
            let transitionString = this._getTransitionString(this._slideDirection);
            incomingNode.style.transition = transitionString;
            exitingNode.style.transition = transitionString;

            //Add transition listener
            let onTransitionEnd = () => {
                //cleanup
                incomingNode.removeEventListener('transitionend', onTransitionEnd);
                
                incomingNode.style.willChange = '';
                incomingNode.style.transform = '';
                incomingNode.style.pointerEvents = '';
                incomingNode.style.transition = '';
                incomingNode.style.top = '0px';
                incomingNode.style.left = '0px';
                incomingNode.style.zIndex = '';

                exitingNode.style.willChange = '';
                exitingNode.style.transform = '';
                exitingNode.style.pointerEvents = '';
                exitingNode.style.transition = '';
                exitingNode.style.top = '0px';
                exitingNode.style.left = '0px';
                exitingNode.style.zIndex = '';

                //And we're done
                resolve();
            };
            incomingNode.addEventListener('transitionend', onTransitionEnd);

            //Apply transition logic
            setTimeout(() => {
                switch (this._slideDirection) {
                    case TransitionSlideDirection.LEFT:
                        incomingNode.style.left = '0%';
                        exitingNode.style.left = '-100%';
                        break;
                    case TransitionSlideDirection.RIGHT:
                        incomingNode.style.left = '0%';
                        exitingNode.style.left = '100%';
                        break;
                    case TransitionSlideDirection.UP:
                        incomingNode.style.top = '0%';
                        exitingNode.style.top = '-100%';
                        break;
                    case TransitionSlideDirection.DOWN:
                        incomingNode.style.top = '0%';
                        exitingNode.style.top = '100%';
                        break;
                }
            }, 1);
        });
    }

    private _getTransitionString(direction: TransitionSlideDirection): string {
        let dir: string = null;
        let speed: string = `${this._slideSpeed}s`;
        switch (direction) {
            case TransitionSlideDirection.LEFT:
            case TransitionSlideDirection.RIGHT:
                dir = 'left';
                break;
            case TransitionSlideDirection.UP:
            case TransitionSlideDirection.DOWN:
                dir = 'top';
                break;
        }

        return `${dir} ${speed} ${this._getSlideStyle()}`
    }

    private _getSlideStyle(): string {
        return 'ease-in-out';
    }
}
