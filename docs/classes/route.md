[@breautek/router - v1.0.0-beta.2](../README.md) › [Globals](../globals.md) › [Route](route.md)

# Class: Route <**TComponentProps, TRouteProps, TRouteState, SS**>

This class represents a route that renders a [View](view.md) component

## Type parameters

▪ **TComponentProps**: *[IComponentProps](../interfaces/icomponentprops.md)*

▪ **TRouteProps**: *[IRouteProps](../interfaces/irouteprops.md)‹TComponentProps›*

▪ **TRouteState**: *[IRouteState](../interfaces/iroutestate.md)*

▪ **SS**

## Hierarchy

* Component‹TRouteProps, TRouteState›

  ↳ **Route**

## Index

### Constructors

* [constructor](route.md#constructor)

### Properties

* [context](route.md#context)
* [props](route.md#props)
* [refs](route.md#refs)
* [state](route.md#state)
* [contextType](route.md#static-optional-contexttype)

### Methods

* [UNSAFE_componentWillMount](route.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](route.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](route.md#optional-unsafe_componentwillupdate)
* [componentDidCatch](route.md#optional-componentdidcatch)
* [componentDidMount](route.md#optional-componentdidmount)
* [componentDidUpdate](route.md#optional-componentdidupdate)
* [componentWillMount](route.md#optional-componentwillmount)
* [componentWillReceiveProps](route.md#optional-componentwillreceiveprops)
* [componentWillUnmount](route.md#optional-componentwillunmount)
* [componentWillUpdate](route.md#optional-componentwillupdate)
* [forceUpdate](route.md#forceupdate)
* [getSnapshotBeforeUpdate](route.md#optional-getsnapshotbeforeupdate)
* [render](route.md#render)
* [setState](route.md#setstate)
* [shouldComponentUpdate](route.md#optional-shouldcomponentupdate)

## Constructors

###  constructor

\+ **new Route**(`props`: TRouteProps): *[Route](route.md)*

*Overrides void*

*Defined in [src/Route.tsx:36](https://github.com/breautek/router/blob/658faf7/src/Route.tsx#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | TRouteProps |

**Returns:** *[Route](route.md)*

## Properties

###  context

• **context**: *any*

*Inherited from [Route](route.md).[context](route.md#context)*

Defined in node_modules/@types/react/index.d.ts:447

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

___

###  props

• **props**: *Readonly‹TRouteProps› & Readonly‹object›*

*Inherited from [Route](route.md).[props](route.md#props)*

Defined in node_modules/@types/react/index.d.ts:472

___

###  refs

• **refs**: *object*

*Inherited from [Route](route.md).[refs](route.md#refs)*

Defined in node_modules/@types/react/index.d.ts:478

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

* \[ **key**: *string*\]: ReactInstance

___

###  state

• **state**: *Readonly‹TRouteState›*

*Inherited from [Route](route.md).[state](route.md#state)*

Defined in node_modules/@types/react/index.d.ts:473

___

### `Static` `Optional` contextType

▪ **contextType**? : *Context‹any›*

*Inherited from [Route](route.md).[contextType](route.md#static-optional-contexttype)*

Defined in node_modules/@types/react/index.d.ts:429

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

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): *void*

*Inherited from [Route](route.md).[UNSAFE_componentWillMount](route.md#optional-unsafe_componentwillmount)*

Defined in node_modules/@types/react/index.d.ts:660

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹TRouteProps›, `nextContext`: any): *void*

*Inherited from [Route](route.md).[UNSAFE_componentWillReceiveProps](route.md#optional-unsafe_componentwillreceiveprops)*

Defined in node_modules/@types/react/index.d.ts:692

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

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹TRouteProps› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹TRouteProps›, `nextState`: Readonly‹TRouteState›, `nextContext`: any): *void*

*Inherited from [Route](route.md).[UNSAFE_componentWillUpdate](route.md#optional-unsafe_componentwillupdate)*

Defined in node_modules/@types/react/index.d.ts:720

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹TRouteProps› |
`nextState` | Readonly‹TRouteState› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

*Inherited from [Route](route.md).[componentDidCatch](route.md#optional-componentdidcatch)*

Defined in node_modules/@types/react/index.d.ts:589

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** *void*

___

### `Optional` componentDidMount

▸ **componentDidMount**(): *void*

*Inherited from [Route](route.md).[componentDidMount](route.md#optional-componentdidmount)*

Defined in node_modules/@types/react/index.d.ts:568

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹TRouteProps›, `prevState`: Readonly‹TRouteState›, `snapshot?`: SS): *void*

*Inherited from [Route](route.md).[componentDidUpdate](route.md#optional-componentdidupdate)*

Defined in node_modules/@types/react/index.d.ts:631

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹TRouteProps› |
`prevState` | Readonly‹TRouteState› |
`snapshot?` | SS |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from [Route](route.md).[componentWillMount](route.md#optional-componentwillmount)*

Defined in node_modules/@types/react/index.d.ts:646

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹TRouteProps›, `nextContext`: any): *void*

*Inherited from [Route](route.md).[componentWillReceiveProps](route.md#optional-componentwillreceiveprops)*

Defined in node_modules/@types/react/index.d.ts:675

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹TRouteProps› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Inherited from [Route](route.md).[componentWillUnmount](route.md#optional-componentwillunmount)*

Defined in node_modules/@types/react/index.d.ts:584

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹TRouteProps›, `nextState`: Readonly‹TRouteState›, `nextContext`: any): *void*

*Inherited from [Route](route.md).[componentWillUpdate](route.md#optional-componentwillupdate)*

Defined in node_modules/@types/react/index.d.ts:705

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹TRouteProps› |
`nextState` | Readonly‹TRouteState› |
`nextContext` | any |

**Returns:** *void*

___

###  forceUpdate

▸ **forceUpdate**(`callback?`: function): *void*

*Inherited from [Route](route.md).[forceUpdate](route.md#forceupdate)*

Defined in node_modules/@types/react/index.d.ts:464

**Parameters:**

▪`Optional`  **callback**: *function*

▸ (): *void*

**Returns:** *void*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹TRouteProps›, `prevState`: Readonly‹TRouteState›): *SS | null*

*Inherited from [Route](route.md).[getSnapshotBeforeUpdate](route.md#optional-getsnapshotbeforeupdate)*

Defined in node_modules/@types/react/index.d.ts:625

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹TRouteProps› |
`prevState` | Readonly‹TRouteState› |

**Returns:** *SS | null*

___

###  render

▸ **render**(): *React.ReactNode*

*Overrides void*

*Defined in [src/Route.tsx:43](https://github.com/breautek/router/blob/658faf7/src/Route.tsx#L43)*

**Returns:** *React.ReactNode*

___

###  setState

▸ **setState**<**K**>(`state`: function | S | object, `callback?`: function): *void*

*Inherited from [Route](route.md).[setState](route.md#setstate)*

Defined in node_modules/@types/react/index.d.ts:459

**Type parameters:**

▪ **K**: *keyof TRouteState*

**Parameters:**

▪ **state**: *function | S | object*

▪`Optional`  **callback**: *function*

▸ (): *void*

**Returns:** *void*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹TRouteProps›, `nextState`: Readonly‹TRouteState›, `nextContext`: any): *boolean*

*Inherited from [Route](route.md).[shouldComponentUpdate](route.md#optional-shouldcomponentupdate)*

Defined in node_modules/@types/react/index.d.ts:579

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹TRouteProps› |
`nextState` | Readonly‹TRouteState› |
`nextContext` | any |

**Returns:** *boolean*
