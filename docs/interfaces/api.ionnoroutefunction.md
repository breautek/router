[@breautek/router - v1.0.1](../README.md) / [Exports](../modules.md) / [api](../modules/api.md) / IOnNoRouteFunction

# Interface: IOnNoRouteFunction

[api](../modules/api.md).IOnNoRouteFunction

Will be invoked when no routes are found. Default implementation is to simply return the `indexRoute`.

## Callable

▸ **IOnNoRouteFunction**(`indexRoute`: *ReactElement*<any, string \| (`props`: *any*) => *ReactElement*<any, any\> \| (`props`: *any*) => *Component*<any, any, any\>\>, `routes`: *ReactElement*<any, string \| (`props`: *any*) => *ReactElement*<any, any\> \| (`props`: *any*) => *Component*<any, any, any\>\>[]): *ReactElement*<any, string \| (`props`: *any*) => *ReactElement*<any, any\> \| (`props`: *any*) => *Component*<any, any, any\>\>

Will be invoked when no routes are found. Default implementation is to simply return the `indexRoute`.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`indexRoute` | *ReactElement*<any, string \| (`props`: *any*) => *ReactElement*<any, any\> \| (`props`: *any*) => *Component*<any, any, any\>\> | The `ReactElement` of a `Route`   |
`routes` | *ReactElement*<any, string \| (`props`: *any*) => *ReactElement*<any, any\> \| (`props`: *any*) => *Component*<any, any, any\>\>[] | An array of `ReactElement` of `Route`   |

**Returns:** *ReactElement*<any, string \| (`props`: *any*) => *ReactElement*<any, any\> \| (`props`: *any*) => *Component*<any, any, any\>\>

An `ReactElement` of a `Route`

Defined in: [src/RouteMatcher.ts:15](https://github.com/breautek/router/blob/06b4d2d/src/RouteMatcher.ts#L15)
