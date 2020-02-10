import { Page } from './Page';

export abstract class TransitionStrategy {
    public constructor() {}

    public abstract execute(incomingNode: Page, exitingNode: Page): Promise<void>
}
