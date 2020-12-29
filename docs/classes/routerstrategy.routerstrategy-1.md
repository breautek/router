[@breautek/router - v1.0.0](../README.md) / [Exports](../modules.md) / [RouterStrategy](../modules/routerstrategy.md) / RouterStrategy

# Class: RouterStrategy

## Hierarchy

* *EventEmitter*

  ↳ **RouterStrategy**

  ↳↳ [*HashStrategy*](hashstrategy.hashstrategy-1.md)

  ↳↳ [*URLStrategy*](urlstrategy.urlstrategy-1.md)

  ↳↳ [*HashStrategy*](api.hashstrategy.md)

  ↳↳ [*URLStrategy*](api.urlstrategy.md)

## Index

### Constructors

* [constructor](routerstrategy.routerstrategy-1.md#constructor)

### Properties

* [defaultMaxListeners](routerstrategy.routerstrategy-1.md#defaultmaxlisteners)

### Methods

* [\_fireURLChange](routerstrategy.routerstrategy-1.md#_fireurlchange)
* [addListener](routerstrategy.routerstrategy-1.md#addlistener)
* [addURLChangeCallback](routerstrategy.routerstrategy-1.md#addurlchangecallback)
* [back](routerstrategy.routerstrategy-1.md#back)
* [canBack](routerstrategy.routerstrategy-1.md#canback)
* [canForward](routerstrategy.routerstrategy-1.md#canforward)
* [canGo](routerstrategy.routerstrategy-1.md#cango)
* [clear](routerstrategy.routerstrategy-1.md#clear)
* [emit](routerstrategy.routerstrategy-1.md#emit)
* [eventNames](routerstrategy.routerstrategy-1.md#eventnames)
* [forward](routerstrategy.routerstrategy-1.md#forward)
* [getHistoryLength](routerstrategy.routerstrategy-1.md#gethistorylength)
* [getLocation](routerstrategy.routerstrategy-1.md#getlocation)
* [getLocationAt](routerstrategy.routerstrategy-1.md#getlocationat)
* [getMaxListeners](routerstrategy.routerstrategy-1.md#getmaxlisteners)
* [getRouter](routerstrategy.routerstrategy-1.md#getrouter)
* [getScrollRestoration](routerstrategy.routerstrategy-1.md#getscrollrestoration)
* [go](routerstrategy.routerstrategy-1.md#go)
* [listenerCount](routerstrategy.routerstrategy-1.md#listenercount)
* [listeners](routerstrategy.routerstrategy-1.md#listeners)
* [off](routerstrategy.routerstrategy-1.md#off)
* [on](routerstrategy.routerstrategy-1.md#on)
* [once](routerstrategy.routerstrategy-1.md#once)
* [peek](routerstrategy.routerstrategy-1.md#peek)
* [peekBack](routerstrategy.routerstrategy-1.md#peekback)
* [peekForward](routerstrategy.routerstrategy-1.md#peekforward)
* [prependListener](routerstrategy.routerstrategy-1.md#prependlistener)
* [prependOnceListener](routerstrategy.routerstrategy-1.md#prependoncelistener)
* [pushState](routerstrategy.routerstrategy-1.md#pushstate)
* [rawListeners](routerstrategy.routerstrategy-1.md#rawlisteners)
* [removeAllListeners](routerstrategy.routerstrategy-1.md#removealllisteners)
* [removeListener](routerstrategy.routerstrategy-1.md#removelistener)
* [removeURLChangeCallback](routerstrategy.routerstrategy-1.md#removeurlchangecallback)
* [replaceState](routerstrategy.routerstrategy-1.md#replacestate)
* [setMaxListeners](routerstrategy.routerstrategy-1.md#setmaxlisteners)
* [setTitle](routerstrategy.routerstrategy-1.md#settitle)
* [listenerCount](routerstrategy.routerstrategy-1.md#listenercount)

## Constructors

### constructor

\+ **new RouterStrategy**(`router`: [*Router*](router.router-1.md)<[*IRouterProps*](../interfaces/router.irouterprops.md)\>): [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`router` | [*Router*](router.router-1.md)<[*IRouterProps*](../interfaces/router.irouterprops.md)\> |

**Returns:** [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:10](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L10)

## Properties

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:18

## Methods

### \_fireURLChange

▸ `Protected`**_fireURLChange**(`url`: *string*): *void*

Fires the [EVENT_URL_CHANGE](../modules/routerstrategy.md#event_url_change) event

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`url` | *string* |     |

**Returns:** *void*

Defined in: [src/RouterStrategy.ts:175](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L175)

___

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:20

___

### addURLChangeCallback

▸ **addURLChangeCallback**(`callback`: [*URLChangeCallback*](../modules/routerstrategy.md#urlchangecallback)): *void*

Listen for URL change events

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`callback` | [*URLChangeCallback*](../modules/routerstrategy.md#urlchangecallback) |     |

**Returns:** *void*

Defined in: [src/RouterStrategy.ts:49](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L49)

___

### back

▸ **back**(): *void*

Navigate the history back one entry. This is an alias for [go(-1)](routerstrategy.routerstrategy-1.md#go)

**Returns:** *void*

Defined in: [src/RouterStrategy.ts:103](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L103)

___

### canBack

▸ **canBack**(): *boolean*

Returns true if can go back 1 entry.
This is the same as calling [canGo(-1)](routerstrategy.routerstrategy-1.md#cango)

**Returns:** *boolean*

Defined in: [src/RouterStrategy.ts:117](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L117)

___

### canForward

▸ **canForward**(): *boolean*

Returns true if can go forward 1 entry.
This is the same as calling [canGo(1)](routerstrategy.routerstrategy-1.md#cango)

**Returns:** *boolean*

Defined in: [src/RouterStrategy.ts:125](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L125)

___

### canGo

▸ `Abstract`**canGo**(`to`: *number*): *boolean*

Returns true, if can be navigated to the given relative index

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`to` | *number* | Must be an integer    |

**Returns:** *boolean*

Defined in: [src/RouterStrategy.ts:111](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L111)

___

### clear

▸ `Abstract`**clear**(): *void*

Clears the history stack.

**Returns:** *void*

Defined in: [src/RouterStrategy.ts:169](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L169)

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/@types/node/events.d.ts:32

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:33

___

### forward

▸ **forward**(): *void*

navigate the history forward one entry. This is an alias for [go(1)](routerstrategy.routerstrategy-1.md#go)

**Returns:** *void*

Defined in: [src/RouterStrategy.ts:96](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L96)

___

### getHistoryLength

▸ `Abstract`**getHistoryLength**(): *number*

Gets the size of the history stack

**Returns:** *number*

Defined in: [src/RouterStrategy.ts:77](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L77)

___

### getLocation

▸ `Abstract`**getLocation**(): *string*

Gets the current location.
This is the same as calling [peek(0)](routerstrategy.routerstrategy-1.md#peek)

**Returns:** *string*

Defined in: [src/RouterStrategy.ts:72](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L72)

___

### getLocationAt

▸ `Abstract`**getLocationAt**(`position`: *number*): *string*

Gets the URL at the given index in the history stack

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`position` | *number* | index    |

**Returns:** *string*

Defined in: [src/RouterStrategy.ts:66](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L66)

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:29

___

### getRouter

▸ **getRouter**(): [*Router*](router.router-1.md)<[*IRouterProps*](../interfaces/router.irouterprops.md)\>

Gets the router

**Returns:** [*Router*](router.router-1.md)<[*IRouterProps*](../interfaces/router.irouterprops.md)\>

Defined in: [src/RouterStrategy.ts:20](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L20)

___

### getScrollRestoration

▸ `Abstract`**getScrollRestoration**(): ScrollRestoration

Gets the scroll restoration

**Returns:** ScrollRestoration

Defined in: [src/RouterStrategy.ts:82](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L82)

___

### go

▸ `Abstract`**go**(`to`: *number*): *void*

Navigates the history

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`to` | *number* | Must be an integer. Negative numbers go back, if possible. Positive goes forward, if possible. Zero does nothing.    |

**Returns:** *void*

Defined in: [src/RouterStrategy.ts:91](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L91)

___

### listenerCount

▸ **listenerCount**(`type`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
------ | ------ |
`type` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:34

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:30

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:26

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:21

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:22

___

### peek

▸ `Abstract`**peek**(`to`: *number*): *string*

Returns the URL stored in the history stack at the given relative index.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`to` | *number* | Must be an integer    |

**Returns:** *string*

Defined in: [src/RouterStrategy.ts:133](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L133)

___

### peekBack

▸ **peekBack**(): *string*

Returns the URL one entry back.
This is the same as calling [peek(-1)](routerstrategy.routerstrategy-1.md#peek)

**Returns:** *string*

Defined in: [src/RouterStrategy.ts:147](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L147)

___

### peekForward

▸ **peekForward**(): *string*

Returns the URL one entry forward.
This is the same as calling [peek(1)](routerstrategy.routerstrategy-1.md#peek)

**Returns:** *string*

Defined in: [src/RouterStrategy.ts:139](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L139)

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:23

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:24

___

### pushState

▸ `Abstract`**pushState**(`url`: *string*, `state?`: *IDictionary*<*any*\>): *void*

Pushes a new entry into the history stack, navigating to the new location.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`url` | *string* |  |
`state?` | *IDictionary*<*any*\> |     |

**Returns:** *void*

Defined in: [src/RouterStrategy.ts:156](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L156)

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:31

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event?` | *string* \| *symbol* |

**Returns:** [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:27

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:25

___

### removeURLChangeCallback

▸ **removeURLChangeCallback**(`callback`: [*URLChangeCallback*](../modules/routerstrategy.md#urlchangecallback)): *void*

Removes an existing listener

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`callback` | [*URLChangeCallback*](../modules/routerstrategy.md#urlchangecallback) |     |

**Returns:** *void*

Defined in: [src/RouterStrategy.ts:58](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L58)

___

### replaceState

▸ `Abstract`**replaceState**(`url`: *string*, `state?`: *IDictionary*<*any*\>): *void*

Replaces the current entry in the history stack with the new location.
This will navigate the screen to the new location.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`url` | *string* |  |
`state?` | *IDictionary*<*any*\> |     |

**Returns:** *void*

Defined in: [src/RouterStrategy.ts:164](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L164)

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:28

___

### setTitle

▸ **setTitle**(`title`: *string*): *void*

Sets the browser title

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`title` | *string* |     |

**Returns:** *void*

Defined in: [src/RouterStrategy.ts:29](https://github.com/breautek/router/blob/d7a4785/src/RouterStrategy.ts#L29)

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:17
