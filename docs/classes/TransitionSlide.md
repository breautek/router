[@breautek/router - v2.0.1](../README.md) / [Exports](../modules.md) / TransitionSlide

# Class: TransitionSlide

## Hierarchy

- [`TransitionStrategy`](TransitionStrategy.md)

  ↳ **`TransitionSlide`**

## Table of contents

### Constructors

- [constructor](TransitionSlide.md#constructor)

### Methods

- [\_execute](TransitionSlide.md#_execute)
- [execute](TransitionSlide.md#execute)

## Constructors

### constructor

• **new TransitionSlide**(`slideDirection`, `slideSpeed`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `slideDirection` | [`TransitionSlideDirection`](../enums/TransitionSlideDirection.md) |
| `slideSpeed` | `number` |

#### Overrides

[TransitionStrategy](TransitionStrategy.md).[constructor](TransitionStrategy.md#constructor)

#### Defined in

[src/TransitionSlide.ts:17](https://github.com/breautek/router/blob/90a4daa/src/TransitionSlide.ts#L17)

## Methods

### \_execute

▸ `Protected` **_execute**(`incoming`, `exiting`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | [`View`](View.md)<[`IViewProps`](../interfaces/IViewProps.md)\> |
| `exiting` | [`View`](View.md)<[`IViewProps`](../interfaces/IViewProps.md)\> |

#### Returns

`Promise`<`void`\>

#### Overrides

[TransitionStrategy](TransitionStrategy.md).[_execute](TransitionStrategy.md#_execute)

#### Defined in

[src/TransitionSlide.ts:24](https://github.com/breautek/router/blob/90a4daa/src/TransitionSlide.ts#L24)

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

#### Inherited from

[TransitionStrategy](TransitionStrategy.md).[execute](TransitionStrategy.md#execute)

#### Defined in

[src/TransitionStrategy.ts:21](https://github.com/breautek/router/blob/90a4daa/src/TransitionStrategy.ts#L21)
