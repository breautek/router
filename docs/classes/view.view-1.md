[@breautek/router - v1.0.2](../README.md) / [Exports](../modules.md) / [View](../modules/view.md) / View

# Class: View<TPageProps\>

[View](../modules/view.md).View

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `TPageProps` | [*IViewProps*](../interfaces/view.iviewprops.md) | [*IViewProps*](../interfaces/view.iviewprops.md) |

## Hierarchy

- *Component*<TPageProps\>

  ↳ **View**

## Table of contents

### Constructors

- [constructor](view.view-1.md#constructor)

### Properties

- [context](view.view-1.md#context)
- [props](view.view-1.md#props)
- [refs](view.view-1.md#refs)
- [state](view.view-1.md#state)
- [contextType](view.view-1.md#contexttype)

### Methods

- [UNSAFE\_componentWillMount](view.view-1.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](view.view-1.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](view.view-1.md#unsafe_componentwillupdate)
- [\_renderView](view.view-1.md#_renderview)
- [componentDidCatch](view.view-1.md#componentdidcatch)
- [componentDidUpdate](view.view-1.md#componentdidupdate)
- [componentWillMount](view.view-1.md#componentwillmount)
- [componentWillReceiveProps](view.view-1.md#componentwillreceiveprops)
- [componentWillUpdate](view.view-1.md#componentwillupdate)
- [forceUpdate](view.view-1.md#forceupdate)
- [getCSSClass](view.view-1.md#getcssclass)
- [getNode](view.view-1.md#getnode)
- [getSnapshotBeforeUpdate](view.view-1.md#getsnapshotbeforeupdate)
- [getTitle](view.view-1.md#gettitle)
- [getViewStyles](view.view-1.md#getviewstyles)
- [getViewStylesheet](view.view-1.md#getviewstylesheet)
- [render](view.view-1.md#render)
- [setState](view.view-1.md#setstate)
- [shouldComponentUpdate](view.view-1.md#shouldcomponentupdate)

## Constructors

### constructor

\+ **new View**<TPageProps\>(`props`: TPageProps): [*View*](view.view-1.md)<TPageProps\>

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `TPageProps` | [*IViewProps*](../interfaces/view.iviewprops.md) | [*IViewProps*](../interfaces/view.iviewprops.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | TPageProps | See [IViewProps] |

**Returns:** [*View*](view.view-1.md)<TPageProps\>

Overrides: React.Component&lt;TPageProps\&gt;.constructor

Defined in: [src/View.tsx:21](https://github.com/breautek/router/blob/3a44627/src/View.tsx#L21)

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

Inherited from: React.Component.context

Defined in: node_modules/@types/react/index.d.ts:480

___

### props

• `Readonly` **props**: *Readonly*<TPageProps\> & *Readonly*<{ `children?`: ReactNode  }\>

Inherited from: React.Component.props

Defined in: node_modules/@types/react/index.d.ts:505

___

### refs

• **refs**: *object*

**`deprecated`**
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration

Inherited from: React.Component.refs

Defined in: node_modules/@types/react/index.d.ts:511

___

### state

• **state**: *Readonly*<{}\>

Inherited from: React.Component.state

Defined in: node_modules/@types/react/index.d.ts:506

___

### contextType

▪ `Static` `Optional` **contextType**: *Context*<any\>

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

Inherited from: React.Component.contextType

Defined in: node_modules/@types/react/index.d.ts:462

## Methods

### UNSAFE\_componentWillMount

▸ `Optional` **UNSAFE_componentWillMount**(): *void*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

Inherited from: React.Component.UNSAFE\_componentWillMount

Defined in: node_modules/@types/react/index.d.ts:716

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional` **UNSAFE_componentWillReceiveProps**(`nextProps`: *Readonly*<TPageProps\>, `nextContext`: *any*): *void*

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
| `nextProps` | *Readonly*<TPageProps\> |
| `nextContext` | *any* |

**Returns:** *void*

Inherited from: React.Component.UNSAFE\_componentWillReceiveProps

Defined in: node_modules/@types/react/index.d.ts:748

___

### UNSAFE\_componentWillUpdate

▸ `Optional` **UNSAFE_componentWillUpdate**(`nextProps`: *Readonly*<TPageProps\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

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
| `nextProps` | *Readonly*<TPageProps\> |
| `nextState` | *Readonly*<{}\> |
| `nextContext` | *any* |

**Returns:** *void*

Inherited from: React.Component.UNSAFE\_componentWillUpdate

Defined in: node_modules/@types/react/index.d.ts:776

___

### \_renderView

▸ `Protected` `Abstract` **_renderView**(): ReactNode

**Returns:** ReactNode

Defined in: [src/View.tsx:91](https://github.com/breautek/router/blob/3a44627/src/View.tsx#L91)

___

### componentDidCatch

▸ `Optional` **componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | Error |
| `errorInfo` | ErrorInfo |

**Returns:** *void*

Inherited from: React.Component.componentDidCatch

Defined in: node_modules/@types/react/index.d.ts:645

___

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`: *Readonly*<TPageProps\>, `prevState`: *Readonly*<{}\>, `snapshot?`: *any*): *void*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | *Readonly*<TPageProps\> |
| `prevState` | *Readonly*<{}\> |
| `snapshot?` | *any* |

**Returns:** *void*

Inherited from: React.Component.componentDidUpdate

Defined in: node_modules/@types/react/index.d.ts:687

___

### componentWillMount

▸ `Optional` **componentWillMount**(): *void*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

Inherited from: React.Component.componentWillMount

Defined in: node_modules/@types/react/index.d.ts:702

___

### componentWillReceiveProps

▸ `Optional` **componentWillReceiveProps**(`nextProps`: *Readonly*<TPageProps\>, `nextContext`: *any*): *void*

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
| `nextProps` | *Readonly*<TPageProps\> |
| `nextContext` | *any* |

**Returns:** *void*

Inherited from: React.Component.componentWillReceiveProps

Defined in: node_modules/@types/react/index.d.ts:731

___

### componentWillUpdate

▸ `Optional` **componentWillUpdate**(`nextProps`: *Readonly*<TPageProps\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

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
| `nextProps` | *Readonly*<TPageProps\> |
| `nextState` | *Readonly*<{}\> |
| `nextContext` | *any* |

**Returns:** *void*

Inherited from: React.Component.componentWillUpdate

Defined in: node_modules/@types/react/index.d.ts:761

___

### forceUpdate

▸ **forceUpdate**(`callback?`: () => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => *void* |

**Returns:** *void*

Inherited from: React.Component.forceUpdate

Defined in: node_modules/@types/react/index.d.ts:497

___

### getCSSClass

▸ **getCSSClass**(): *string*

Return the CSS class on this view

**Returns:** *string*

Defined in: [src/View.tsx:34](https://github.com/breautek/router/blob/3a44627/src/View.tsx#L34)

___

### getNode

▸ **getNode**(): HTMLElement

Gets the underlying HTML node for this View

**Returns:** HTMLElement

Defined in: [src/View.tsx:72](https://github.com/breautek/router/blob/3a44627/src/View.tsx#L72)

___

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`: *Readonly*<TPageProps\>, `prevState`: *Readonly*<{}\>): *any*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | *Readonly*<TPageProps\> |
| `prevState` | *Readonly*<{}\> |

**Returns:** *any*

Inherited from: React.Component.getSnapshotBeforeUpdate

Defined in: node_modules/@types/react/index.d.ts:681

___

### getTitle

▸ **getTitle**(): *Promise*<string\>

Get the title of this view

**Returns:** *Promise*<string\>

Defined in: [src/View.tsx:79](https://github.com/breautek/router/blob/3a44627/src/View.tsx#L79)

___

### getViewStyles

▸ **getViewStyles**(): *IDictionary*<string\>

Get the inline styles for this view.
Use React style notation.

**Returns:** *IDictionary*<string\>

Defined in: [src/View.tsx:87](https://github.com/breautek/router/blob/3a44627/src/View.tsx#L87)

___

### getViewStylesheet

▸ **getViewStylesheet**(): [*IViewStylesheet*](../interfaces/iviewstylesheet.iviewstylesheet-1.md)

Override to return a webpack API style stylesheet

**Returns:** [*IViewStylesheet*](../interfaces/iviewstylesheet.iviewstylesheet-1.md)

Defined in: [src/View.tsx:41](https://github.com/breautek/router/blob/3a44627/src/View.tsx#L41)

___

### render

▸ **render**(): ReactNode

**Returns:** ReactNode

Overrides: React.Component.render

Defined in: [src/View.tsx:93](https://github.com/breautek/router/blob/3a44627/src/View.tsx#L93)

___

### setState

▸ **setState**<K\>(`state`: {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<TPageProps\>) => {} \| *Pick*<{}, K\> \| *Pick*<{}, K\>, `callback?`: () => *void*): *void*

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | *never* |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<TPageProps\>) => {} \| *Pick*<{}, K\> \| *Pick*<{}, K\> |
| `callback?` | () => *void* |

**Returns:** *void*

Inherited from: React.Component.setState

Defined in: node_modules/@types/react/index.d.ts:492

___

### shouldComponentUpdate

▸ `Optional` **shouldComponentUpdate**(`nextProps`: *Readonly*<TPageProps\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *boolean*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | *Readonly*<TPageProps\> |
| `nextState` | *Readonly*<{}\> |
| `nextContext` | *any* |

**Returns:** *boolean*

Inherited from: React.Component.shouldComponentUpdate

Defined in: node_modules/@types/react/index.d.ts:635
