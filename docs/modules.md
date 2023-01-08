[@breautek/router - v3.0.1](README.md) / Exports

# @breautek/router - v3.0.1

## Table of contents

### Enumerations

- [TransitionSlideDirection](enums/TransitionSlideDirection.md)

### Classes

- [HashStrategy](classes/HashStrategy.md)
- [Route](classes/Route.md)
- [RouteMatcher](classes/RouteMatcher.md)
- [Router](classes/Router.md)
- [RouterStrategy](classes/RouterStrategy.md)
- [TransitionSlide](classes/TransitionSlide.md)
- [TransitionStrategy](classes/TransitionStrategy.md)
- [URLStrategy](classes/URLStrategy.md)
- [View](classes/View.md)

### Interfaces

- [IComponentProps](interfaces/IComponentProps.md)
- [IOnNoRouteFunction](interfaces/IOnNoRouteFunction.md)
- [IRouteProps](interfaces/IRouteProps.md)
- [IRouteState](interfaces/IRouteState.md)
- [IRouterProps](interfaces/IRouterProps.md)
- [IRouterState](interfaces/IRouterState.md)
- [IViewProps](interfaces/IViewProps.md)
- [IViewStylesheet](interfaces/IViewStylesheet.md)

### Type Aliases

- [URLChangeCallback](modules.md#urlchangecallback)

### Variables

- [DefaultStrategy](modules.md#defaultstrategy)
- [EVENT\_URL\_CHANGE](modules.md#event_url_change)
- [version](modules.md#version)

### Functions

- [getRouter](modules.md#getrouter)

## Type Aliases

### URLChangeCallback

Ƭ **URLChangeCallback**: (`url`: `string`) => `void`

#### Type declaration

▸ (`url`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

##### Returns

`void`

#### Defined in

[src/RouterStrategy.ts:6](https://github.com/breautek/router/blob/c2e6307/src/RouterStrategy.ts#L6)

## Variables

### DefaultStrategy

• **DefaultStrategy**: `IRouterStrategyClass` = `HashStrategy`

Alias for [HashStrategy](classes/HashStrategy.md)

#### Defined in

[src/DefaultStrategy.ts:9](https://github.com/breautek/router/blob/c2e6307/src/DefaultStrategy.ts#L9)

___

### EVENT\_URL\_CHANGE

• `Const` **EVENT\_URL\_CHANGE**: `string` = `'urlchange'`

#### Defined in

[src/RouterStrategy.ts:4](https://github.com/breautek/router/blob/c2e6307/src/RouterStrategy.ts#L4)

___

### version

• `Const` **version**: `string` = `packageInfo.version`

#### Defined in

[src/api.ts:16](https://github.com/breautek/router/blob/c2e6307/src/api.ts#L16)

## Functions

### getRouter

▸ **getRouter**(): [`RouterStrategy`](classes/RouterStrategy.md)

#### Returns

[`RouterStrategy`](classes/RouterStrategy.md)

#### Defined in

[src/Router.tsx:278](https://github.com/breautek/router/blob/c2e6307/src/Router.tsx#L278)
