[@breautek/router - v1.0.0](../README.md) / [Exports](../modules.md) / [api](../modules/api.md) / Router

# Class: Router<TRouterProps\>

[api](../modules/api.md).Router

## Type parameters

Name | Type | Default |
:------ | :------ | :------ |
`TRouterProps` | [*IRouterProps*](../interfaces/router.irouterprops.md) | [*IRouterProps*](../interfaces/router.irouterprops.md) |

## Hierarchy

* *Component*<TRouterProps, [*IRouterState*](../interfaces/router.irouterstate.md)\>

  ↳ **Router**

## Table of contents

### Constructors

- [constructor](api.router.md#constructor)

### Properties

- [context](api.router.md#context)
- [props](api.router.md#props)
- [refs](api.router.md#refs)
- [state](api.router.md#state)
- [contextType](api.router.md#contexttype)

### Methods

- [UNSAFE\_componentWillMount](api.router.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillUpdate](api.router.md#unsafe_componentwillupdate)
- [back](api.router.md#back)
- [componentDidCatch](api.router.md#componentdidcatch)
- [componentDidMount](api.router.md#componentdidmount)
- [componentWillMount](api.router.md#componentwillmount)
- [componentWillReceiveProps](api.router.md#componentwillreceiveprops)
- [componentWillUpdate](api.router.md#componentwillupdate)
- [forceUpdate](api.router.md#forceupdate)
- [forward](api.router.md#forward)
- [getHistoryLength](api.router.md#gethistorylength)
- [getRouterStrategy](api.router.md#getrouterstrategy)
- [getScrollRestoration](api.router.md#getscrollrestoration)
- [getSnapshotBeforeUpdate](api.router.md#getsnapshotbeforeupdate)
- [go](api.router.md#go)
- [setState](api.router.md#setstate)
- [shouldComponentUpdate](api.router.md#shouldcomponentupdate)
- [getInstance](api.router.md#getinstance)

## Constructors

### constructor

\+ **new Router**<TRouterProps\>(`props`: TRouterProps): [*Router*](router.router-1.md)<TRouterProps\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TRouterProps` | [*IRouterProps*](../interfaces/router.irouterprops.md) | [*IRouterProps*](../interfaces/router.irouterprops.md) |

#### Parameters:

Name | Type |
:------ | :------ |
`props` | TRouterProps |

**Returns:** [*Router*](router.router-1.md)<TRouterProps\>

Defined in: [src/Router.tsx:35](https://github.com/breautek/router/blob/6c82bce/src/Router.tsx#L35)

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

Defined in: node_modules/@types/react/index.d.ts:480

___

### props

• `Readonly` **props**: *Readonly*<TRouterProps\> & *Readonly*<{ `children?`: ReactNode  }\>

Defined in: node_modules/@types/react/index.d.ts:505

___

### refs

• **refs**: *object*

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

Defined in: node_modules/@types/react/index.d.ts:511

___

### state

• **state**: [*IRouterState*](../interfaces/router.irouterstate.md)

Defined in: [src/Router.tsx:27](https://github.com/breautek/router/blob/6c82bce/src/Router.tsx#L27)

___

### contextType

▪ `Optional` `Static` **contextType**: *Context*<any\>

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

Defined in: node_modules/@types/react/index.d.ts:462

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

Defined in: node_modules/@types/react/index.d.ts:716

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: *Readonly*<TRouterProps\>, `nextState`: *Readonly*<[*IRouterState*](../interfaces/router.irouterstate.md)\>, `nextContext`: *any*): *void*

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
:------ | :------ |
`nextProps` | *Readonly*<TRouterProps\> |
`nextState` | *Readonly*<[*IRouterState*](../interfaces/router.irouterstate.md)\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:776

___

### back

▸ **back**(): *void*

Go back one step. This is an alias for [pushState(-1)](api.router.md#go).

**Returns:** *void*

Defined in: [src/Router.tsx:236](https://github.com/breautek/router/blob/6c82bce/src/Router.tsx#L236)

___

### componentDidCatch

▸ `Optional`**componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters:

Name | Type |
:------ | :------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:645

___

### componentDidMount

▸ **componentDidMount**(): *void*

**Returns:** *void*

Defined in: [src/Router.tsx:89](https://github.com/breautek/router/blob/6c82bce/src/Router.tsx#L89)

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

Defined in: node_modules/@types/react/index.d.ts:702

___

### componentWillReceiveProps

▸ `Optional`**componentWillReceiveProps**(`nextProps`: *Readonly*<TRouterProps\>, `nextContext`: *any*): *void*

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
:------ | :------ |
`nextProps` | *Readonly*<TRouterProps\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:731

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: *Readonly*<TRouterProps\>, `nextState`: *Readonly*<[*IRouterState*](../interfaces/router.irouterstate.md)\>, `nextContext`: *any*): *void*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<TRouterProps\> |
`nextState` | *Readonly*<[*IRouterState*](../interfaces/router.irouterstate.md)\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:761

___

### forceUpdate

▸ **forceUpdate**(`callback?`: () => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:497

___

### forward

▸ **forward**(): *void*

Go forward one step. This is an alias for [pushState(1)](api.router.md#go).

**Returns:** *void*

Defined in: [src/Router.tsx:243](https://github.com/breautek/router/blob/6c82bce/src/Router.tsx#L243)

___

### getHistoryLength

▸ **getHistoryLength**(): *number*

Gets the number of history entries. Note this does not count the browser history.
Only the history kept track during the life-cycle of the app.

**Returns:** *number*

Defined in: [src/Router.tsx:211](https://github.com/breautek/router/blob/6c82bce/src/Router.tsx#L211)

___

### getRouterStrategy

▸ **getRouterStrategy**(): [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

Gets the current routing strategy

**Returns:** [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

Defined in: [src/Router.tsx:73](https://github.com/breautek/router/blob/6c82bce/src/Router.tsx#L73)

___

### getScrollRestoration

▸ **getScrollRestoration**(): ScrollRestoration

Gets the scroll restoration mode

**Returns:** ScrollRestoration

Defined in: [src/Router.tsx:218](https://github.com/breautek/router/blob/6c82bce/src/Router.tsx#L218)

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: *Readonly*<TRouterProps\>, `prevState`: *Readonly*<[*IRouterState*](../interfaces/router.irouterstate.md)\>): *any*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<TRouterProps\> |
`prevState` | *Readonly*<[*IRouterState*](../interfaces/router.irouterstate.md)\> |

**Returns:** *any*

Defined in: node_modules/@types/react/index.d.ts:681

___

### go

▸ **go**(`to`: *number*): *void*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`to` | *number* | An integer, positive means go forward, negative means go backwards. E.g:              `1`  move forward one step              `-1` move backward one step              `0`  navigate to the current page (This is essentially a no-op)    |

**Returns:** *void*

Defined in: [src/Router.tsx:229](https://github.com/breautek/router/blob/6c82bce/src/Router.tsx#L229)

___

### setState

▸ **setState**<K\>(`state`: [*IRouterState*](../interfaces/router.irouterstate.md) \| (`prevState`: *Readonly*<[*IRouterState*](../interfaces/router.irouterstate.md)\>, `props`: *Readonly*<TRouterProps\>) => [*IRouterState*](../interfaces/router.irouterstate.md) \| *Pick*<[*IRouterState*](../interfaces/router.irouterstate.md), K\> \| *Pick*<[*IRouterState*](../interfaces/router.irouterstate.md), K\>, `callback?`: () => *void*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *url* \| *strategy* \| *shouldTransition* |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | [*IRouterState*](../interfaces/router.irouterstate.md) \| (`prevState`: *Readonly*<[*IRouterState*](../interfaces/router.irouterstate.md)\>, `props`: *Readonly*<TRouterProps\>) => [*IRouterState*](../interfaces/router.irouterstate.md) \| *Pick*<[*IRouterState*](../interfaces/router.irouterstate.md), K\> \| *Pick*<[*IRouterState*](../interfaces/router.irouterstate.md), K\> |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:492

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: *Readonly*<TRouterProps\>, `nextState`: *Readonly*<[*IRouterState*](../interfaces/router.irouterstate.md)\>, `nextContext`: *any*): *boolean*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<TRouterProps\> |
`nextState` | *Readonly*<[*IRouterState*](../interfaces/router.irouterstate.md)\> |
`nextContext` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/react/index.d.ts:635

___

### getInstance

▸ `Static`**getInstance**(): [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

**Returns:** [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

Defined in: [src/Router.tsx:62](https://github.com/breautek/router/blob/6c82bce/src/Router.tsx#L62)
