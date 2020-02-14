[@breautek/router - v1.0.0-beta.2](../README.md) › [Globals](../globals.md) › [TransitionStrategy](transitionstrategy.md)

# Class: TransitionStrategy

## Hierarchy

* **TransitionStrategy**

  ↳ [TransitionSlide](transitionslide.md)

## Index

### Constructors

* [constructor](transitionstrategy.md#constructor)

### Methods

* [_execute](transitionstrategy.md#protected-abstract-_execute)
* [execute](transitionstrategy.md#execute)

## Constructors

###  constructor

\+ **new TransitionStrategy**(): *[TransitionStrategy](transitionstrategy.md)*

*Defined in [src/TransitionStrategy.ts:3](https://github.com/breautek/router/blob/658faf7/src/TransitionStrategy.ts#L3)*

**Returns:** *[TransitionStrategy](transitionstrategy.md)*

## Methods

### `Protected` `Abstract` _execute

▸ **_execute**(`incomingView`: [View](view.md), `exitingView`: [View](view.md)): *Promise‹void›*

*Defined in [src/TransitionStrategy.ts:25](https://github.com/breautek/router/blob/658faf7/src/TransitionStrategy.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`incomingView` | [View](view.md) |
`exitingView` | [View](view.md) |

**Returns:** *Promise‹void›*

___

###  execute

▸ **execute**(`incomingView`: [View](view.md), `exitingView`: [View](view.md)): *Promise‹void›*

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
