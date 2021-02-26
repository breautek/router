[@breautek/router - v1.0.1](../README.md) / [Exports](../modules.md) / [api](../modules/api.md) / TransitionStrategy

# Class: TransitionStrategy

[api](../modules/api.md).TransitionStrategy

## Table of contents

### Constructors

- [constructor](api.transitionstrategy.md#constructor)

### Methods

- [\_execute](api.transitionstrategy.md#_execute)
- [execute](api.transitionstrategy.md#execute)

## Constructors

### constructor

\+ **new TransitionStrategy**(): [*TransitionStrategy*](transitionstrategy.transitionstrategy-1.md)

**Returns:** [*TransitionStrategy*](transitionstrategy.transitionstrategy-1.md)

Defined in: [src/TransitionStrategy.ts:3](https://github.com/breautek/router/blob/06b4d2d/src/TransitionStrategy.ts#L3)

## Methods

### \_execute

▸ `Protected` `Abstract`**_execute**(`incomingView`: [*View*](view.view-1.md)<[*IViewProps*](../interfaces/view.iviewprops.md)\>, `exitingView`: [*View*](view.view-1.md)<[*IViewProps*](../interfaces/view.iviewprops.md)\>): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`incomingView` | [*View*](view.view-1.md)<[*IViewProps*](../interfaces/view.iviewprops.md)\> |
`exitingView` | [*View*](view.view-1.md)<[*IViewProps*](../interfaces/view.iviewprops.md)\> |

**Returns:** *Promise*<void\>

Defined in: [src/TransitionStrategy.ts:25](https://github.com/breautek/router/blob/06b4d2d/src/TransitionStrategy.ts#L25)

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

Defined in: [src/TransitionStrategy.ts:21](https://github.com/breautek/router/blob/06b4d2d/src/TransitionStrategy.ts#L21)
