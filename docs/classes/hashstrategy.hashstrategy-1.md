[@breautek/router - v1.0.0](../README.md) / [Exports](../modules.md) / [HashStrategy](../modules/hashstrategy.md) / HashStrategy

# Class: HashStrategy

[HashStrategy](../modules/hashstrategy.md).HashStrategy

A [RouterStrategy](../modules/routerstrategy.md) that manages a history stack using inline pound symbols `#`.
URLs will have a starting point `/#/`, as a default base.

For example, if you [pushState("mylink")](hashstrategy.hashstrategy-1.md#pushstate), the url
`/#/mylink` will be produced.

## Hierarchy

* [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

  ↳ **HashStrategy**

## Table of contents

### Constructors

- [constructor](hashstrategy.hashstrategy-1.md#constructor)

### Properties

- [defaultMaxListeners](hashstrategy.hashstrategy-1.md#defaultmaxlisteners)

### Methods

- [\_fireURLChange](hashstrategy.hashstrategy-1.md#_fireurlchange)
- [addListener](hashstrategy.hashstrategy-1.md#addlistener)
- [addURLChangeCallback](hashstrategy.hashstrategy-1.md#addurlchangecallback)
- [back](hashstrategy.hashstrategy-1.md#back)
- [canBack](hashstrategy.hashstrategy-1.md#canback)
- [canForward](hashstrategy.hashstrategy-1.md#canforward)
- [canGo](hashstrategy.hashstrategy-1.md#cango)
- [clear](hashstrategy.hashstrategy-1.md#clear)
- [emit](hashstrategy.hashstrategy-1.md#emit)
- [eventNames](hashstrategy.hashstrategy-1.md#eventnames)
- [forward](hashstrategy.hashstrategy-1.md#forward)
- [getHistoryLength](hashstrategy.hashstrategy-1.md#gethistorylength)
- [getLocation](hashstrategy.hashstrategy-1.md#getlocation)
- [getLocationAt](hashstrategy.hashstrategy-1.md#getlocationat)
- [getMaxListeners](hashstrategy.hashstrategy-1.md#getmaxlisteners)
- [getRouter](hashstrategy.hashstrategy-1.md#getrouter)
- [getScrollRestoration](hashstrategy.hashstrategy-1.md#getscrollrestoration)
- [go](hashstrategy.hashstrategy-1.md#go)
- [listenerCount](hashstrategy.hashstrategy-1.md#listenercount)
- [listeners](hashstrategy.hashstrategy-1.md#listeners)
- [off](hashstrategy.hashstrategy-1.md#off)
- [on](hashstrategy.hashstrategy-1.md#on)
- [once](hashstrategy.hashstrategy-1.md#once)
- [peek](hashstrategy.hashstrategy-1.md#peek)
- [peekBack](hashstrategy.hashstrategy-1.md#peekback)
- [peekForward](hashstrategy.hashstrategy-1.md#peekforward)
- [prependListener](hashstrategy.hashstrategy-1.md#prependlistener)
- [prependOnceListener](hashstrategy.hashstrategy-1.md#prependoncelistener)
- [pushState](hashstrategy.hashstrategy-1.md#pushstate)
- [rawListeners](hashstrategy.hashstrategy-1.md#rawlisteners)
- [removeAllListeners](hashstrategy.hashstrategy-1.md#removealllisteners)
- [removeListener](hashstrategy.hashstrategy-1.md#removelistener)
- [removeURLChangeCallback](hashstrategy.hashstrategy-1.md#removeurlchangecallback)
- [replaceState](hashstrategy.hashstrategy-1.md#replacestate)
- [setMaxListeners](hashstrategy.hashstrategy-1.md#setmaxlisteners)
- [setTitle](hashstrategy.hashstrategy-1.md#settitle)
- [listenerCount](hashstrategy.hashstrategy-1.md#listenercount)

## Constructors

### constructor

\+ **new HashStrategy**(`router`: [*Router*](router.router-1.md)<[*IRouterProps*](../interfaces/router.irouterprops.md)\>): [*HashStrategy*](hashstrategy.hashstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`router` | [*Router*](router.router-1.md)<[*IRouterProps*](../interfaces/router.irouterprops.md)\> |

**Returns:** [*HashStrategy*](hashstrategy.hashstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/HashStrategy.ts:16](https://github.com/breautek/router/blob/6c82bce/src/HashStrategy.ts#L16)

## Properties

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md).[defaultMaxListeners](routerstrategy.routerstrategy-1.md#defaultmaxlisteners)

Defined in: node_modules/@types/node/events.d.ts:18

## Methods

### \_fireURLChange

▸ `Protected`**_fireURLChange**(`url`: *string*): *void*

Fires the [EVENT_URL_CHANGE](../modules/routerstrategy.md#event_url_change) event

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |

**Returns:** *void*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:175](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L175)

___

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*HashStrategy*](hashstrategy.hashstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*HashStrategy*](hashstrategy.hashstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:20

___

### addURLChangeCallback

▸ **addURLChangeCallback**(`callback`: [*URLChangeCallback*](../modules/routerstrategy.md#urlchangecallback)): *void*

Listen for URL change events

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | [*URLChangeCallback*](../modules/routerstrategy.md#urlchangecallback) |

**Returns:** *void*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:49](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L49)

___

### back

▸ **back**(): *void*

Navigate the history back one entry. This is an alias for [go(-1)](hashstrategy.hashstrategy-1.md#go)

**Returns:** *void*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:103](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L103)

___

### canBack

▸ **canBack**(): *boolean*

Returns true if can go back 1 entry.
This is the same as calling [canGo(-1)](hashstrategy.hashstrategy-1.md#cango)

**Returns:** *boolean*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:117](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L117)

___

### canForward

▸ **canForward**(): *boolean*

Returns true if can go forward 1 entry.
This is the same as calling [canGo(1)](hashstrategy.hashstrategy-1.md#cango)

**Returns:** *boolean*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:125](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L125)

___

### canGo

▸ **canGo**(`to`: *number*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`to` | *number* |

**Returns:** *boolean*

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/HashStrategy.ts:55](https://github.com/breautek/router/blob/6c82bce/src/HashStrategy.ts#L55)

___

### clear

▸ **clear**(): *void*

**Returns:** *void*

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/HashStrategy.ts:107](https://github.com/breautek/router/blob/6c82bce/src/HashStrategy.ts#L107)

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:32

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:33

___

### forward

▸ **forward**(): *void*

navigate the history forward one entry. This is an alias for [go(1)](hashstrategy.hashstrategy-1.md#go)

**Returns:** *void*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:96](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L96)

___

### getHistoryLength

▸ **getHistoryLength**(): *number*

**Returns:** *number*

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/HashStrategy.ts:47](https://github.com/breautek/router/blob/6c82bce/src/HashStrategy.ts#L47)

___

### getLocation

▸ **getLocation**(): *string*

**Returns:** *string*

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/HashStrategy.ts:39](https://github.com/breautek/router/blob/6c82bce/src/HashStrategy.ts#L39)

___

### getLocationAt

▸ **getLocationAt**(`position`: *number*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`position` | *number* |

**Returns:** *string*

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/HashStrategy.ts:43](https://github.com/breautek/router/blob/6c82bce/src/HashStrategy.ts#L43)

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:29

___

### getRouter

▸ **getRouter**(): [*Router*](router.router-1.md)<[*IRouterProps*](../interfaces/router.irouterprops.md)\>

Gets the router

**Returns:** [*Router*](router.router-1.md)<[*IRouterProps*](../interfaces/router.irouterprops.md)\>

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:20](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L20)

___

### getScrollRestoration

▸ **getScrollRestoration**(): ScrollRestoration

**Returns:** ScrollRestoration

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/HashStrategy.ts:51](https://github.com/breautek/router/blob/6c82bce/src/HashStrategy.ts#L51)

___

### go

▸ **go**(`to`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`to` | *number* |

**Returns:** *void*

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/HashStrategy.ts:63](https://github.com/breautek/router/blob/6c82bce/src/HashStrategy.ts#L63)

___

### listenerCount

▸ **listenerCount**(`type`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* \| *symbol* |

**Returns:** *number*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:34

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:30

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*HashStrategy*](hashstrategy.hashstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*HashStrategy*](hashstrategy.hashstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:26

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*HashStrategy*](hashstrategy.hashstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*HashStrategy*](hashstrategy.hashstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:21

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*HashStrategy*](hashstrategy.hashstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*HashStrategy*](hashstrategy.hashstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:22

___

### peek

▸ **peek**(`to`: *number*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`to` | *number* |

**Returns:** *string*

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/HashStrategy.ts:59](https://github.com/breautek/router/blob/6c82bce/src/HashStrategy.ts#L59)

___

### peekBack

▸ **peekBack**(): *string*

Returns the URL one entry back.
This is the same as calling [peek(-1)](hashstrategy.hashstrategy-1.md#peek)

**Returns:** *string*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:147](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L147)

___

### peekForward

▸ **peekForward**(): *string*

Returns the URL one entry forward.
This is the same as calling [peek(1)](hashstrategy.hashstrategy-1.md#peek)

**Returns:** *string*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:139](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L139)

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*HashStrategy*](hashstrategy.hashstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*HashStrategy*](hashstrategy.hashstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:23

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*HashStrategy*](hashstrategy.hashstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*HashStrategy*](hashstrategy.hashstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:24

___

### pushState

▸ **pushState**(`url`: *string*, `state?`: *IDictionary*<any\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`state?` | *IDictionary*<any\> |

**Returns:** *void*

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/HashStrategy.ts:74](https://github.com/breautek/router/blob/6c82bce/src/HashStrategy.ts#L74)

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:31

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*HashStrategy*](hashstrategy.hashstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*HashStrategy*](hashstrategy.hashstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:27

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*HashStrategy*](hashstrategy.hashstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*HashStrategy*](hashstrategy.hashstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:25

___

### removeURLChangeCallback

▸ **removeURLChangeCallback**(`callback`: [*URLChangeCallback*](../modules/routerstrategy.md#urlchangecallback)): *void*

Removes an existing listener

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | [*URLChangeCallback*](../modules/routerstrategy.md#urlchangecallback) |

**Returns:** *void*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:58](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L58)

___

### replaceState

▸ **replaceState**(`url`: *string*, `state?`: *IDictionary*<any\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`state?` | *IDictionary*<any\> |

**Returns:** *void*

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/HashStrategy.ts:92](https://github.com/breautek/router/blob/6c82bce/src/HashStrategy.ts#L92)

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*HashStrategy*](hashstrategy.hashstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*HashStrategy*](hashstrategy.hashstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:28

___

### setTitle

▸ **setTitle**(`title`: *string*): *void*

Sets the browser title

#### Parameters:

Name | Type |
:------ | :------ |
`title` | *string* |

**Returns:** *void*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:29](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L29)

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:17
