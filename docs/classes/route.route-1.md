[@breautek/router - v1.0.0](../README.md) / [Exports](../modules.md) / [Route](../modules/route.md) / Route

# Class: Route<TComponentProps, TRouteProps, TRouteState\>

This class represents a route that renders a [View](../modules/view.md) component

## Type parameters

Name | Type | Default |
------ | ------ | ------ |
`TComponentProps` | [*IComponentProps*](../interfaces/route.icomponentprops.md) | [*IComponentProps*](../interfaces/route.icomponentprops.md) |
`TRouteProps` | [*IRouteProps*](../interfaces/route.irouteprops.md)<TComponentProps\> | [*IRouteProps*](../interfaces/route.irouteprops.md)<TComponentProps\\> |
`TRouteState` | [*IRouteState*](../interfaces/route.iroutestate.md) | [*IRouteState*](../interfaces/route.iroutestate.md) |

## Hierarchy

* *Component*<TRouteProps, TRouteState\>

  ↳ **Route**

## Index

### Constructors

* [constructor](route.route-1.md#constructor)

### Properties

* [context](route.route-1.md#context)
* [props](route.route-1.md#props)
* [refs](route.route-1.md#refs)
* [state](route.route-1.md#state)
* [contextType](route.route-1.md#contexttype)

### Methods

* [UNSAFE\_componentWillMount](route.route-1.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](route.route-1.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](route.route-1.md#unsafe_componentwillupdate)
* [componentDidCatch](route.route-1.md#componentdidcatch)
* [componentDidMount](route.route-1.md#componentdidmount)
* [componentDidUpdate](route.route-1.md#componentdidupdate)
* [componentWillMount](route.route-1.md#componentwillmount)
* [componentWillReceiveProps](route.route-1.md#componentwillreceiveprops)
* [componentWillUnmount](route.route-1.md#componentwillunmount)
* [componentWillUpdate](route.route-1.md#componentwillupdate)
* [forceUpdate](route.route-1.md#forceupdate)
* [getSnapshotBeforeUpdate](route.route-1.md#getsnapshotbeforeupdate)
* [render](route.route-1.md#render)
* [setState](route.route-1.md#setstate)
* [shouldComponentUpdate](route.route-1.md#shouldcomponentupdate)

## Constructors

### constructor

\+ **new Route**<TComponentProps, TRouteProps, TRouteState\>(`props`: TRouteProps): [*Route*](route.route-1.md)<TComponentProps, TRouteProps, TRouteState\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`TComponentProps` | [*IComponentProps*](../interfaces/route.icomponentprops.md) | [*IComponentProps*](../interfaces/route.icomponentprops.md) |
`TRouteProps` | [*IRouteProps*](../interfaces/route.irouteprops.md)<TComponentProps, TRouteProps\> | [*IRouteProps*](../interfaces/route.irouteprops.md)<TComponentProps\\> |
`TRouteState` | [*IRouteState*](../interfaces/route.iroutestate.md) | [*IRouteState*](../interfaces/route.iroutestate.md) |

#### Parameters:

Name | Type |
------ | ------ |
`props` | TRouteProps |

**Returns:** [*Route*](route.route-1.md)<TComponentProps, TRouteProps, TRouteState\>

Defined in: [src/Route.tsx:37](https://github.com/breautek/router/blob/d7a4785/src/Route.tsx#L37)

## Properties

### context

• **context**: *any*

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

Defined in: node_modules/@types/react/index.d.ts:476

___

### props

• `Readonly` **props**: *Readonly*<P\> & *Readonly*<{ `children?`: ReactNode  }\>

Defined in: node_modules/@types/react/index.d.ts:501

___

### refs

• **refs**: { [key: string]: ReactInstance;  }

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

Defined in: node_modules/@types/react/index.d.ts:507

___

### state

• **state**: *Readonly*<S\>

Defined in: node_modules/@types/react/index.d.ts:502

___

### contextType

▪ `Optional` `Static` **contextType**: *Context*<*any*\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

Defined in: node_modules/@types/react/index.d.ts:458

## Methods

### UNSAFE\_componentWillMount

▸ `Optional`**UNSAFE_componentWillMount**(): *void*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:712

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: *Readonly*<TRouteProps\>, `nextContext`: *any*): *void*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | *Readonly*<TRouteProps\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:744

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: *Readonly*<TRouteProps\>, `nextState`: *Readonly*<TRouteState\>, `nextContext`: *any*): *void*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | *Readonly*<TRouteProps\> |
`nextState` | *Readonly*<TRouteState\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:772

___

### componentDidCatch

▸ `Optional`**componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters:

Name | Type |
------ | ------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:641

___

### componentDidMount

▸ `Optional`**componentDidMount**(): *void*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:620

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: *Readonly*<TRouteProps\>, `prevState`: *Readonly*<TRouteState\>, `snapshot?`: *any*): *void*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | *Readonly*<TRouteProps\> |
`prevState` | *Readonly*<TRouteState\> |
`snapshot?` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:683

___

### componentWillMount

▸ `Optional`**componentWillMount**(): *void*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:698

___

### componentWillReceiveProps

▸ `Optional`**componentWillReceiveProps**(`nextProps`: *Readonly*<TRouteProps\>, `nextContext`: *any*): *void*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | *Readonly*<TRouteProps\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:727

___

### componentWillUnmount

▸ `Optional`**componentWillUnmount**(): *void*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:636

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: *Readonly*<TRouteProps\>, `nextState`: *Readonly*<TRouteState\>, `nextContext`: *any*): *void*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | *Readonly*<TRouteProps\> |
`nextState` | *Readonly*<TRouteState\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:757

___

### forceUpdate

▸ **forceUpdate**(`callback?`: () => *void*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:493

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: *Readonly*<TRouteProps\>, `prevState`: *Readonly*<TRouteState\>): *any*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | *Readonly*<TRouteProps\> |
`prevState` | *Readonly*<TRouteState\> |

**Returns:** *any*

Defined in: node_modules/@types/react/index.d.ts:677

___

### render

▸ **render**(): ReactNode

**Returns:** ReactNode

Defined in: [src/Route.tsx:44](https://github.com/breautek/router/blob/d7a4785/src/Route.tsx#L44)

___

### setState

▸ **setState**<K\>(`state`: TRouteState \| (`prevState`: *Readonly*<TRouteState\>, `props`: *Readonly*<TRouteProps\>) => TRouteState \| *Pick*<TRouteState, K\> \| *Pick*<TRouteState, K\>, `callback?`: () => *void*): *void*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
------ | ------ |
`state` | TRouteState \| (`prevState`: *Readonly*<TRouteState\>, `props`: *Readonly*<TRouteProps\>) => TRouteState \| *Pick*<TRouteState, K\> \| *Pick*<TRouteState, K\> |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:488

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: *Readonly*<TRouteProps\>, `nextState`: *Readonly*<TRouteState\>, `nextContext`: *any*): *boolean*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | *Readonly*<TRouteProps\> |
`nextState` | *Readonly*<TRouteState\> |
`nextContext` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/react/index.d.ts:631
