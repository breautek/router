[@breautek/router - v1.0.0-beta.2](../README.md) › [Globals](../globals.md) › [TransitionSlide](transitionslide.md)

# Class: TransitionSlide

## Hierarchy

* [TransitionStrategy](transitionstrategy.md)

  ↳ **TransitionSlide**

## Index

### Constructors

* [constructor](transitionslide.md#constructor)

### Methods

* [_execute](transitionslide.md#protected-_execute)
* [execute](transitionslide.md#execute)

## Constructors

###  constructor

\+ **new TransitionSlide**(`slideDirection`: [TransitionSlideDirection](../enums/transitionslidedirection.md), `slideSpeed`: number): *[TransitionSlide](transitionslide.md)*

*Overrides [TransitionStrategy](transitionstrategy.md).[constructor](transitionstrategy.md#constructor)*

*Defined in [src/TransitionSlide.ts:15](https://github.com/breautek/router/blob/658faf7/src/TransitionSlide.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`slideDirection` | [TransitionSlideDirection](../enums/transitionslidedirection.md) |
`slideSpeed` | number |

**Returns:** *[TransitionSlide](transitionslide.md)*

## Methods

### `Protected` _execute

▸ **_execute**(`incoming`: [View](view.md), `exiting`: [View](view.md)): *Promise‹void›*

*Overrides [TransitionStrategy](transitionstrategy.md).[_execute](transitionstrategy.md#protected-abstract-_execute)*

*Defined in [src/TransitionSlide.ts:24](https://github.com/breautek/router/blob/658faf7/src/TransitionSlide.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`incoming` | [View](view.md) |
`exiting` | [View](view.md) |

**Returns:** *Promise‹void›*

___

###  execute

▸ **execute**(`incomingView`: [View](view.md), `exitingView`: [View](view.md)): *Promise‹void›*

*Inherited from [TransitionStrategy](transitionstrategy.md).[execute](transitionstrategy.md#execute)*

*Defined in [src/TransitionStrategy.ts:21](https://github.com/breautek/router/blob/658faf7/src/TransitionStrategy.ts#L21)*

Invoked when the transition should begin.
The promise should only resolve once the transition
has ran to completion.

The `incomingView` is the view that the user is navigating to.
The `exitingView` is te view that the user is currently on, and is leaving.

Both views will be rendered and are free to be manipulated in anyway that is desired,
however, the incomingView should be positioned in it's natural position by the end
of the transition to avoid "snapping" behaviour.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`incomingView` | [View](view.md) | - |
`exitingView` | [View](view.md) |   |

**Returns:** *Promise‹void›*
