[@breautek/router - v1.0.0-beta.2](../README.md) › [Globals](../globals.md) › [URLStrategy](urlstrategy.md)

# Class: URLStrategy

**`notice`** Using the URLStrategy requires some backend configuration
to route URLs back to application.

To make this easier, by default these URLs are prefixed with
`/r/` to easily differentiate between URLs that needs to be re-routed back
to the application vs other resources such as images.

## Hierarchy

  ↳ [RouterStrategy](routerstrategy.md)

  ↳ **URLStrategy**

## Index

### Constructors

* [constructor](urlstrategy.md#constructor)

### Properties

* [defaultMaxListeners](urlstrategy.md#static-defaultmaxlisteners)

### Methods

* [_fireURLChange](urlstrategy.md#protected-_fireurlchange)
* [addListener](urlstrategy.md#addlistener)
* [addURLChangeCallback](urlstrategy.md#addurlchangecallback)
* [back](urlstrategy.md#back)
* [canBack](urlstrategy.md#canback)
* [canForward](urlstrategy.md#canforward)
* [canGo](urlstrategy.md#cango)
* [clear](urlstrategy.md#clear)
* [emit](urlstrategy.md#emit)
* [eventNames](urlstrategy.md#eventnames)
* [forward](urlstrategy.md#forward)
* [getHistoryLength](urlstrategy.md#gethistorylength)
* [getLocation](urlstrategy.md#getlocation)
* [getLocationAt](urlstrategy.md#getlocationat)
* [getMaxListeners](urlstrategy.md#getmaxlisteners)
* [getRouter](urlstrategy.md#getrouter)
* [getScrollRestoration](urlstrategy.md#getscrollrestoration)
* [go](urlstrategy.md#go)
* [listenerCount](urlstrategy.md#listenercount)
* [listeners](urlstrategy.md#listeners)
* [off](urlstrategy.md#off)
* [on](urlstrategy.md#on)
* [once](urlstrategy.md#once)
* [peek](urlstrategy.md#peek)
* [peekBack](urlstrategy.md#peekback)
* [peekForward](urlstrategy.md#peekforward)
* [prependListener](urlstrategy.md#prependlistener)
* [prependOnceListener](urlstrategy.md#prependoncelistener)
* [pushState](urlstrategy.md#pushstate)
* [rawListeners](urlstrategy.md#rawlisteners)
* [removeAllListeners](urlstrategy.md#removealllisteners)
* [removeListener](urlstrategy.md#removelistener)
* [removeURLChangeCallback](urlstrategy.md#removeurlchangecallback)
* [replaceState](urlstrategy.md#replacestate)
* [setMaxListeners](urlstrategy.md#setmaxlisteners)
* [setTitle](urlstrategy.md#settitle)
* [listenerCount](urlstrategy.md#static-listenercount)

## Constructors

###  constructor

\+ **new URLStrategy**(`router`: [Router](router.md)): *[URLStrategy](urlstrategy.md)*

*Overrides [RouterStrategy](routerstrategy.md).[constructor](routerstrategy.md#constructor)*

*Defined in [src/URLStrategy.ts:17](https://github.com/breautek/router/blob/658faf7/src/URLStrategy.ts#L17)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`router` | [Router](router.md) |   |

**Returns:** *[URLStrategy](urlstrategy.md)*

## Properties

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [RouterStrategy](routerstrategy.md).[defaultMaxListeners](routerstrategy.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

### `Protected` _fireURLChange

▸ **_fireURLChange**(`url`: string): *void*

*Inherited from [RouterStrategy](routerstrategy.md).[_fireURLChange](routerstrategy.md#protected-_fireurlchange)*

*Defined in [src/RouterStrategy.ts:173](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L173)*

Fires the [EVENT_URL_CHANGE](../globals.md#const-event_url_change) event

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string |   |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [RouterStrategy](routerstrategy.md).[addListener](routerstrategy.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:20

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  addURLChangeCallback

▸ **addURLChangeCallback**(`callback`: [URLChangeCallback](../globals.md#urlchangecallback)): *void*

*Inherited from [RouterStrategy](routerstrategy.md).[addURLChangeCallback](routerstrategy.md#addurlchangecallback)*

*Defined in [src/RouterStrategy.ts:47](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L47)*

Listen for URL change events

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | [URLChangeCallback](../globals.md#urlchangecallback) |   |

**Returns:** *void*

___

###  back

▸ **back**(): *void*

*Inherited from [RouterStrategy](routerstrategy.md).[back](routerstrategy.md#back)*

*Defined in [src/RouterStrategy.ts:101](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L101)*

Navigate the history back one entry. This is an alias for [go(-1)](urlstrategy.md#go)

**Returns:** *void*

___

###  canBack

▸ **canBack**(): *boolean*

*Inherited from [RouterStrategy](routerstrategy.md).[canBack](routerstrategy.md#canback)*

*Defined in [src/RouterStrategy.ts:115](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L115)*

Returns true if can go back 1 entry.
This is the same as calling [canGo(-1)](urlstrategy.md#cango)

**Returns:** *boolean*

___

###  canForward

▸ **canForward**(): *boolean*

*Inherited from [RouterStrategy](routerstrategy.md).[canForward](routerstrategy.md#canforward)*

*Defined in [src/RouterStrategy.ts:123](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L123)*

Returns true if can go forward 1 entry.
This is the same as calling [canGo(1)](urlstrategy.md#cango)

**Returns:** *boolean*

___

###  canGo

▸ **canGo**(`to`: number): *boolean*

*Overrides [RouterStrategy](routerstrategy.md).[canGo](routerstrategy.md#abstract-cango)*

*Defined in [src/URLStrategy.ts:61](https://github.com/breautek/router/blob/658faf7/src/URLStrategy.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`to` | number |

**Returns:** *boolean*

___

###  clear

▸ **clear**(): *void*

*Overrides [RouterStrategy](routerstrategy.md).[clear](routerstrategy.md#abstract-clear)*

*Defined in [src/URLStrategy.ts:113](https://github.com/breautek/router/blob/658faf7/src/URLStrategy.ts#L113)*

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [RouterStrategy](routerstrategy.md).[emit](routerstrategy.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [RouterStrategy](routerstrategy.md).[eventNames](routerstrategy.md#eventnames)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  forward

▸ **forward**(): *void*

*Inherited from [RouterStrategy](routerstrategy.md).[forward](routerstrategy.md#forward)*

*Defined in [src/RouterStrategy.ts:94](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L94)*

navigate the history forward one entry. This is an alias for [go(1)](urlstrategy.md#go)

**Returns:** *void*

___

###  getHistoryLength

▸ **getHistoryLength**(): *number*

*Overrides [RouterStrategy](routerstrategy.md).[getHistoryLength](routerstrategy.md#abstract-gethistorylength)*

*Defined in [src/URLStrategy.ts:49](https://github.com/breautek/router/blob/658faf7/src/URLStrategy.ts#L49)*

**Returns:** *number*

___

###  getLocation

▸ **getLocation**(): *string*

*Overrides [RouterStrategy](routerstrategy.md).[getLocation](routerstrategy.md#abstract-getlocation)*

*Defined in [src/URLStrategy.ts:41](https://github.com/breautek/router/blob/658faf7/src/URLStrategy.ts#L41)*

**Returns:** *string*

___

###  getLocationAt

▸ **getLocationAt**(`position`: number): *string*

*Overrides [RouterStrategy](routerstrategy.md).[getLocationAt](routerstrategy.md#abstract-getlocationat)*

*Defined in [src/URLStrategy.ts:45](https://github.com/breautek/router/blob/658faf7/src/URLStrategy.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`position` | number |

**Returns:** *string*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [RouterStrategy](routerstrategy.md).[getMaxListeners](routerstrategy.md#getmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  getRouter

▸ **getRouter**(): *[Router](router.md)*

*Inherited from [RouterStrategy](routerstrategy.md).[getRouter](routerstrategy.md#getrouter)*

*Defined in [src/RouterStrategy.ts:20](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L20)*

Gets the router

**Returns:** *[Router](router.md)*

___

###  getScrollRestoration

▸ **getScrollRestoration**(): *ScrollRestoration*

*Overrides [RouterStrategy](routerstrategy.md).[getScrollRestoration](routerstrategy.md#abstract-getscrollrestoration)*

*Defined in [src/URLStrategy.ts:53](https://github.com/breautek/router/blob/658faf7/src/URLStrategy.ts#L53)*

**Returns:** *ScrollRestoration*

___

###  go

▸ **go**(`to`: number): *void*

*Overrides [RouterStrategy](routerstrategy.md).[go](routerstrategy.md#abstract-go)*

*Defined in [src/URLStrategy.ts:65](https://github.com/breautek/router/blob/658faf7/src/URLStrategy.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`to` | number |

**Returns:** *void*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [RouterStrategy](routerstrategy.md).[listenerCount](routerstrategy.md#static-listenercount)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [RouterStrategy](routerstrategy.md).[listeners](routerstrategy.md#listeners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [RouterStrategy](routerstrategy.md).[off](routerstrategy.md#off)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [RouterStrategy](routerstrategy.md).[on](routerstrategy.md#on)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:21

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [RouterStrategy](routerstrategy.md).[once](routerstrategy.md#once)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:22

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  peek

▸ **peek**(`to`: number): *string*

*Overrides [RouterStrategy](routerstrategy.md).[peek](routerstrategy.md#abstract-peek)*

*Defined in [src/URLStrategy.ts:57](https://github.com/breautek/router/blob/658faf7/src/URLStrategy.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`to` | number |

**Returns:** *string*

___

###  peekBack

▸ **peekBack**(): *string*

*Inherited from [RouterStrategy](routerstrategy.md).[peekBack](routerstrategy.md#peekback)*

*Defined in [src/RouterStrategy.ts:145](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L145)*

Returns the URL one entry back.
This is the same as calling [peek(-1)](urlstrategy.md#peek)

**Returns:** *string*

___

###  peekForward

▸ **peekForward**(): *string*

*Inherited from [RouterStrategy](routerstrategy.md).[peekForward](routerstrategy.md#peekforward)*

*Defined in [src/RouterStrategy.ts:137](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L137)*

Returns the URL one entry forward.
This is the same as calling [peek(1)](urlstrategy.md#peek)

**Returns:** *string*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [RouterStrategy](routerstrategy.md).[prependListener](routerstrategy.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:23

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [RouterStrategy](routerstrategy.md).[prependOnceListener](routerstrategy.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:24

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  pushState

▸ **pushState**(`url`: string, `state?`: IDictionary): *void*

*Overrides [RouterStrategy](routerstrategy.md).[pushState](routerstrategy.md#abstract-pushstate)*

*Defined in [src/URLStrategy.ts:76](https://github.com/breautek/router/blob/658faf7/src/URLStrategy.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`state?` | IDictionary |

**Returns:** *void*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [RouterStrategy](routerstrategy.md).[rawListeners](routerstrategy.md#rawlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [RouterStrategy](routerstrategy.md).[removeAllListeners](routerstrategy.md#removealllisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [RouterStrategy](routerstrategy.md).[removeListener](routerstrategy.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:25

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  removeURLChangeCallback

▸ **removeURLChangeCallback**(`callback`: [URLChangeCallback](../globals.md#urlchangecallback)): *void*

*Inherited from [RouterStrategy](routerstrategy.md).[removeURLChangeCallback](routerstrategy.md#removeurlchangecallback)*

*Defined in [src/RouterStrategy.ts:56](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L56)*

Removes an existing listener

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | [URLChangeCallback](../globals.md#urlchangecallback) |   |

**Returns:** *void*

___

###  replaceState

▸ **replaceState**(`url`: string, `state?`: IDictionary): *void*

*Overrides [RouterStrategy](routerstrategy.md).[replaceState](routerstrategy.md#abstract-replacestate)*

*Defined in [src/URLStrategy.ts:94](https://github.com/breautek/router/blob/658faf7/src/URLStrategy.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`state?` | IDictionary |

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [RouterStrategy](routerstrategy.md).[setMaxListeners](routerstrategy.md#setmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  setTitle

▸ **setTitle**(`title`: string): *void*

*Inherited from [RouterStrategy](routerstrategy.md).[setTitle](routerstrategy.md#settitle)*

*Defined in [src/RouterStrategy.ts:29](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L29)*

Sets the browser title

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`title` | string |   |

**Returns:** *void*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [RouterStrategy](routerstrategy.md).[listenerCount](routerstrategy.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
