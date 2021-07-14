[@breautek/router - v1.0.3](../README.md) / [Exports](../modules.md) / [Router](../modules/Router.md) / Router

# Class: Router<TRouterProps\>

[Router](../modules/Router.md).Router

## Type parameters

| Name | Type |
| :------ | :------ |
| `TRouterProps` | extends [`IRouterProps`](../interfaces/Router.IRouterProps.md)[`IRouterProps`](../interfaces/Router.IRouterProps.md) |

## Hierarchy

- `Component`<`TRouterProps`, [`IRouterState`](../interfaces/Router.IRouterState.md)\>

  ↳ **`Router`**

## Table of contents

### Constructors

- [constructor](Router.Router-1.md#constructor)

### Properties

- [context](Router.Router-1.md#context)
- [props](Router.Router-1.md#props)
- [refs](Router.Router-1.md#refs)
- [state](Router.Router-1.md#state)
- [contextType](Router.Router-1.md#contexttype)

### Methods

- [UNSAFE\_componentWillMount](Router.Router-1.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillUpdate](Router.Router-1.md#unsafe_componentwillupdate)
- [back](Router.Router-1.md#back)
- [componentDidCatch](Router.Router-1.md#componentdidcatch)
- [componentDidMount](Router.Router-1.md#componentdidmount)
- [componentWillMount](Router.Router-1.md#componentwillmount)
- [componentWillReceiveProps](Router.Router-1.md#componentwillreceiveprops)
- [componentWillUpdate](Router.Router-1.md#componentwillupdate)
- [forceUpdate](Router.Router-1.md#forceupdate)
- [forward](Router.Router-1.md#forward)
- [getHistoryLength](Router.Router-1.md#gethistorylength)
- [getRouterStrategy](Router.Router-1.md#getrouterstrategy)
- [getScrollRestoration](Router.Router-1.md#getscrollrestoration)
- [getSnapshotBeforeUpdate](Router.Router-1.md#getsnapshotbeforeupdate)
- [go](Router.Router-1.md#go)
- [setState](Router.Router-1.md#setstate)
- [shouldComponentUpdate](Router.Router-1.md#shouldcomponentupdate)
- [getInstance](Router.Router-1.md#getinstance)

## Constructors

### constructor

• **new Router**<`TRouterProps`\>(`props`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TRouterProps` | extends [`IRouterProps`](../interfaces/Router.IRouterProps.md)[`IRouterProps`](../interfaces/Router.IRouterProps.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `TRouterProps` |

#### Overrides

React.Component&lt;TRouterProps, IRouterState\&gt;.constructor

#### Defined in

[src/Router.tsx:37](https://github.com/breautek/router/blob/f2901ca/src/Router.tsx#L37)

## Properties

### context

• **context**: `any`

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

#### Inherited from

React.Component.context

#### Defined in

node_modules/@types/react/index.d.ts:480

___

### props

• `Readonly` **props**: `Readonly`<`TRouterProps`\> & `Readonly`<`Object`\>

#### Inherited from

React.Component.props

#### Defined in

node_modules/@types/react/index.d.ts:505

___

### refs

• **refs**: `Object`

**`deprecated`**
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Index signature

▪ [key: `string`]: `ReactInstance`

#### Inherited from

React.Component.refs

#### Defined in

node_modules/@types/react/index.d.ts:511

___

### state

• **state**: [`IRouterState`](../interfaces/Router.IRouterState.md)

#### Overrides

React.Component.state

#### Defined in

[src/Router.tsx:27](https://github.com/breautek/router/blob/f2901ca/src/Router.tsx#L27)

___

### contextType

▪ `Static` `Optional` **contextType**: `Context`<`any`\>

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

#### Inherited from

React.Component.contextType

#### Defined in

node_modules/@types/react/index.d.ts:462

## Methods

### UNSAFE\_componentWillMount

▸ `Optional` **UNSAFE_componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE\_componentWillMount

#### Defined in

node_modules/@types/react/index.d.ts:716

___

### UNSAFE\_componentWillUpdate

▸ `Optional` **UNSAFE_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TRouterProps`\> |
| `nextState` | `Readonly`<[`IRouterState`](../interfaces/Router.IRouterState.md)\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE\_componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:776

___

### back

▸ **back**(): `void`

Go back one step. This is an alias for [pushState(-1)](Router.Router-1.md#go).

#### Returns

`void`

#### Defined in

[src/Router.tsx:236](https://github.com/breautek/router/blob/f2901ca/src/Router.tsx#L236)

___

### componentDidCatch

▸ `Optional` **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `errorInfo` | `ErrorInfo` |

#### Returns

`void`

#### Inherited from

React.Component.componentDidCatch

#### Defined in

node_modules/@types/react/index.d.ts:645

___

### componentDidMount

▸ **componentDidMount**(): `void`

#### Returns

`void`

#### Overrides

React.Component.componentDidMount

#### Defined in

[src/Router.tsx:89](https://github.com/breautek/router/blob/f2901ca/src/Router.tsx#L89)

___

### componentWillMount

▸ `Optional` **componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

React.Component.componentWillMount

#### Defined in

node_modules/@types/react/index.d.ts:702

___

### componentWillReceiveProps

▸ `Optional` **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TRouterProps`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:731

___

### componentWillUpdate

▸ `Optional` **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TRouterProps`\> |
| `nextState` | `Readonly`<[`IRouterState`](../interfaces/Router.IRouterState.md)\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:761

___

### forceUpdate

▸ **forceUpdate**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

React.Component.forceUpdate

#### Defined in

node_modules/@types/react/index.d.ts:497

___

### forward

▸ **forward**(): `void`

Go forward one step. This is an alias for [pushState(1)](Router.Router-1.md#go).

#### Returns

`void`

#### Defined in

[src/Router.tsx:243](https://github.com/breautek/router/blob/f2901ca/src/Router.tsx#L243)

___

### getHistoryLength

▸ **getHistoryLength**(): `number`

Gets the number of history entries. Note this does not count the browser history.
Only the history kept track during the life-cycle of the app.

#### Returns

`number`

#### Defined in

[src/Router.tsx:211](https://github.com/breautek/router/blob/f2901ca/src/Router.tsx#L211)

___

### getRouterStrategy

▸ **getRouterStrategy**(): [`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

Gets the current routing strategy

#### Returns

[`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Defined in

[src/Router.tsx:73](https://github.com/breautek/router/blob/f2901ca/src/Router.tsx#L73)

___

### getScrollRestoration

▸ **getScrollRestoration**(): `ScrollRestoration`

Gets the scroll restoration mode

#### Returns

`ScrollRestoration`

#### Defined in

[src/Router.tsx:218](https://github.com/breautek/router/blob/f2901ca/src/Router.tsx#L218)

___

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | `Readonly`<`TRouterProps`\> |
| `prevState` | `Readonly`<[`IRouterState`](../interfaces/Router.IRouterState.md)\> |

#### Returns

`any`

#### Inherited from

React.Component.getSnapshotBeforeUpdate

#### Defined in

node_modules/@types/react/index.d.ts:681

___

### go

▸ **go**(`to`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `number` | An integer, positive means go forward, negative means go backwards. E.g:              `1`  move forward one step              `-1` move backward one step              `0`  navigate to the current page (This is essentially a no-op) |

#### Returns

`void`

#### Defined in

[src/Router.tsx:229](https://github.com/breautek/router/blob/f2901ca/src/Router.tsx#L229)

___

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`IRouterState`](../interfaces/Router.IRouterState.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`IRouterState`](../interfaces/Router.IRouterState.md) \| (`prevState`: `Readonly`<[`IRouterState`](../interfaces/Router.IRouterState.md)\>, `props`: `Readonly`<`TRouterProps`\>) => [`IRouterState`](../interfaces/Router.IRouterState.md) \| `Pick`<[`IRouterState`](../interfaces/Router.IRouterState.md), `K`\> \| `Pick`<[`IRouterState`](../interfaces/Router.IRouterState.md), `K`\> |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

React.Component.setState

#### Defined in

node_modules/@types/react/index.d.ts:492

___

### shouldComponentUpdate

▸ `Optional` **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TRouterProps`\> |
| `nextState` | `Readonly`<[`IRouterState`](../interfaces/Router.IRouterState.md)\> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

React.Component.shouldComponentUpdate

#### Defined in

node_modules/@types/react/index.d.ts:635

___

### getInstance

▸ `Static` **getInstance**(): [`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Returns

[`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Defined in

[src/Router.tsx:62](https://github.com/breautek/router/blob/f2901ca/src/Router.tsx#L62)
