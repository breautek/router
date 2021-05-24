[@breautek/router - v1.0.2](../README.md) / [Exports](../modules.md) / [RouteMatcher](../modules/routematcher.md) / RouteMatcher

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `routerStrategy` | [*RouterStrategy*](routerstrategy.routerstrategy-1.md) |

**Returns:** [*RouteMatcher*](routematcher.routematcher-1.md)

Defined in: [src/RouteMatcher.ts:24](https://github.com/breautek/router/blob/3a44627/src/RouteMatcher.ts#L24)

## Methods

### match

▸ **match**(`url`: *string*, `children`: *ReactElement*<any, string \| JSXElementConstructor<any\>\>[], `base`: *string*, `indexRoute?`: *ReactElement*<any, string \| JSXElementConstructor<any\>\>, `onNoRoute?`: [*IOnNoRouteFunction*](../interfaces/routematcher.ionnoroutefunction.md)): *ReactElement*<any, string \| JSXElementConstructor<any\>\>

Matches the url to the appropriate renderable route

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `children` | *ReactElement*<any, string \| JSXElementConstructor<any\>\>[] |
| `base` | *string* |
| `indexRoute?` | *ReactElement*<any, string \| JSXElementConstructor<any\>\> |
| `onNoRoute?` | [*IOnNoRouteFunction*](../interfaces/routematcher.ionnoroutefunction.md) |

**Returns:** *ReactElement*<any, string \| JSXElementConstructor<any\>\>

Defined in: [src/RouteMatcher.ts:43](https://github.com/breautek/router/blob/3a44627/src/RouteMatcher.ts#L43)
