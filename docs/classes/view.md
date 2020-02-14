[@breautek/router - v1.0.0-beta.2](../README.md) › [Globals](../globals.md) › [View](view.md)

# Class: View <**TPageProps, S, SS, S**>

## Type parameters

▪ **TPageProps**: *[IViewProps](../interfaces/iviewprops.md)*

▪ **S**

▪ **SS**

▪ **S**

## Hierarchy

* Component‹TPageProps›

  ↳ **View**

## Index

### Constructors

* [constructor](view.md#constructor)

### Properties

* [context](view.md#context)
* [props](view.md#props)
* [refs](view.md#refs)
* [state](view.md#state)
* [contextType](view.md#static-optional-contexttype)

### Methods

* [UNSAFE_componentWillMount](view.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](view.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](view.md#optional-unsafe_componentwillupdate)
* [_renderView](view.md#protected-abstract-_renderview)
* [componentDidCatch](view.md#optional-componentdidcatch)
* [componentDidUpdate](view.md#optional-componentdidupdate)
* [componentWillMount](view.md#optional-componentwillmount)
* [componentWillReceiveProps](view.md#optional-componentwillreceiveprops)
* [componentWillUpdate](view.md#optional-componentwillupdate)
* [forceUpdate](view.md#forceupdate)
* [getCSSClass](view.md#getcssclass)
* [getNode](view.md#getnode)
* [getSnapshotBeforeUpdate](view.md#optional-getsnapshotbeforeupdate)
* [getTitle](view.md#gettitle)
* [getViewStyles](view.md#getviewstyles)
* [render](view.md#render)
* [setState](view.md#setstate)
* [shouldComponentUpdate](view.md#optional-shouldcomponentupdate)

## Constructors

###  constructor

\+ **new View**(`props`: TPageProps): *[View](view.md)*

*Overrides void*

*Defined in [src/View.tsx:15](https://github.com/breautek/router/blob/658faf7/src/View.tsx#L15)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | TPageProps | See [IViewProps]  |

**Returns:** *[View](view.md)*

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

• **props**: *Readonly‹TPageProps› & Readonly‹object›*

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

• **state**: *Readonly‹S›*

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

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹TPageProps›, `nextContext`: any): *void*

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
`nextProps` | Readonly‹TPageProps› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹TPageProps›, `nextState`: Readonly‹S›, `nextContext`: any): *void*

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
`nextProps` | Readonly‹TPageProps› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *void*

___

### `Protected` `Abstract` _renderView

▸ **_renderView**(): *React.ReactNode*

*Defined in [src/View.tsx:62](https://github.com/breautek/router/blob/658faf7/src/View.tsx#L62)*

**Returns:** *React.ReactNode*

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

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹TPageProps›, `prevState`: Readonly‹S›, `snapshot?`: SS): *void*

*Inherited from [Route](route.md).[componentDidUpdate](route.md#optional-componentdidupdate)*

Defined in node_modules/@types/react/index.d.ts:631

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹TPageProps› |
`prevState` | Readonly‹S› |
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

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹TPageProps›, `nextContext`: any): *void*

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
`nextProps` | Readonly‹TPageProps› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹TPageProps›, `nextState`: Readonly‹S›, `nextContext`: any): *void*

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
`nextProps` | Readonly‹TPageProps› |
`nextState` | Readonly‹S› |
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

###  getCSSClass

▸ **getCSSClass**(): *string*

*Defined in [src/View.tsx:25](https://github.com/breautek/router/blob/658faf7/src/View.tsx#L25)*

**Returns:** *string*

___

###  getNode

▸ **getNode**(): *HTMLElement*

*Defined in [src/View.tsx:46](https://github.com/breautek/router/blob/658faf7/src/View.tsx#L46)*

Gets the underlying HTML node for this View

**Returns:** *HTMLElement*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹TPageProps›, `prevState`: Readonly‹S›): *SS | null*

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
`prevProps` | Readonly‹TPageProps› |
`prevState` | Readonly‹S› |

**Returns:** *SS | null*

___

###  getTitle

▸ **getTitle**(): *Promise‹string›*

*Defined in [src/View.tsx:50](https://github.com/breautek/router/blob/658faf7/src/View.tsx#L50)*

**Returns:** *Promise‹string›*

___

###  getViewStyles

▸ **getViewStyles**(): *IDictionary‹string›*

*Defined in [src/View.tsx:58](https://github.com/breautek/router/blob/658faf7/src/View.tsx#L58)*

Get the inline styles for this view.
Use React style notation.

**Returns:** *IDictionary‹string›*

___

###  render

▸ **render**(): *React.ReactNode*

*Overrides void*

*Defined in [src/View.tsx:64](https://github.com/breautek/router/blob/658faf7/src/View.tsx#L64)*

**Returns:** *React.ReactNode*

___

###  setState

▸ **setState**<**K**>(`state`: function | S | object, `callback?`: function): *void*

*Inherited from [Route](route.md).[setState](route.md#setstate)*

Defined in node_modules/@types/react/index.d.ts:459

**Type parameters:**

▪ **K**: *keyof S*

**Parameters:**

▪ **state**: *function | S | object*

▪`Optional`  **callback**: *function*

▸ (): *void*

**Returns:** *void*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹TPageProps›, `nextState`: Readonly‹S›, `nextContext`: any): *boolean*

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
`nextProps` | Readonly‹TPageProps› |
`nextState` | Readonly‹S› |
`nextContext` | any |

**Returns:** *boolean*
