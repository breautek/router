'use strict';

import TransitionStrategy from './TransitionStrategy';
import InvalidPageInterface from './InvalidPageInterface';

export class TransitionSlide extends TransitionStrategy {
    constructor(slideDirection, slideSpeed) {
        super();

        this._slideDirection = slideDirection || TransitionSlide.SLIDE_LEFT;
        this._slideSpeed = slideSpeed || 0.25;
        this._transitionTimeout = 1000;
    }

    /**
        Incoming  and exiting params are Pages.
    */
    execute(incoming, exiting) {
        if (!incoming.getNode || !exiting.getNode) {
            throw new InvalidPageInterface();
        }

        incoming = incoming.getNode();
        exiting = exiting.getNode();

        return new Promise((resolve, reject) => {

            //First set initial transition CSS
            incoming.style.willChange = 'transform';
            incoming.style.transform = 'translate3d(0,0,0)';
            incoming.style.pointerEvents = 'none';
            incoming.style.zIndex = 1;
            exiting.style.willChange = 'transform';
            exiting.style.transform = 'translate3d(0,0,0)';
            exiting.style.pointerEvents = 'none';
            exiting.style.zIndex = 2;

            switch(this._slideDirection) {
                case TransitionSlide.SLIDE_LEFT:
                    incoming.style.left = '100%';
                    exiting.style.left = '0%';
                    break;
                case TransitionSlide.SLIDE_RIGHT:
                    incoming.style.left = '-100%';
                    exiting.style.left = '0%';
                    break;
                case TransitionSlide.SLIDE_UP:
                    incoming.style.top = '100%';
                    exiting.style.top = '0%';
                    break;
                case TransitionSlide.SLIDE_DOWN:
                    incoming.style.top = '-100%';
                    exiting.style.top = '0%';
                    break;
            }

            //Set the appropriate transition string
            var transitionString = this._getTransitionString(this._slideDirection);
            incoming.style.transition = transitionString;
            exiting.style.transition = transitionString;

            //Add transition listener
            var onTransitionEnd = () => {
                //cleanup
                incoming.removeEventListener('transitionend', onTransitionEnd);
                
                incoming.style.willChange = '';
                incoming.style.transform = '';
                incoming.style.pointerEvents = '';
                incoming.style.transition = '';
                incoming.style.top = '0px';
                incoming.style.left = '0px';
                incoming.zIndex = '';

                exiting.style.willChange = '';
                exiting.style.transform = '';
                exiting.style.pointerEvents = '';
                exiting.style.transition = '';
                exiting.style.top = '0px';
                exiting.style.left = '0px';
                exiting.zIndex = '';

                //And we're done
                resolve();
            };
            incoming.addEventListener('transitionend', onTransitionEnd);

            //Apply transition logic
            setTimeout(() => {
                switch(this._slideDirection) {
                    case TransitionSlide.SLIDE_LEFT:
                        incoming.style.left = '0%';
                        exiting.style.left = '-100%';
                        break;
                    case TransitionSlide.SLIDE_RIGHT:
                        incoming.style.left = '0%';
                        exiting.style.left = '100%';
                        break;
                    case TransitionSlide.SLIDE_UP:
                        incoming.style.top = '0%';
                        exiting.style.top = '-100%';
                        break;
                    case TransitionSlide.SLIDE_DOWN:
                        incoming.style.top = '0%';
                        exiting.style.top = '100%';
                        break;
                }
            }, 1);
        });
    }

    _getTransitionString(direction) {
        var dir = null;
        var speed = `${this._slideSpeed}s`;
        switch (direction) {
            case TransitionSlide.SLIDE_LEFT:
            case TransitionSlide.SLIDE_RIGHT:
                dir = 'left';
                break;
            case TransitionSlide.SLIDE_UP:
            case TransitionSlide.SLIDE_DOWN:
                dir = 'top';
                break;
        }

        return `${dir} ${speed} ${this._getSlideStyle()}`
    }

    _getSlideStyle() {
        return 'ease-in-out';
    }
}

TransitionSlide.SLIDE_LEFT 	= 0x0001;
TransitionSlide.SLIDE_RIGHT = 0x0002;
TransitionSlide.SLIDE_UP	= 0x0003;
TransitionSlide.SLIDE_DOWN 	= 0x0004;

export default TransitionSlide;