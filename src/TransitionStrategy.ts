import { View } from './View';

export abstract class TransitionStrategy {
    public constructor() {}

    /**
     * Invoked when the transition should begin.
     * The promise should only resolve once the transition
     * has ran to completion.
     * 
     * The `incomingView` is the view that the user is navigating to.
     * The `exitingView` is te view that the user is currently on, and is leaving.
     * 
     * Both views will be rendered and are free to be manipulated in anyway that is desired,
     * however, the incomingView should be positioned in it's natural position by the end
     * of the transition to avoid "snapping" behaviour.
     * 
     * @param {View} incomingView 
     * @param {View} exitingView 
     */
    public async execute(incomingView: View, exitingView: View): Promise<void> {
        await this._execute(incomingView, exitingView);
    }

    protected abstract _execute(incomingView: View, exitingView: View): Promise<void>;
}
