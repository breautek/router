[@breautek/router - v1.0.0-beta.2](README.md) › [Globals](globals.md)

# @breautek/router - v1.0.0-beta.2

## Index

### Enumerations

* [TransitionSlideDirection](enums/transitionslidedirection.md)

### Classes

* [HashStrategy](classes/hashstrategy.md)
* [Route](classes/route.md)
* [RouteMatcher](classes/routematcher.md)
* [Router](classes/router.md)
* [RouterStrategy](classes/routerstrategy.md)
* [TransitionSlide](classes/transitionslide.md)
* [TransitionStrategy](classes/transitionstrategy.md)
* [URLParser](classes/urlparser.md)
* [URLStrategy](classes/urlstrategy.md)
* [View](classes/view.md)

### Interfaces

* [IComponentProps](interfaces/icomponentprops.md)
* [IOnNoRouteFunction](interfaces/ionnoroutefunction.md)
* [IRouteProps](interfaces/irouteprops.md)
* [IRouteState](interfaces/iroutestate.md)
* [IRouterProps](interfaces/irouterprops.md)
* [IRouterState](interfaces/irouterstate.md)
* [IRouterStrategyClass](interfaces/irouterstrategyclass.md)
* [IURLParams](interfaces/iurlparams.md)
* [IViewProps](interfaces/iviewprops.md)

### Type aliases

* [URLChangeCallback](globals.md#urlchangecallback)

### Variables

* [DefaultStrategy](globals.md#let-defaultstrategy)
* [EVENT_URL_CHANGE](globals.md#const-event_url_change)
* [instance](globals.md#let-instance)

### Functions

* [getRouter](globals.md#let-getrouter)

## Type aliases

###  URLChangeCallback

Ƭ **URLChangeCallback**: *function*

*Defined in [src/RouterStrategy.ts:7](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L7)*

#### Type declaration:

▸ (`url`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

## Variables

### `Let` DefaultStrategy

• **DefaultStrategy**: *[IRouterStrategyClass](interfaces/irouterstrategyclass.md)* = HashStrategy

*Defined in [src/DefaultStrategy.ts:8](https://github.com/breautek/router/blob/658faf7/src/DefaultStrategy.ts#L8)*

Alias for [HashStrategy](classes/hashstrategy.md)

___

### `Const` EVENT_URL_CHANGE

• **EVENT_URL_CHANGE**: *string* = "urlchange"

*Defined in [src/RouterStrategy.ts:5](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L5)*

___

### `Let` instance

• **instance**: *[Router](classes/router.md)* = null

*Defined in [src/Router.tsx:10](https://github.com/breautek/router/blob/658faf7/src/Router.tsx#L10)*

## Functions

### `Let` getRouter

▸ **getRouter**(): *[RouterStrategy](classes/routerstrategy.md)*

*Defined in [src/Router.tsx:12](https://github.com/breautek/router/blob/658faf7/src/Router.tsx#L12)*

**Returns:** *[RouterStrategy](classes/routerstrategy.md)*
