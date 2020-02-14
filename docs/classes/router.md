[@breautek/router - v1.0.0-beta.2](../README.md) › [Globals](../globals.md) › [Router](router.md)

# Class: Router <**TRouterProps, SS**>

## Type parameters

▪ **TRouterProps**: *[IRouterProps](../interfaces/irouterprops.md)*

▪ **SS**

## Hierarchy

* Component‹TRouterProps, [IRouterState](../interfaces/irouterstate.md)›

  ↳ **Router**

## Index

### Constructors

* [constructor](router.md#constructor)

### Properties

* [context](router.md#context)
* [props](router.md#props)
* [refs](router.md#refs)
* [state](router.md#state)
* [contextType](router.md#static-optional-contexttype)

### Methods

* [UNSAFE_componentWillUpdate](router.md#optional-unsafe_componentwillupdate)
* [back](router.md#back)
* [componentDidCatch](router.md#optional-componentdidcatch)
* [componentDidMount](router.md#optional-componentdidmount)
* [componentWillMount](router.md#optional-componentwillmount)
* [componentWillReceiveProps](router.md#optional-componentwillreceiveprops)
* [componentWillUpdate](router.md#optional-componentwillupdate)
* [forceUpdate](router.md#forceupdate)
* [forward](router.md#forward)
* [getHistoryLength](router.md#gethistorylength)
* [getRouterStrategy](router.md#getrouterstrategy)
* [getScrollRestoration](router.md#getscrollrestoration)
* [getSnapshotBeforeUpdate](router.md#optional-getsnapshotbeforeupdate)
* [go](router.md#go)
* [setState](router.md#setstate)
* [shouldComponentUpdate](router.md#optional-shouldcomponentupdate)

## Constructors

###  constructor

\+ **new Router**(`props`: TRouterProps): *[Router](router.md)*

*Overrides void*

*Defined in [src/Router.tsx:39](https://github.com/breautek/router/blob/658faf7/src/Router.tsx#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | TRouterProps |

**Returns:** *[Router](router.md)*

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

• **props**: *Readonly‹TRouterProps› & Readonly‹object›*

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

• **state**: *[IRouterState](../interfaces/irouterstate.md)*

*Overrides [Route](route.md).[state](route.md#state)*

*Defined in [src/Router.tsx:33](https://github.com/breautek/router/blob/658faf7/src/Router.tsx#L33)*

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

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹TRouterProps›, `nextState`: Readonly‹[IRouterState](../interfaces/irouterstate.md)›, `nextContext`: any): *void*

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
`nextProps` | Readonly‹TRouterProps› |
`nextState` | Readonly‹[IRouterState](../interfaces/irouterstate.md)› |
`nextContext` | any |

**Returns:** *void*

___

###  back

▸ **back**(): *void*

*Defined in [src/Router.tsx:233](https://github.com/breautek/router/blob/658faf7/src/Router.tsx#L233)*

Go back one step. This is an alias for [pushState(-1)](router.md#go).

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

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹TRouterProps›, `nextContext`: any): *void*

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
`nextProps` | Readonly‹TRouterProps› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹TRouterProps›, `nextState`: Readonly‹[IRouterState](../interfaces/irouterstate.md)›, `nextContext`: any): *void*

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
`nextProps` | Readonly‹TRouterProps› |
`nextState` | Readonly‹[IRouterState](../interfaces/irouterstate.md)› |
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

###  forward

▸ **forward**(): *void*

*Defined in [src/Router.tsx:240](https://github.com/breautek/router/blob/658faf7/src/Router.tsx#L240)*

Go forward one step. This is an alias for [pushState(1)](router.md#go).

**Returns:** *void*

___

###  getHistoryLength

▸ **getHistoryLength**(): *number*

*Defined in [src/Router.tsx:208](https://github.com/breautek/router/blob/658faf7/src/Router.tsx#L208)*

Gets the number of history entries. Note this does not count the browser history.
Only the history kept track during the life-cycle of the app.

**Returns:** *number*

___

###  getRouterStrategy

▸ **getRouterStrategy**(): *[RouterStrategy](routerstrategy.md)*

*Defined in [src/Router.tsx:68](https://github.com/breautek/router/blob/658faf7/src/Router.tsx#L68)*

Gets the current routing strategy

**Returns:** *[RouterStrategy](routerstrategy.md)*

___

###  getScrollRestoration

▸ **getScrollRestoration**(): *ScrollRestoration*

*Defined in [src/Router.tsx:215](https://github.com/breautek/router/blob/658faf7/src/Router.tsx#L215)*

Gets the scroll restoration mode

**Returns:** *ScrollRestoration*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹TRouterProps›, `prevState`: Readonly‹[IRouterState](../interfaces/irouterstate.md)›): *SS | null*

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
`prevProps` | Readonly‹TRouterProps› |
`prevState` | Readonly‹[IRouterState](../interfaces/irouterstate.md)› |

**Returns:** *SS | null*

___

###  go

▸ **go**(`to`: number): *void*

*Defined in [src/Router.tsx:226](https://github.com/breautek/router/blob/658faf7/src/Router.tsx#L226)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`to` | number | An integer, positive means go forward, negative means go backwards. E.g:              `1`  move forward one step              `-1` move backward one step              `0`  navigate to the current page (This is essentially a no-op)  |

**Returns:** *void*

___

###  setState

▸ **setState**<**K**>(`state`: function | S | object, `callback?`: function): *void*

*Inherited from [Route](route.md).[setState](route.md#setstate)*

Defined in node_modules/@types/react/index.d.ts:459

**Type parameters:**

▪ **K**: *keyof IRouterState*

**Parameters:**

▪ **state**: *function | S | object*

▪`Optional`  **callback**: *function*

▸ (): *void*

**Returns:** *void*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹TRouterProps›, `nextState`: Readonly‹[IRouterState](../interfaces/irouterstate.md)›, `nextContext`: any): *boolean*

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
`nextProps` | Readonly‹TRouterProps› |
`nextState` | Readonly‹[IRouterState](../interfaces/irouterstate.md)› |
`nextContext` | any |

**Returns:** *boolean*
