[@breautek/router - v1.0.0-beta.2](../README.md) › [Globals](../globals.md) › [RouterStrategy](routerstrategy.md)

# Class: RouterStrategy

## Hierarchy

* EventEmitter

  ↳ **RouterStrategy**

  ↳ [HashStrategy](hashstrategy.md)

  ↳ [URLStrategy](urlstrategy.md)

## Index

### Constructors

* [constructor](routerstrategy.md#constructor)

### Properties

* [defaultMaxListeners](routerstrategy.md#static-defaultmaxlisteners)

### Methods

* [_fireURLChange](routerstrategy.md#protected-_fireurlchange)
* [addListener](routerstrategy.md#addlistener)
* [addURLChangeCallback](routerstrategy.md#addurlchangecallback)
* [back](routerstrategy.md#back)
* [canBack](routerstrategy.md#canback)
* [canForward](routerstrategy.md#canforward)
* [canGo](routerstrategy.md#abstract-cango)
* [clear](routerstrategy.md#abstract-clear)
* [emit](routerstrategy.md#emit)
* [eventNames](routerstrategy.md#eventnames)
* [forward](routerstrategy.md#forward)
* [getHistoryLength](routerstrategy.md#abstract-gethistorylength)
* [getLocation](routerstrategy.md#abstract-getlocation)
* [getLocationAt](routerstrategy.md#abstract-getlocationat)
* [getMaxListeners](routerstrategy.md#getmaxlisteners)
* [getRouter](routerstrategy.md#getrouter)
* [getScrollRestoration](routerstrategy.md#abstract-getscrollrestoration)
* [go](routerstrategy.md#abstract-go)
* [listenerCount](routerstrategy.md#listenercount)
* [listeners](routerstrategy.md#listeners)
* [off](routerstrategy.md#off)
* [on](routerstrategy.md#on)
* [once](routerstrategy.md#once)
* [peek](routerstrategy.md#abstract-peek)
* [peekBack](routerstrategy.md#peekback)
* [peekForward](routerstrategy.md#peekforward)
* [prependListener](routerstrategy.md#prependlistener)
* [prependOnceListener](routerstrategy.md#prependoncelistener)
* [pushState](routerstrategy.md#abstract-pushstate)
* [rawListeners](routerstrategy.md#rawlisteners)
* [removeAllListeners](routerstrategy.md#removealllisteners)
* [removeListener](routerstrategy.md#removelistener)
* [removeURLChangeCallback](routerstrategy.md#removeurlchangecallback)
* [replaceState](routerstrategy.md#abstract-replacestate)
* [setMaxListeners](routerstrategy.md#setmaxlisteners)
* [setTitle](routerstrategy.md#settitle)
* [listenerCount](routerstrategy.md#static-listenercount)

## Constructors

###  constructor

\+ **new RouterStrategy**(`router`: [Router](router.md)): *[RouterStrategy](routerstrategy.md)*

*Defined in [src/RouterStrategy.ts:10](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`router` | [Router](router.md) |

**Returns:** *[RouterStrategy](routerstrategy.md)*

## Properties

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [RouterStrategy](routerstrategy.md).[defaultMaxListeners](routerstrategy.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

### `Protected` _fireURLChange

▸ **_fireURLChange**(`url`: string): *void*

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

*Defined in [src/RouterStrategy.ts:101](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L101)*

Navigate the history back one entry. This is an alias for [go(-1)](routerstrategy.md#abstract-go)

**Returns:** *void*

___

###  canBack

▸ **canBack**(): *boolean*

*Defined in [src/RouterStrategy.ts:115](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L115)*

Returns true if can go back 1 entry.
This is the same as calling [canGo(-1)](routerstrategy.md#abstract-cango)

**Returns:** *boolean*

___

###  canForward

▸ **canForward**(): *boolean*

*Defined in [src/RouterStrategy.ts:123](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L123)*

Returns true if can go forward 1 entry.
This is the same as calling [canGo(1)](routerstrategy.md#abstract-cango)

**Returns:** *boolean*

___

### `Abstract` canGo

▸ **canGo**(`to`: number): *boolean*

*Defined in [src/RouterStrategy.ts:109](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L109)*

Returns true, if can be navigated to the given relative index

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`to` | number | Must be an integer  |

**Returns:** *boolean*

___

### `Abstract` clear

▸ **clear**(): *void*

*Defined in [src/RouterStrategy.ts:167](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L167)*

Clears the history stack.

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

*Defined in [src/RouterStrategy.ts:94](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L94)*

navigate the history forward one entry. This is an alias for [go(1)](routerstrategy.md#abstract-go)

**Returns:** *void*

___

### `Abstract` getHistoryLength

▸ **getHistoryLength**(): *number*

*Defined in [src/RouterStrategy.ts:75](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L75)*

Gets the size of the history stack

**Returns:** *number*

___

### `Abstract` getLocation

▸ **getLocation**(): *string*

*Defined in [src/RouterStrategy.ts:70](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L70)*

Gets the current location.
This is the same as calling [peek(0)](routerstrategy.md#abstract-peek)

**Returns:** *string*

___

### `Abstract` getLocationAt

▸ **getLocationAt**(`position`: number): *string*

*Defined in [src/RouterStrategy.ts:64](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L64)*

Gets the URL at the given index in the history stack

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`position` | number | index  |

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

*Defined in [src/RouterStrategy.ts:20](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L20)*

Gets the router

**Returns:** *[Router](router.md)*

___

### `Abstract` getScrollRestoration

▸ **getScrollRestoration**(): *ScrollRestoration*

*Defined in [src/RouterStrategy.ts:80](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L80)*

Gets the scroll restoration

**Returns:** *ScrollRestoration*

___

### `Abstract` go

▸ **go**(`to`: number): *void*

*Defined in [src/RouterStrategy.ts:89](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L89)*

Navigates the history

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`to` | number | Must be an integer. Negative numbers go back, if possible. Positive goes forward, if possible. Zero does nothing.  |

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

### `Abstract` peek

▸ **peek**(`to`: number): *string*

*Defined in [src/RouterStrategy.ts:131](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L131)*

Returns the URL stored in the history stack at the given relative index.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`to` | number | Must be an integer  |

**Returns:** *string*

___

###  peekBack

▸ **peekBack**(): *string*

*Defined in [src/RouterStrategy.ts:145](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L145)*

Returns the URL one entry back.
This is the same as calling [peek(-1)](routerstrategy.md#abstract-peek)

**Returns:** *string*

___

###  peekForward

▸ **peekForward**(): *string*

*Defined in [src/RouterStrategy.ts:137](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L137)*

Returns the URL one entry forward.
This is the same as calling [peek(1)](routerstrategy.md#abstract-peek)

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

### `Abstract` pushState

▸ **pushState**(`url`: string, `state?`: IDictionary): *void*

*Defined in [src/RouterStrategy.ts:154](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L154)*

Pushes a new entry into the history stack, navigating to the new location.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | - |
`state?` | IDictionary |   |

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

*Defined in [src/RouterStrategy.ts:56](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L56)*

Removes an existing listener

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | [URLChangeCallback](../globals.md#urlchangecallback) |   |

**Returns:** *void*

___

### `Abstract` replaceState

▸ **replaceState**(`url`: string, `state?`: IDictionary): *void*

*Defined in [src/RouterStrategy.ts:162](https://github.com/breautek/router/blob/658faf7/src/RouterStrategy.ts#L162)*

Replaces the current entry in the history stack with the new location.
This will navigate the screen to the new location.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | - |
`state?` | IDictionary |   |

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
