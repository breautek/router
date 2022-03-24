[@breautek/router - v2.0.2](../README.md) / [Exports](../modules.md) / TransitionStrategy

# Class: TransitionStrategy

## Hierarchy

- **`TransitionStrategy`**

  ↳ [`TransitionSlide`](TransitionSlide.md)

## Table of contents

### Constructors

- [constructor](TransitionStrategy.md#constructor)

### Methods

- [\_execute](TransitionStrategy.md#_execute)
- [execute](TransitionStrategy.md#execute)

## Constructors

### constructor

• **new TransitionStrategy**()

#### Defined in

[src/TransitionStrategy.ts:4](https://github.com/breautek/router/blob/f657f43/src/TransitionStrategy.ts#L4)

## Methods

### \_execute

▸ `Protected` `Abstract` **_execute**(`incomingView`, `exitingView`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `incomingView` | [`View`](View.md)<[`IViewProps`](../interfaces/IViewProps.md)\> |
| `exitingView` | [`View`](View.md)<[`IViewProps`](../interfaces/IViewProps.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/TransitionStrategy.ts:25](https://github.com/breautek/router/blob/f657f43/src/TransitionStrategy.ts#L25)

___

### execute

▸ **execute**(`incomingView`, `exitingView`): `Promise`<`void`\>

Invoked when the transition should begin.
The promise should only resolve once the transition
has ran to completion.

The `incomingView` is the view that the user is navigating to.
The `exitingView` is te view that the user is currently on, and is leaving.

Both views will be rendered and are free to be manipulated in anyway that is desired,
however, the incomingView should be positioned in it's natural position by the end
of the transition to avoid "snapping" behaviour.

#### Parameters

| Name | Type |
| :------ | :------ |
| `incomingView` | [`View`](View.md)<[`IViewProps`](../interfaces/IViewProps.md)\> |
| `exitingView` | [`View`](View.md)<[`IViewProps`](../interfaces/IViewProps.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/TransitionStrategy.ts:21](https://github.com/breautek/router/blob/f657f43/src/TransitionStrategy.ts#L21)
