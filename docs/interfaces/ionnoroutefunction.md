[@breautek/router - v1.0.0-beta.2](../README.md) › [Globals](../globals.md) › [IOnNoRouteFunction](ionnoroutefunction.md)

# Interface: IOnNoRouteFunction

Will be invoked when no routes are found. Default implementation is to simply return the `indexRoute`.

## Hierarchy

* **IOnNoRouteFunction**

## Callable

▸ (`indexRoute`: ReactElement, `routes`: Array‹ReactElement›): *ReactElement*

*Defined in [src/RouteMatcher.ts:13](https://github.com/breautek/router/blob/658faf7/src/RouteMatcher.ts#L13)*

Will be invoked when no routes are found. Default implementation is to simply return the `indexRoute`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`indexRoute` | ReactElement | The `ReactElement` of a `Route` |
`routes` | Array‹ReactElement› | An array of `ReactElement` of `Route` |

**Returns:** *ReactElement*

An `ReactElement` of a `Route`
