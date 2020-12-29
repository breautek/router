[@breautek/router - v1.0.0](../README.md) / [Exports](../modules.md) / [api](../modules/api.md) / IOnNoRouteFunction

# Interface: IOnNoRouteFunction

Will be invoked when no routes are found. Default implementation is to simply return the `indexRoute`.

## Hierarchy

* **IOnNoRouteFunction**

## Callable

▸ **IOnNoRouteFunction**(`indexRoute`: *ReactElement*<*any*, *string* \| (`props`: *any*) => *ReactElement*<*any*, *string* \| (props: any) =\> ReactElement<any, string \| ... \| (new (props: any) =\> Component<any, any, any\>)\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\>, `routes`: *ReactElement*<*any*, *string* \| (`props`: *any*) => *ReactElement*<*any*, *string* \| (props: any) =\> ReactElement<any, string \| ... \| (new (props: any) =\> Component<any, any, any\>)\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\>[]): *ReactElement*<*any*, *string* \| (`props`: *any*) => *ReactElement*<*any*, *string* \| (props: any) =\> ReactElement<any, string \| ... \| (new (props: any) =\> Component<any, any, any\>)\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\>

Will be invoked when no routes are found. Default implementation is to simply return the `indexRoute`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`indexRoute` | *ReactElement*<*any*, *string* \| (`props`: *any*) => *ReactElement*<*any*, *string* \| (props: any) =\> ReactElement<any, string \| ... \| (new (props: any) =\> Component<any, any, any\>)\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> | The `ReactElement` of a `Route`   |
`routes` | *ReactElement*<*any*, *string* \| (`props`: *any*) => *ReactElement*<*any*, *string* \| (props: any) =\> ReactElement<any, string \| ... \| (new (props: any) =\> Component<any, any, any\>)\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\>[] | An array of `ReactElement` of `Route`   |

**Returns:** *ReactElement*<*any*, *string* \| (`props`: *any*) => *ReactElement*<*any*, *string* \| (props: any) =\> ReactElement<any, string \| ... \| (new (props: any) =\> Component<any, any, any\>)\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\>

An `ReactElement` of a `Route`

Defined in: [src/RouteMatcher.ts:15](https://github.com/breautek/router/blob/d7a4785/src/RouteMatcher.ts#L15)
