[@breautek/router - v3.0.0-dev](../README.md) / [Exports](../modules.md) / IOnNoRouteFunction

# Interface: IOnNoRouteFunction

## Callable

### IOnNoRouteFunction

▸ **IOnNoRouteFunction**(`indexRoute`, `routes`): `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Will be invoked when no routes are found. Default implementation is to simply return the `indexRoute`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `indexRoute` | `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> | The `ReactElement` of a `Route` |
| `routes` | `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>[] | An array of `ReactElement` of `Route` |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

An `ReactElement` of a `Route`

#### Defined in

[src/RouteMatcher.ts:16](https://github.com/breautek/router/blob/758f475/src/RouteMatcher.ts#L16)