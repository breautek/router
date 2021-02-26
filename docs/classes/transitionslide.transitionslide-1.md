[@breautek/router - v1.0.1](../README.md) / [Exports](../modules.md) / [TransitionSlide](../modules/transitionslide.md) / TransitionSlide

# Class: TransitionSlide

[TransitionSlide](../modules/transitionslide.md).TransitionSlide

## Hierarchy

* [*TransitionStrategy*](transitionstrategy.transitionstrategy-1.md)

  ↳ **TransitionSlide**

## Table of contents

### Constructors

- [constructor](transitionslide.transitionslide-1.md#constructor)

### Methods

- [\_execute](transitionslide.transitionslide-1.md#_execute)
- [execute](transitionslide.transitionslide-1.md#execute)

## Constructors

### constructor

\+ **new TransitionSlide**(`slideDirection`: [*TransitionSlideDirection*](../enums/transitionslide.transitionslidedirection.md), `slideSpeed`: *number*): [*TransitionSlide*](transitionslide.transitionslide-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`slideDirection` | [*TransitionSlideDirection*](../enums/transitionslide.transitionslidedirection.md) |
`slideSpeed` | *number* |

**Returns:** [*TransitionSlide*](transitionslide.transitionslide-1.md)

Inherited from: [TransitionStrategy](transitionstrategy.transitionstrategy-1.md)

Defined in: [src/TransitionSlide.ts:15](https://github.com/breautek/router/blob/06b4d2d/src/TransitionSlide.ts#L15)

## Methods

### \_execute

▸ `Protected`**_execute**(`incoming`: [*View*](view.view-1.md)<[*IViewProps*](../interfaces/view.iviewprops.md)\>, `exiting`: [*View*](view.view-1.md)<[*IViewProps*](../interfaces/view.iviewprops.md)\>): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`incoming` | [*View*](view.view-1.md)<[*IViewProps*](../interfaces/view.iviewprops.md)\> |
`exiting` | [*View*](view.view-1.md)<[*IViewProps*](../interfaces/view.iviewprops.md)\> |

**Returns:** *Promise*<void\>

Overrides: [TransitionStrategy](transitionstrategy.transitionstrategy-1.md)

Defined in: [src/TransitionSlide.ts:24](https://github.com/breautek/router/blob/06b4d2d/src/TransitionSlide.ts#L24)

___

### execute

▸ **execute**(`incomingView`: [*View*](view.view-1.md)<[*IViewProps*](../interfaces/view.iviewprops.md)\>, `exitingView`: [*View*](view.view-1.md)<[*IViewProps*](../interfaces/view.iviewprops.md)\>): *Promise*<void\>

Invoked when the transition should begin.
The promise should only resolve once the transition
has ran to completion.

The `incomingView` is the view that the user is navigating to.
The `exitingView` is te view that the user is currently on, and is leaving.

Both views will be rendered and are free to be manipulated in anyway that is desired,
however, the incomingView should be positioned in it's natural position by the end
of the transition to avoid "snapping" behaviour.

#### Parameters:

Name | Type |
:------ | :------ |
`incomingView` | [*View*](view.view-1.md)<[*IViewProps*](../interfaces/view.iviewprops.md)\> |
`exitingView` | [*View*](view.view-1.md)<[*IViewProps*](../interfaces/view.iviewprops.md)\> |

**Returns:** *Promise*<void\>

Inherited from: [TransitionStrategy](transitionstrategy.transitionstrategy-1.md)

Defined in: [src/TransitionStrategy.ts:21](https://github.com/breautek/router/blob/06b4d2d/src/TransitionStrategy.ts#L21)
