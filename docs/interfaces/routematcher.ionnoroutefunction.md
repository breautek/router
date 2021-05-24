[@breautek/router - v1.0.2](../README.md) / [Exports](../modules.md) / [RouteMatcher](../modules/routematcher.md) / IOnNoRouteFunction

# Interface: IOnNoRouteFunction

[RouteMatcher](../modules/routematcher.md).IOnNoRouteFunction

Will be invoked when no routes are found. Default implementation is to simply return the `indexRoute`.

## Callable

▸ **IOnNoRouteFunction**(`indexRoute`: *ReactElement*<any, string \| JSXElementConstructor<any\>\>, `routes`: *ReactElement*<any, string \| JSXElementConstructor<any\>\>[]): *ReactElement*<any, string \| JSXElementConstructor<any\>\>

Will be invoked when no routes are found. Default implementation is to simply return the `indexRoute`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `indexRoute` | *ReactElement*<any, string \| JSXElementConstructor<any\>\> | The `ReactElement` of a `Route` |
| `routes` | *ReactElement*<any, string \| JSXElementConstructor<any\>\>[] | An array of `ReactElement` of `Route` |

**Returns:** *ReactElement*<any, string \| JSXElementConstructor<any\>\>

An `ReactElement` of a `Route`

Defined in: [src/RouteMatcher.ts:15](https://github.com/breautek/router/blob/3a44627/src/RouteMatcher.ts#L15)
