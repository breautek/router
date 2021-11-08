[@breautek/router - v2.0.0-beta.0](../README.md) / [Exports](../modules.md) / [TransitionSlide](../modules/TransitionSlide.md) / TransitionSlide

# Class: TransitionSlide

[TransitionSlide](../modules/TransitionSlide.md).TransitionSlide

## Hierarchy

- [`TransitionStrategy`](TransitionStrategy.TransitionStrategy-1.md)

  ↳ **`TransitionSlide`**

## Table of contents

### Constructors

- [constructor](TransitionSlide.TransitionSlide-1.md#constructor)

### Methods

- [\_execute](TransitionSlide.TransitionSlide-1.md#_execute)
- [execute](TransitionSlide.TransitionSlide-1.md#execute)

## Constructors

### constructor

• **new TransitionSlide**(`slideDirection`, `slideSpeed`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `slideDirection` | [`TransitionSlideDirection`](../enums/TransitionSlide.TransitionSlideDirection.md) |
| `slideSpeed` | `number` |

#### Overrides

[TransitionStrategy](TransitionStrategy.TransitionStrategy-1.md).[constructor](TransitionStrategy.TransitionStrategy-1.md#constructor)

#### Defined in

[src/TransitionSlide.ts:17](https://github.com/breautek/router/blob/09c6533/src/TransitionSlide.ts#L17)

## Methods

### \_execute

▸ `Protected` **_execute**(`incoming`, `exiting`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | [`View`](View.View-1.md)<[`IViewProps`](../interfaces/View.IViewProps.md)\> |
| `exiting` | [`View`](View.View-1.md)<[`IViewProps`](../interfaces/View.IViewProps.md)\> |

#### Returns

`Promise`<`void`\>

#### Overrides

[TransitionStrategy](TransitionStrategy.TransitionStrategy-1.md).[_execute](TransitionStrategy.TransitionStrategy-1.md#_execute)

#### Defined in

[src/TransitionSlide.ts:24](https://github.com/breautek/router/blob/09c6533/src/TransitionSlide.ts#L24)

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
| `incomingView` | [`View`](View.View-1.md)<[`IViewProps`](../interfaces/View.IViewProps.md)\> |
| `exitingView` | [`View`](View.View-1.md)<[`IViewProps`](../interfaces/View.IViewProps.md)\> |

#### Returns

`Promise`<`void`\>

#### Inherited from

[TransitionStrategy](TransitionStrategy.TransitionStrategy-1.md).[execute](TransitionStrategy.TransitionStrategy-1.md#execute)

#### Defined in

[src/TransitionStrategy.ts:21](https://github.com/breautek/router/blob/09c6533/src/TransitionStrategy.ts#L21)
