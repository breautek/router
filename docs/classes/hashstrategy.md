[@breautek/router - v1.0.0-beta.2](../README.md) › [Globals](../globals.md) › [HashStrategy](hashstrategy.md)

# Class: HashStrategy

A [RouterStrategy](routerstrategy.md) that manages a history stack using inline pound symbols `#`.
URLs will have a starting point `/#/`, as a default base.

For example, if you [pushState("mylink")](hashstrategy.md#pushstate), the url
`/#/mylink` will be produced.

## Hierarchy

  ↳ [RouterStrategy](routerstrategy.md)

  ↳ **HashStrategy**

## Index

### Constructors

* [constructor](hashstrategy.md#constructor)

### Properties

* [defaultMaxListeners](hashstrategy.md#static-defaultmaxlisteners)

### Methods

* [_fireURLChange](hashstrategy.md#protected-_fireurlchange)
* [addListener](hashstrategy.md#addlistener)
* [addURLChangeCallback](hashstrategy.md#addurlchangecallback)
* [back](hashstrategy.md#back)
* [canBack](hashstrategy.md#canback)
* [canForward](hashstrategy.md#canforward)
* [canGo](hashstrategy.md#cango)
* [clear](hashstrategy.md#clear)
* [emit](hashstrategy.md#emit)
* [eventNames](hashstrategy.md#eventnames)
* [forward](hashstrategy.md#forward)
* [getHistoryLength](hashstrategy.md#gethistorylength)
* [getLocation](hashstrategy.md#getlocation)
* [getLocationAt](hashstrategy.md#getlocationat)
* [getMaxListeners](hashstrategy.md#getmaxlisteners)
* [getRouter](hashstrategy.md#getrouter)
* [getScrollRestoration](hashstrategy.md#getscrollrestoration)
* [go](hashstrategy.md#go)
* [listenerCount](hashstrategy.md#listenercount)
* [listeners](hashstrategy.md#listeners)
* [off](hashstrategy.md#off)
* [on](hashstrategy.md#on)
* [once](hashstrategy.md#once)
* [peek](hashstrategy.md#peek)
* [peekBack](hashstrategy.md#peekback)
* [peekForward](hashstrategy.md#peekforward)
* [prependListener](hashstrategy.md#prependlistener)
* [prependOnceListener](hashstrategy.md#prependoncelistener)
* [pushState](hashstrategy.md#pushstate)
* [rawListeners](hashstrategy.md#rawlisteners)
* [removeAllListeners](hashstrategy.md#removealllisteners)
* [removeListener](hashstrategy.md#removelistener)
* [removeURLChangeCallback](hashstrategy.md#removeurlchangecallback)
* [replaceState](hashstrategy.md#replacestate)
* [setMaxListeners](hashstrategy.md#setmaxlisteners)
* [setTitle](hashstrategy.md#settitle)
* [listenerCount](hashstrategy.md#static-listenercount)

## Constructors

###  constructor

\+ **new HashStrategy**(`router`: [Router](router.md)): *[HashStrategy](hashstrategy.md)*

*Overrides [RouterStrategy](routerstrategy.md).[constructor](routerstrategy.md#constructor)*

*Defined in [src/HashStrategy.ts:16](https://github.com/breautek/router/blob/658faf7/src/HashStrategy.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`router` | [Router](router.md) |

**Returns:** *[HashStrategy](hashstrategy.md)*

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

Navigate the history back one entry. This is an alias for [go(-1)](hashstrategy.md#go)

**Returns:** *void*

___

###  canBack

▸ **canBack**(): *boolean*

*Inherited from [RouterStrategy](routerstrategy.md).[canBack](routerstrategy.md#canback)*

*Defined in [src/RouterStrategy.ts:115](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L115)*

Returns true if can go back 1 entry.
This is the same as calling [canGo(-1)](hashstrategy.md#cango)

**Returns:** *boolean*

___

###  canForward

▸ **canForward**(): *boolean*

*Inherited from [RouterStrategy](routerstrategy.md).[canForward](routerstrategy.md#canforward)*

*Defined in [src/RouterStrategy.ts:123](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L123)*

Returns true if can go forward 1 entry.
This is the same as calling [canGo(1)](hashstrategy.md#cango)

**Returns:** *boolean*

___

###  canGo

▸ **canGo**(`to`: number): *boolean*

*Overrides [RouterStrategy](routerstrategy.md).[canGo](routerstrategy.md#abstract-cango)*

*Defined in [src/HashStrategy.ts:55](https://github.com/breautek/router/blob/658faf7/src/HashStrategy.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`to` | number |

**Returns:** *boolean*

___

###  clear

▸ **clear**(): *void*

*Overrides [RouterStrategy](routerstrategy.md).[clear](routerstrategy.md#abstract-clear)*

*Defined in [src/HashStrategy.ts:107](https://github.com/breautek/router/blob/658faf7/src/HashStrategy.ts#L107)*

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

navigate the history forward one entry. This is an alias for [go(1)](hashstrategy.md#go)

**Returns:** *void*

___

###  getHistoryLength

▸ **getHistoryLength**(): *number*

*Overrides [RouterStrategy](routerstrategy.md).[getHistoryLength](routerstrategy.md#abstract-gethistorylength)*

*Defined in [src/HashStrategy.ts:47](https://github.com/breautek/router/blob/658faf7/src/HashStrategy.ts#L47)*

**Returns:** *number*

___

###  getLocation

▸ **getLocation**(): *string*

*Overrides [RouterStrategy](routerstrategy.md).[getLocation](routerstrategy.md#abstract-getlocation)*

*Defined in [src/HashStrategy.ts:39](https://github.com/breautek/router/blob/658faf7/src/HashStrategy.ts#L39)*

**Returns:** *string*

___

###  getLocationAt

▸ **getLocationAt**(`position`: number): *string*

*Overrides [RouterStrategy](routerstrategy.md).[getLocationAt](routerstrategy.md#abstract-getlocationat)*

*Defined in [src/HashStrategy.ts:43](https://github.com/breautek/router/blob/658faf7/src/HashStrategy.ts#L43)*

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

*Defined in [src/HashStrategy.ts:51](https://github.com/breautek/router/blob/658faf7/src/HashStrategy.ts#L51)*

**Returns:** *ScrollRestoration*

___

###  go

▸ **go**(`to`: number): *void*

*Overrides [RouterStrategy](routerstrategy.md).[go](routerstrategy.md#abstract-go)*

*Defined in [src/HashStrategy.ts:63](https://github.com/breautek/router/blob/658faf7/src/HashStrategy.ts#L63)*

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

*Defined in [src/HashStrategy.ts:59](https://github.com/breautek/router/blob/658faf7/src/HashStrategy.ts#L59)*

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
This is the same as calling [peek(-1)](hashstrategy.md#peek)

**Returns:** *string*

___

###  peekForward

▸ **peekForward**(): *string*

*Inherited from [RouterStrategy](routerstrategy.md).[peekForward](routerstrategy.md#peekforward)*

*Defined in [src/RouterStrategy.ts:137](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L137)*

Returns the URL one entry forward.
This is the same as calling [peek(1)](hashstrategy.md#peek)

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

*Defined in [src/HashStrategy.ts:74](https://github.com/breautek/router/blob/658faf7/src/HashStrategy.ts#L74)*

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

*Defined in [src/HashStrategy.ts:92](https://github.com/breautek/router/blob/658faf7/src/HashStrategy.ts#L92)*

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
