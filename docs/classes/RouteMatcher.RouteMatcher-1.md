[@breautek/router - v2.0.1](../README.md) / [Exports](../modules.md) / [RouteMatcher](../modules/RouteMatcher.md) / RouteMatcher

# Class: RouteMatcher

[RouteMatcher](../modules/RouteMatcher.md).RouteMatcher

This class is reponsible for determing which route to render
based on the URL and the route url patterns.

## Table of contents

### Constructors

- [constructor](RouteMatcher.RouteMatcher-1.md#constructor)

### Methods

- [match](RouteMatcher.RouteMatcher-1.md#match)

## Constructors

### constructor

• **new RouteMatcher**(`routerStrategy`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `routerStrategy` | [`RouterStrategy`](RouterStrategy.RouterStrategy-1.md) |

#### Defined in

[src/RouteMatcher.ts:26](https://github.com/breautek/router/blob/f6dfe6e/src/RouteMatcher.ts#L26)

## Methods

### match

▸ **match**(`url`, `children`, `base`, `indexRoute?`, `onNoRoute?`): `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Matches the url to the appropriate renderable route

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `children` | `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>[] |
| `base` | `string` |
| `indexRoute?` | `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> |
| `onNoRoute?` | [`IOnNoRouteFunction`](../interfaces/RouteMatcher.IOnNoRouteFunction.md) |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

[src/RouteMatcher.ts:43](https://github.com/breautek/router/blob/f6dfe6e/src/RouteMatcher.ts#L43)
