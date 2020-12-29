[@breautek/router - v1.0.0](../README.md) / [Exports](../modules.md) / [api](../modules/api.md) / RouteMatcher

# Class: RouteMatcher

This class is reponsible for determing which route to render
based on the URL and the route url patterns.

## Hierarchy

* **RouteMatcher**

## Index

### Constructors

* [constructor](api.routematcher.md#constructor)

### Methods

* [match](api.routematcher.md#match)

## Constructors

### constructor

\+ **new RouteMatcher**(`routerStrategy`: [*RouterStrategy*](routerstrategy.routerstrategy-1.md)): [*RouteMatcher*](routematcher.routematcher-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`routerStrategy` | [*RouterStrategy*](routerstrategy.routerstrategy-1.md) |

**Returns:** [*RouteMatcher*](routematcher.routematcher-1.md)

Defined in: [src/RouteMatcher.ts:24](https://github.com/breautek/router/blob/d7a4785/src/RouteMatcher.ts#L24)

## Methods

### match

▸ **match**(`url`: *string*, `children`: *ReactElement*<*any*, *string* \| (`props`: *any*) => *ReactElement*<*any*, *string* \| (props: any) =\> ReactElement<any, string \| ... \| (new (props: any) =\> Component<any, any, any\>)\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\>[], `base`: *string*, `indexRoute?`: *ReactElement*<*any*, *string* \| (`props`: *any*) => *ReactElement*<*any*, *string* \| (props: any) =\> ReactElement<any, string \| ... \| (new (props: any) =\> Component<any, any, any\>)\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\>, `onNoRoute?`: [*IOnNoRouteFunction*](../interfaces/routematcher.ionnoroutefunction.md)): *ReactElement*<*any*, *string* \| (`props`: *any*) => *ReactElement*<*any*, *string* \| (props: any) =\> ReactElement<any, string \| ... \| (new (props: any) =\> Component<any, any, any\>)\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\>

Matches the url to the appropriate renderable route

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`url` | *string* |  |
`children` | *ReactElement*<*any*, *string* \| (`props`: *any*) => *ReactElement*<*any*, *string* \| (props: any) =\> ReactElement<any, string \| ... \| (new (props: any) =\> Component<any, any, any\>)\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\>[] |  |
`base` | *string* |  |
`indexRoute?` | *ReactElement*<*any*, *string* \| (`props`: *any*) => *ReactElement*<*any*, *string* \| (props: any) =\> ReactElement<any, string \| ... \| (new (props: any) =\> Component<any, any, any\>)\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> |  |
`onNoRoute?` | [*IOnNoRouteFunction*](../interfaces/routematcher.ionnoroutefunction.md) |     |

**Returns:** *ReactElement*<*any*, *string* \| (`props`: *any*) => *ReactElement*<*any*, *string* \| (props: any) =\> ReactElement<any, string \| ... \| (new (props: any) =\> Component<any, any, any\>)\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\>

Defined in: [src/RouteMatcher.ts:43](https://github.com/breautek/router/blob/d7a4785/src/RouteMatcher.ts#L43)
