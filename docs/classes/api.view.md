[@breautek/router - v1.0.0](../README.md) / [Exports](../modules.md) / [api](../modules/api.md) / View

# Class: View<TPageProps\>

## Type parameters

Name | Type | Default |
------ | ------ | ------ |
`TPageProps` | [*IViewProps*](../interfaces/view.iviewprops.md) | [*IViewProps*](../interfaces/view.iviewprops.md) |

## Hierarchy

* *Component*<TPageProps\>

  ↳ **View**

## Index

### Constructors

* [constructor](api.view.md#constructor)

### Properties

* [context](api.view.md#context)
* [props](api.view.md#props)
* [refs](api.view.md#refs)
* [state](api.view.md#state)
* [contextType](api.view.md#contexttype)

### Methods

* [UNSAFE\_componentWillMount](api.view.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](api.view.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](api.view.md#unsafe_componentwillupdate)
* [\_renderView](api.view.md#_renderview)
* [componentDidCatch](api.view.md#componentdidcatch)
* [componentDidUpdate](api.view.md#componentdidupdate)
* [componentWillMount](api.view.md#componentwillmount)
* [componentWillReceiveProps](api.view.md#componentwillreceiveprops)
* [componentWillUpdate](api.view.md#componentwillupdate)
* [forceUpdate](api.view.md#forceupdate)
* [getCSSClass](api.view.md#getcssclass)
* [getNode](api.view.md#getnode)
* [getSnapshotBeforeUpdate](api.view.md#getsnapshotbeforeupdate)
* [getTitle](api.view.md#gettitle)
* [getViewStyles](api.view.md#getviewstyles)
* [getViewStylesheet](api.view.md#getviewstylesheet)
* [render](api.view.md#render)
* [setState](api.view.md#setstate)
* [shouldComponentUpdate](api.view.md#shouldcomponentupdate)

## Constructors

### constructor

\+ **new View**<TPageProps\>(`props`: TPageProps): [*View*](view.view-1.md)<TPageProps\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`TPageProps` | [*IViewProps*](../interfaces/view.iviewprops.md) | [*IViewProps*](../interfaces/view.iviewprops.md) |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`props` | TPageProps | See [IViewProps]    |

**Returns:** [*View*](view.view-1.md)<TPageProps\>

Defined in: [src/View.tsx:21](https://github.com/breautek/router/blob/d7a4785/src/View.tsx#L21)

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: *Readonly*<TPageProps\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<TPageProps\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:744

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: *Readonly*<TPageProps\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<TPageProps\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:772

___

### \_renderView

▸ `Protected` `Abstract`**_renderView**(): ReactNode

**Returns:** ReactNode

Defined in: [src/View.tsx:91](https://github.com/breautek/router/blob/d7a4785/src/View.tsx#L91)

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

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: *Readonly*<TPageProps\>, `prevState`: *Readonly*<{}\>, `snapshot?`: *any*): *void*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | *Readonly*<TPageProps\> |
`prevState` | *Readonly*<{}\> |
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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: *Readonly*<TPageProps\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<TPageProps\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:727

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: *Readonly*<TPageProps\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

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
`nextProps` | *Readonly*<TPageProps\> |
`nextState` | *Readonly*<{}\> |
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

### getCSSClass

▸ **getCSSClass**(): *string*

Return the CSS class on this view

**Returns:** *string*

Defined in: [src/View.tsx:34](https://github.com/breautek/router/blob/d7a4785/src/View.tsx#L34)

___

### getNode

▸ **getNode**(): HTMLElement

Gets the underlying HTML node for this View

**Returns:** HTMLElement

Defined in: [src/View.tsx:72](https://github.com/breautek/router/blob/d7a4785/src/View.tsx#L72)

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: *Readonly*<TPageProps\>, `prevState`: *Readonly*<{}\>): *any*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | *Readonly*<TPageProps\> |
`prevState` | *Readonly*<{}\> |

**Returns:** *any*

Defined in: node_modules/@types/react/index.d.ts:677

___

### getTitle

▸ **getTitle**(): *Promise*<*string*\>

Get the title of this view

**Returns:** *Promise*<*string*\>

Defined in: [src/View.tsx:79](https://github.com/breautek/router/blob/d7a4785/src/View.tsx#L79)

___

### getViewStyles

▸ **getViewStyles**(): *IDictionary*<*string*\>

Get the inline styles for this view.
Use React style notation.

**Returns:** *IDictionary*<*string*\>

Defined in: [src/View.tsx:87](https://github.com/breautek/router/blob/d7a4785/src/View.tsx#L87)

___

### getViewStylesheet

▸ **getViewStylesheet**(): [*IViewStylesheet*](../interfaces/iviewstylesheet.iviewstylesheet-1.md)

Override to return a webpack API style stylesheet

**Returns:** [*IViewStylesheet*](../interfaces/iviewstylesheet.iviewstylesheet-1.md)

Defined in: [src/View.tsx:41](https://github.com/breautek/router/blob/d7a4785/src/View.tsx#L41)

___

### render

▸ **render**(): ReactNode

**Returns:** ReactNode

Defined in: [src/View.tsx:93](https://github.com/breautek/router/blob/d7a4785/src/View.tsx#L93)

___

### setState

▸ **setState**<K\>(`state`: {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<TPageProps\>) => {} \| *Pick*<{}, K\> \| *Pick*<{}, K\>, `callback?`: () => *void*): *void*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | *never* |

#### Parameters:

Name | Type |
------ | ------ |
`state` | {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<TPageProps\>) => {} \| *Pick*<{}, K\> \| *Pick*<{}, K\> |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:488

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: *Readonly*<TPageProps\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *boolean*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | *Readonly*<TPageProps\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/react/index.d.ts:631
