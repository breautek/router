[@breautek/router - v1.0.0](../README.md) / [Exports](../modules.md) / [api](../modules/api.md) / URLStrategy

# Class: URLStrategy

[api](../modules/api.md).URLStrategy

**`notice`** Using the URLStrategy requires some backend configuration
to route URLs back to application.

To make this easier, by default these URLs are prefixed with
`/r/` to easily differentiate between URLs that needs to be re-routed back
to the application vs other resources such as images.

## Hierarchy

* [*RouterStrategy*](routerstrategy.routerstrategy-1.md)

  ↳ **URLStrategy**

## Table of contents

### Constructors

- [constructor](api.urlstrategy.md#constructor)

### Properties

- [defaultMaxListeners](api.urlstrategy.md#defaultmaxlisteners)

### Methods

- [\_fireURLChange](api.urlstrategy.md#_fireurlchange)
- [addListener](api.urlstrategy.md#addlistener)
- [addURLChangeCallback](api.urlstrategy.md#addurlchangecallback)
- [back](api.urlstrategy.md#back)
- [canBack](api.urlstrategy.md#canback)
- [canForward](api.urlstrategy.md#canforward)
- [canGo](api.urlstrategy.md#cango)
- [clear](api.urlstrategy.md#clear)
- [emit](api.urlstrategy.md#emit)
- [eventNames](api.urlstrategy.md#eventnames)
- [forward](api.urlstrategy.md#forward)
- [getHistoryLength](api.urlstrategy.md#gethistorylength)
- [getLocation](api.urlstrategy.md#getlocation)
- [getLocationAt](api.urlstrategy.md#getlocationat)
- [getMaxListeners](api.urlstrategy.md#getmaxlisteners)
- [getRouter](api.urlstrategy.md#getrouter)
- [getScrollRestoration](api.urlstrategy.md#getscrollrestoration)
- [go](api.urlstrategy.md#go)
- [listenerCount](api.urlstrategy.md#listenercount)
- [listeners](api.urlstrategy.md#listeners)
- [off](api.urlstrategy.md#off)
- [on](api.urlstrategy.md#on)
- [once](api.urlstrategy.md#once)
- [peek](api.urlstrategy.md#peek)
- [peekBack](api.urlstrategy.md#peekback)
- [peekForward](api.urlstrategy.md#peekforward)
- [prependListener](api.urlstrategy.md#prependlistener)
- [prependOnceListener](api.urlstrategy.md#prependoncelistener)
- [pushState](api.urlstrategy.md#pushstate)
- [rawListeners](api.urlstrategy.md#rawlisteners)
- [removeAllListeners](api.urlstrategy.md#removealllisteners)
- [removeListener](api.urlstrategy.md#removelistener)
- [removeURLChangeCallback](api.urlstrategy.md#removeurlchangecallback)
- [replaceState](api.urlstrategy.md#replacestate)
- [setMaxListeners](api.urlstrategy.md#setmaxlisteners)
- [setTitle](api.urlstrategy.md#settitle)
- [listenerCount](api.urlstrategy.md#listenercount)

## Constructors

### constructor

\+ **new URLStrategy**(`router`: [*Router*](router.router-1.md)<[*IRouterProps*](../interfaces/router.irouterprops.md)\>): [*URLStrategy*](urlstrategy.urlstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`router` | [*Router*](router.router-1.md)<[*IRouterProps*](../interfaces/router.irouterprops.md)\> |

**Returns:** [*URLStrategy*](urlstrategy.urlstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/URLStrategy.ts:17](https://github.com/breautek/router/blob/6c82bce/src/URLStrategy.ts#L17)

## Properties

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md).[defaultMaxListeners](routerstrategy.routerstrategy-1.md#defaultmaxlisteners)

Defined in: node_modules/@types/node/events.d.ts:18

## Methods

### \_fireURLChange

▸ `Protected`**_fireURLChange**(`url`: *string*): *void*

Fires the [EVENT_URL_CHANGE](../modules/api.md#event_url_change) event

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |

**Returns:** *void*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:175](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L175)

___

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*URLStrategy*](urlstrategy.urlstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*URLStrategy*](urlstrategy.urlstrategy-1.md)

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

Navigate the history back one entry. This is an alias for [go(-1)](api.urlstrategy.md#go)

**Returns:** *void*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:103](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L103)

___

### canBack

▸ **canBack**(): *boolean*

Returns true if can go back 1 entry.
This is the same as calling [canGo(-1)](api.urlstrategy.md#cango)

**Returns:** *boolean*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:117](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L117)

___

### canForward

▸ **canForward**(): *boolean*

Returns true if can go forward 1 entry.
This is the same as calling [canGo(1)](api.urlstrategy.md#cango)

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

Defined in: [src/URLStrategy.ts:61](https://github.com/breautek/router/blob/6c82bce/src/URLStrategy.ts#L61)

___

### clear

▸ **clear**(): *void*

**Returns:** *void*

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/URLStrategy.ts:111](https://github.com/breautek/router/blob/6c82bce/src/URLStrategy.ts#L111)

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

navigate the history forward one entry. This is an alias for [go(1)](api.urlstrategy.md#go)

**Returns:** *void*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:96](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L96)

___

### getHistoryLength

▸ **getHistoryLength**(): *number*

**Returns:** *number*

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/URLStrategy.ts:49](https://github.com/breautek/router/blob/6c82bce/src/URLStrategy.ts#L49)

___

### getLocation

▸ **getLocation**(): *string*

**Returns:** *string*

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/URLStrategy.ts:41](https://github.com/breautek/router/blob/6c82bce/src/URLStrategy.ts#L41)

___

### getLocationAt

▸ **getLocationAt**(`position`: *number*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`position` | *number* |

**Returns:** *string*

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/URLStrategy.ts:45](https://github.com/breautek/router/blob/6c82bce/src/URLStrategy.ts#L45)

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

Defined in: [src/URLStrategy.ts:53](https://github.com/breautek/router/blob/6c82bce/src/URLStrategy.ts#L53)

___

### go

▸ **go**(`to`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`to` | *number* |

**Returns:** *void*

Overrides: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/URLStrategy.ts:65](https://github.com/breautek/router/blob/6c82bce/src/URLStrategy.ts#L65)

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

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*URLStrategy*](urlstrategy.urlstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*URLStrategy*](urlstrategy.urlstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:26

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*URLStrategy*](urlstrategy.urlstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*URLStrategy*](urlstrategy.urlstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:21

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*URLStrategy*](urlstrategy.urlstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*URLStrategy*](urlstrategy.urlstrategy-1.md)

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

Defined in: [src/URLStrategy.ts:57](https://github.com/breautek/router/blob/6c82bce/src/URLStrategy.ts#L57)

___

### peekBack

▸ **peekBack**(): *string*

Returns the URL one entry back.
This is the same as calling [peek(-1)](api.urlstrategy.md#peek)

**Returns:** *string*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:147](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L147)

___

### peekForward

▸ **peekForward**(): *string*

Returns the URL one entry forward.
This is the same as calling [peek(1)](api.urlstrategy.md#peek)

**Returns:** *string*

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: [src/RouterStrategy.ts:139](https://github.com/breautek/router/blob/6c82bce/src/RouterStrategy.ts#L139)

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*URLStrategy*](urlstrategy.urlstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*URLStrategy*](urlstrategy.urlstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:23

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*URLStrategy*](urlstrategy.urlstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*URLStrategy*](urlstrategy.urlstrategy-1.md)

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

Defined in: [src/URLStrategy.ts:74](https://github.com/breautek/router/blob/6c82bce/src/URLStrategy.ts#L74)

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

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*URLStrategy*](urlstrategy.urlstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*URLStrategy*](urlstrategy.urlstrategy-1.md)

Inherited from: [RouterStrategy](routerstrategy.routerstrategy-1.md)

Defined in: node_modules/@types/node/events.d.ts:27

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*URLStrategy*](urlstrategy.urlstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*URLStrategy*](urlstrategy.urlstrategy-1.md)

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

Defined in: [src/URLStrategy.ts:92](https://github.com/breautek/router/blob/6c82bce/src/URLStrategy.ts#L92)

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*URLStrategy*](urlstrategy.urlstrategy-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*URLStrategy*](urlstrategy.urlstrategy-1.md)

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
