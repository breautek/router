[@breautek/router - v1.0.1](../README.md) / [Exports](../modules.md) / [RouteMatcher](../modules/routematcher.md) / RouteMatcher

# Class: RouteMatcher

[RouteMatcher](../modules/routematcher.md).RouteMatcher

This class is reponsible for determing which route to render
based on the URL and the route url patterns.

## Table of contents

### Constructors

- [constructor](routematcher.routematcher-1.md#constructor)

### Methods

- [match](routematcher.routematcher-1.md#match)

## Constructors

### constructor

\+ **new RouteMatcher**(`routerStrategy`: [*RouterStrategy*](routerstrategy.routerstrategy-1.md)): [*RouteMatcher*](routematcher.routematcher-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`routerStrategy` | [*RouterStrategy*](routerstrategy.routerstrategy-1.md) |

**Returns:** [*RouteMatcher*](routematcher.routematcher-1.md)

Defined in: [src/RouteMatcher.ts:24](https://github.com/breautek/router/blob/06b4d2d/src/RouteMatcher.ts#L24)

## Methods

### match

▸ **match**(`url`: *string*, `children`: *ReactElement*<any, string \| (`props`: *any*) => *ReactElement*<any, any\> \| (`props`: *any*) => *Component*<any, any, any\>\>[], `base`: *string*, `indexRoute?`: *ReactElement*<any, string \| (`props`: *any*) => *ReactElement*<any, any\> \| (`props`: *any*) => *Component*<any, any, any\>\>, `onNoRoute?`: [*IOnNoRouteFunction*](../interfaces/routematcher.ionnoroutefunction.md)): *ReactElement*<any, string \| (`props`: *any*) => *ReactElement*<any, any\> \| (`props`: *any*) => *Component*<any, any, any\>\>

Matches the url to the appropriate renderable route

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`children` | *ReactElement*<any, string \| (`props`: *any*) => *ReactElement*<any, any\> \| (`props`: *any*) => *Component*<any, any, any\>\>[] |
`base` | *string* |
`indexRoute?` | *ReactElement*<any, string \| (`props`: *any*) => *ReactElement*<any, any\> \| (`props`: *any*) => *Component*<any, any, any\>\> |
`onNoRoute?` | [*IOnNoRouteFunction*](../interfaces/routematcher.ionnoroutefunction.md) |

**Returns:** *ReactElement*<any, string \| (`props`: *any*) => *ReactElement*<any, any\> \| (`props`: *any*) => *Component*<any, any, any\>\>

Defined in: [src/RouteMatcher.ts:43](https://github.com/breautek/router/blob/06b4d2d/src/RouteMatcher.ts#L43)
