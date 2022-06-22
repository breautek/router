[@breautek/router - v3.0.0](../README.md) / [Exports](../modules.md) / RouteMatcher

# Class: RouteMatcher

This class is reponsible for determing which route to render
based on the URL and the route url patterns.

## Table of contents

### Constructors

- [constructor](RouteMatcher.md#constructor)

### Methods

- [match](RouteMatcher.md#match)

## Constructors

### constructor

• **new RouteMatcher**(`routerStrategy`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `routerStrategy` | [`RouterStrategy`](RouterStrategy.md) |

#### Defined in

[src/RouteMatcher.ts:26](https://github.com/breautek/router/blob/18557bc/src/RouteMatcher.ts#L26)

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
| `onNoRoute?` | [`IOnNoRouteFunction`](../interfaces/IOnNoRouteFunction.md) |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

[src/RouteMatcher.ts:43](https://github.com/breautek/router/blob/18557bc/src/RouteMatcher.ts#L43)
