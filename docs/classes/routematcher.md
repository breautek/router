[@breautek/router - v1.0.0-beta.2](../README.md) › [Globals](../globals.md) › [RouteMatcher](routematcher.md)

# Class: RouteMatcher

This class is reponsible for determing which route to render
based on the URL and the route url patterns.

## Hierarchy

* **RouteMatcher**

## Index

### Constructors

* [constructor](routematcher.md#constructor)

### Methods

* [match](routematcher.md#match)

## Constructors

###  constructor

\+ **new RouteMatcher**(`routerStrategy`: [RouterStrategy](routerstrategy.md)): *[RouteMatcher](routematcher.md)*

*Defined in [src/RouteMatcher.ts:22](https://github.com/breautek/router/blob/658faf7/src/RouteMatcher.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`routerStrategy` | [RouterStrategy](routerstrategy.md) |

**Returns:** *[RouteMatcher](routematcher.md)*

## Methods

###  match

▸ **match**(`url`: string, `children`: Array‹ReactElement›, `base`: string, `indexRoute?`: ReactElement, `onNoRoute?`: [IOnNoRouteFunction](../interfaces/ionnoroutefunction.md)): *ReactElement*

*Defined in [src/RouteMatcher.ts:41](https://github.com/breautek/router/blob/658faf7/src/RouteMatcher.ts#L41)*

Matches the url to the appropriate renderable route

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | - |
`children` | Array‹ReactElement› | - |
`base` | string | - |
`indexRoute?` | ReactElement | - |
`onNoRoute?` | [IOnNoRouteFunction](../interfaces/ionnoroutefunction.md) |   |

**Returns:** *ReactElement*
