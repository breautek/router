[@breautek/router - v1.0.1](../README.md) / [Exports](../modules.md) / api

# Module: api

## Table of contents

### Enumerations

- [TransitionSlideDirection](../enums/api.transitionslidedirection.md)

### Classes

- [HashStrategy](../classes/api.hashstrategy.md)
- [Route](../classes/api.route.md)
- [RouteMatcher](../classes/api.routematcher.md)
- [Router](../classes/api.router.md)
- [RouterStrategy](../classes/api.routerstrategy.md)
- [TransitionSlide](../classes/api.transitionslide.md)
- [TransitionStrategy](../classes/api.transitionstrategy.md)
- [URLStrategy](../classes/api.urlstrategy.md)
- [View](../classes/api.view.md)

### Interfaces

- [IComponentProps](../interfaces/api.icomponentprops.md)
- [IOnNoRouteFunction](../interfaces/api.ionnoroutefunction.md)
- [IRouteProps](../interfaces/api.irouteprops.md)
- [IRouteState](../interfaces/api.iroutestate.md)
- [IRouterProps](../interfaces/api.irouterprops.md)
- [IRouterState](../interfaces/api.irouterstate.md)
- [IViewProps](../interfaces/api.iviewprops.md)
- [IViewStylesheet](../interfaces/api.iviewstylesheet.md)

### Type aliases

- [URLChangeCallback](api.md#urlchangecallback)

### Variables

- [DefaultStrategy](api.md#defaultstrategy)
- [EVENT\_URL\_CHANGE](api.md#event_url_change)
- [version](api.md#version)

### Functions

- [getRouter](api.md#getrouter)

## Type aliases

### URLChangeCallback

Ƭ **URLChangeCallback**: (`url`: *string*) => *void*

#### Type declaration:

▸ (`url`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |

**Returns:** *void*

Defined in: [src/RouterStrategy.ts:7](https://github.com/breautek/router/blob/06b4d2d/src/RouterStrategy.ts#L7)

## Variables

### DefaultStrategy

• `Let` **DefaultStrategy**: [*IRouterStrategyClass*](../interfaces/irouterstrategyclass.irouterstrategyclass-1.md)

Alias for [HashStrategy](../classes/api.hashstrategy.md)

Defined in: [src/DefaultStrategy.ts:9](https://github.com/breautek/router/blob/06b4d2d/src/DefaultStrategy.ts#L9)

___

### EVENT\_URL\_CHANGE

• `Const` **EVENT\_URL\_CHANGE**: *string*= 'urlchange'

Defined in: [src/RouterStrategy.ts:5](https://github.com/breautek/router/blob/06b4d2d/src/RouterStrategy.ts#L5)

___

### version

• `Const` **version**: *string*

Defined in: [src/api.ts:21](https://github.com/breautek/router/blob/06b4d2d/src/api.ts#L21)

## Functions

### getRouter

▸ `Let`**getRouter**(): [*RouterStrategy*](../classes/routerstrategy.routerstrategy-1.md)

**Returns:** [*RouterStrategy*](../classes/routerstrategy.routerstrategy-1.md)

Defined in: [src/Router.tsx:279](https://github.com/breautek/router/blob/06b4d2d/src/Router.tsx#L279)
