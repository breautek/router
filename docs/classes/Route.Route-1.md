[@breautek/router - v2.0.0](../README.md) / [Exports](../modules.md) / [Route](../modules/Route.md) / Route

# Class: Route<TComponentProps, TRouteProps, TRouteState\>

[Route](../modules/Route.md).Route

This class represents a route that renders a [View](../modules/View.md) component

## Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentProps` | extends [`IComponentProps`](../interfaces/Route.IComponentProps.md)[`IComponentProps`](../interfaces/Route.IComponentProps.md) |
| `TRouteProps` | extends [`IRouteProps`](../interfaces/Route.IRouteProps.md)<`TComponentProps`\>[`IRouteProps`](../interfaces/Route.IRouteProps.md)<`TComponentProps`\> |
| `TRouteState` | extends [`IRouteState`](../interfaces/Route.IRouteState.md)[`IRouteState`](../interfaces/Route.IRouteState.md) |

## Hierarchy

- `Component`<`TRouteProps`, `TRouteState`\>

  ↳ **`Route`**

## Table of contents

### Constructors

- [constructor](Route.Route-1.md#constructor)

### Properties

- [context](Route.Route-1.md#context)
- [props](Route.Route-1.md#props)
- [refs](Route.Route-1.md#refs)
- [state](Route.Route-1.md#state)
- [contextType](Route.Route-1.md#contexttype)

### Methods

- [UNSAFE\_componentWillMount](Route.Route-1.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](Route.Route-1.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](Route.Route-1.md#unsafe_componentwillupdate)
- [componentDidCatch](Route.Route-1.md#componentdidcatch)
- [componentDidMount](Route.Route-1.md#componentdidmount)
- [componentDidUpdate](Route.Route-1.md#componentdidupdate)
- [componentWillMount](Route.Route-1.md#componentwillmount)
- [componentWillReceiveProps](Route.Route-1.md#componentwillreceiveprops)
- [componentWillUnmount](Route.Route-1.md#componentwillunmount)
- [componentWillUpdate](Route.Route-1.md#componentwillupdate)
- [forceUpdate](Route.Route-1.md#forceupdate)
- [getSnapshotBeforeUpdate](Route.Route-1.md#getsnapshotbeforeupdate)
- [getView](Route.Route-1.md#getview)
- [render](Route.Route-1.md#render)
- [setState](Route.Route-1.md#setstate)
- [shouldComponentUpdate](Route.Route-1.md#shouldcomponentupdate)

## Constructors

### constructor

• **new Route**<`TComponentProps`, `TRouteProps`, `TRouteState`\>(`props`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentProps` | extends [`IComponentProps`](../interfaces/Route.IComponentProps.md)[`IComponentProps`](../interfaces/Route.IComponentProps.md) |
| `TRouteProps` | extends [`IRouteProps`](../interfaces/Route.IRouteProps.md)<`TComponentProps`, `TRouteProps`\>[`IRouteProps`](../interfaces/Route.IRouteProps.md)<`TComponentProps`\> |
| `TRouteState` | extends [`IRouteState`](../interfaces/Route.IRouteState.md)[`IRouteState`](../interfaces/Route.IRouteState.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `TRouteProps` |

#### Overrides

React.Component&lt;TRouteProps, TRouteState\&gt;.constructor

#### Defined in

[src/Route.tsx:41](https://github.com/breautek/router/blob/04bdd49/src/Route.tsx#L41)

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

• `Readonly` **props**: `Readonly`<`TRouteProps`\> & `Readonly`<`Object`\>

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

• **state**: `Readonly`<`TRouteState`\>

#### Inherited from

React.Component.state

#### Defined in

node_modules/@types/react/index.d.ts:506

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

### UNSAFE\_componentWillReceiveProps

▸ `Optional` **UNSAFE_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TRouteProps`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE\_componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:748

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
| `nextProps` | `Readonly`<`TRouteProps`\> |
| `nextState` | `Readonly`<`TRouteState`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE\_componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:776

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

▸ `Optional` **componentDidMount**(): `void`

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

#### Inherited from

React.Component.componentDidMount

#### Defined in

node_modules/@types/react/index.d.ts:624

___

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | `Readonly`<`TRouteProps`\> |
| `prevState` | `Readonly`<`TRouteState`\> |
| `snapshot?` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.componentDidUpdate

#### Defined in

node_modules/@types/react/index.d.ts:687

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
| `nextProps` | `Readonly`<`TRouteProps`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:731

___

### componentWillUnmount

▸ `Optional` **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

React.Component.componentWillUnmount

#### Defined in

node_modules/@types/react/index.d.ts:640

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
| `nextProps` | `Readonly`<`TRouteProps`\> |
| `nextState` | `Readonly`<`TRouteState`\> |
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
| `prevProps` | `Readonly`<`TRouteProps`\> |
| `prevState` | `Readonly`<`TRouteState`\> |

#### Returns

`any`

#### Inherited from

React.Component.getSnapshotBeforeUpdate

#### Defined in

node_modules/@types/react/index.d.ts:681

___

### getView

▸ **getView**(): [`View`](View.View-1.md)<[`IViewProps`](../interfaces/View.IViewProps.md)\>

#### Returns

[`View`](View.View-1.md)<[`IViewProps`](../interfaces/View.IViewProps.md)\>

#### Defined in

[src/Route.tsx:50](https://github.com/breautek/router/blob/04bdd49/src/Route.tsx#L50)

___

### render

▸ **render**(): `ReactNode`

#### Returns

`ReactNode`

#### Overrides

React.Component.render

#### Defined in

[src/Route.tsx:46](https://github.com/breautek/router/blob/04bdd49/src/Route.tsx#L46)

___

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `TRouteState` \| (`prevState`: `Readonly`<`TRouteState`\>, `props`: `Readonly`<`TRouteProps`\>) => `TRouteState` \| `Pick`<`TRouteState`, `K`\> \| `Pick`<`TRouteState`, `K`\> |
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
| `nextProps` | `Readonly`<`TRouteProps`\> |
| `nextState` | `Readonly`<`TRouteState`\> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

React.Component.shouldComponentUpdate

#### Defined in

node_modules/@types/react/index.d.ts:635
