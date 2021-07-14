[@breautek/router - v1.0.3](../README.md) / [Exports](../modules.md) / [URLStrategy](../modules/URLStrategy.md) / URLStrategy

# Class: URLStrategy

[URLStrategy](../modules/URLStrategy.md).URLStrategy

**`notice`** Using the URLStrategy requires some backend configuration
to route URLs back to application.

To make this easier, by default these URLs are prefixed with
`/r/` to easily differentiate between URLs that needs to be re-routed back
to the application vs other resources such as images.

## Hierarchy

- [`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

  ↳ **`URLStrategy`**

## Table of contents

### Constructors

- [constructor](URLStrategy.URLStrategy-1.md#constructor)

### Properties

- [captureRejectionSymbol](URLStrategy.URLStrategy-1.md#capturerejectionsymbol)
- [captureRejections](URLStrategy.URLStrategy-1.md#capturerejections)
- [defaultMaxListeners](URLStrategy.URLStrategy-1.md#defaultmaxlisteners)
- [errorMonitor](URLStrategy.URLStrategy-1.md#errormonitor)

### Methods

- [\_fireURLChange](URLStrategy.URLStrategy-1.md#_fireurlchange)
- [addListener](URLStrategy.URLStrategy-1.md#addlistener)
- [addURLChangeCallback](URLStrategy.URLStrategy-1.md#addurlchangecallback)
- [back](URLStrategy.URLStrategy-1.md#back)
- [canBack](URLStrategy.URLStrategy-1.md#canback)
- [canForward](URLStrategy.URLStrategy-1.md#canforward)
- [canGo](URLStrategy.URLStrategy-1.md#cango)
- [clear](URLStrategy.URLStrategy-1.md#clear)
- [emit](URLStrategy.URLStrategy-1.md#emit)
- [eventNames](URLStrategy.URLStrategy-1.md#eventnames)
- [forward](URLStrategy.URLStrategy-1.md#forward)
- [getHistoryLength](URLStrategy.URLStrategy-1.md#gethistorylength)
- [getLocation](URLStrategy.URLStrategy-1.md#getlocation)
- [getLocationAt](URLStrategy.URLStrategy-1.md#getlocationat)
- [getMaxListeners](URLStrategy.URLStrategy-1.md#getmaxlisteners)
- [getRouter](URLStrategy.URLStrategy-1.md#getrouter)
- [getScrollRestoration](URLStrategy.URLStrategy-1.md#getscrollrestoration)
- [go](URLStrategy.URLStrategy-1.md#go)
- [listenerCount](URLStrategy.URLStrategy-1.md#listenercount)
- [listeners](URLStrategy.URLStrategy-1.md#listeners)
- [off](URLStrategy.URLStrategy-1.md#off)
- [on](URLStrategy.URLStrategy-1.md#on)
- [once](URLStrategy.URLStrategy-1.md#once)
- [peek](URLStrategy.URLStrategy-1.md#peek)
- [peekBack](URLStrategy.URLStrategy-1.md#peekback)
- [peekForward](URLStrategy.URLStrategy-1.md#peekforward)
- [prependListener](URLStrategy.URLStrategy-1.md#prependlistener)
- [prependOnceListener](URLStrategy.URLStrategy-1.md#prependoncelistener)
- [pushState](URLStrategy.URLStrategy-1.md#pushstate)
- [rawListeners](URLStrategy.URLStrategy-1.md#rawlisteners)
- [removeAllListeners](URLStrategy.URLStrategy-1.md#removealllisteners)
- [removeListener](URLStrategy.URLStrategy-1.md#removelistener)
- [removeURLChangeCallback](URLStrategy.URLStrategy-1.md#removeurlchangecallback)
- [replaceState](URLStrategy.URLStrategy-1.md#replacestate)
- [setMaxListeners](URLStrategy.URLStrategy-1.md#setmaxlisteners)
- [setTitle](URLStrategy.URLStrategy-1.md#settitle)
- [getEventListener](URLStrategy.URLStrategy-1.md#geteventlistener)
- [listenerCount](URLStrategy.URLStrategy-1.md#listenercount)
- [on](URLStrategy.URLStrategy-1.md#on)
- [once](URLStrategy.URLStrategy-1.md#once)

## Constructors

### constructor

• **new URLStrategy**(`router`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `router` | [`Router`](Router.Router-1.md)<[`IRouterProps`](../interfaces/Router.IRouterProps.md)\> |

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[constructor](RouterStrategy.RouterStrategy-1.md#constructor)

#### Defined in

[src/URLStrategy.ts:23](https://github.com/breautek/router/blob/f2901ca/src/URLStrategy.ts#L23)

## Properties

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](HashStrategy.HashStrategy-1.md#capturerejectionsymbol)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[captureRejectionSymbol](RouterStrategy.RouterStrategy-1.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:46

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[captureRejections](RouterStrategy.RouterStrategy-1.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:52

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[defaultMaxListeners](RouterStrategy.RouterStrategy-1.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:53

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](HashStrategy.HashStrategy-1.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[errorMonitor](RouterStrategy.RouterStrategy-1.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:45

## Methods

### \_fireURLChange

▸ `Protected` **_fireURLChange**(`url`): `void`

Fires the [EVENT_URL_CHANGE](../modules/RouterStrategy.md#event_url_change) event

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[_fireURLChange](RouterStrategy.RouterStrategy-1.md#_fireurlchange)

#### Defined in

[src/RouterStrategy.ts:175](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L175)

___

### addListener

▸ **addListener**(`event`, `listener`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[addListener](RouterStrategy.RouterStrategy-1.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:72

___

### addURLChangeCallback

▸ **addURLChangeCallback**(`callback`): `void`

Listen for URL change events

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`URLChangeCallback`](../modules/RouterStrategy.md#urlchangecallback) |

#### Returns

`void`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[addURLChangeCallback](RouterStrategy.RouterStrategy-1.md#addurlchangecallback)

#### Defined in

[src/RouterStrategy.ts:49](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L49)

___

### back

▸ **back**(): `void`

Navigate the history back one entry. This is an alias for [go(-1)](URLStrategy.URLStrategy-1.md#go)

#### Returns

`void`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[back](RouterStrategy.RouterStrategy-1.md#back)

#### Defined in

[src/RouterStrategy.ts:103](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L103)

___

### canBack

▸ **canBack**(): `boolean`

Returns true if can go back 1 entry.
This is the same as calling [canGo(-1)](URLStrategy.URLStrategy-1.md#cango)

#### Returns

`boolean`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[canBack](RouterStrategy.RouterStrategy-1.md#canback)

#### Defined in

[src/RouterStrategy.ts:117](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L117)

___

### canForward

▸ **canForward**(): `boolean`

Returns true if can go forward 1 entry.
This is the same as calling [canGo(1)](URLStrategy.URLStrategy-1.md#cango)

#### Returns

`boolean`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[canForward](RouterStrategy.RouterStrategy-1.md#canforward)

#### Defined in

[src/RouterStrategy.ts:125](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L125)

___

### canGo

▸ **canGo**(`to`): `boolean`

Returns true, if can be navigated to the given relative index

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `number` |

#### Returns

`boolean`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[canGo](RouterStrategy.RouterStrategy-1.md#cango)

#### Defined in

[src/URLStrategy.ts:61](https://github.com/breautek/router/blob/f2901ca/src/URLStrategy.ts#L61)

___

### clear

▸ **clear**(): `void`

Clears the history stack.

#### Returns

`void`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[clear](RouterStrategy.RouterStrategy-1.md#clear)

#### Defined in

[src/URLStrategy.ts:111](https://github.com/breautek/router/blob/f2901ca/src/URLStrategy.ts#L111)

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[emit](RouterStrategy.RouterStrategy-1.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:82

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[eventNames](RouterStrategy.RouterStrategy-1.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:87

___

### forward

▸ **forward**(): `void`

navigate the history forward one entry. This is an alias for [go(1)](URLStrategy.URLStrategy-1.md#go)

#### Returns

`void`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[forward](RouterStrategy.RouterStrategy-1.md#forward)

#### Defined in

[src/RouterStrategy.ts:96](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L96)

___

### getHistoryLength

▸ **getHistoryLength**(): `number`

Gets the size of the history stack

#### Returns

`number`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[getHistoryLength](RouterStrategy.RouterStrategy-1.md#gethistorylength)

#### Defined in

[src/URLStrategy.ts:49](https://github.com/breautek/router/blob/f2901ca/src/URLStrategy.ts#L49)

___

### getLocation

▸ **getLocation**(): `string`

Gets the current location.
This is the same as calling [peek(0)](URLStrategy.URLStrategy-1.md#peek)

#### Returns

`string`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[getLocation](RouterStrategy.RouterStrategy-1.md#getlocation)

#### Defined in

[src/URLStrategy.ts:41](https://github.com/breautek/router/blob/f2901ca/src/URLStrategy.ts#L41)

___

### getLocationAt

▸ **getLocationAt**(`position`): `string`

Gets the URL at the given index in the history stack

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |

#### Returns

`string`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[getLocationAt](RouterStrategy.RouterStrategy-1.md#getlocationat)

#### Defined in

[src/URLStrategy.ts:45](https://github.com/breautek/router/blob/f2901ca/src/URLStrategy.ts#L45)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[getMaxListeners](RouterStrategy.RouterStrategy-1.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:79

___

### getRouter

▸ **getRouter**(): [`Router`](Router.Router-1.md)<[`IRouterProps`](../interfaces/Router.IRouterProps.md)\>

Gets the router

#### Returns

[`Router`](Router.Router-1.md)<[`IRouterProps`](../interfaces/Router.IRouterProps.md)\>

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[getRouter](RouterStrategy.RouterStrategy-1.md#getrouter)

#### Defined in

[src/RouterStrategy.ts:20](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L20)

___

### getScrollRestoration

▸ **getScrollRestoration**(): `ScrollRestoration`

Gets the scroll restoration

#### Returns

`ScrollRestoration`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[getScrollRestoration](RouterStrategy.RouterStrategy-1.md#getscrollrestoration)

#### Defined in

[src/URLStrategy.ts:53](https://github.com/breautek/router/blob/f2901ca/src/URLStrategy.ts#L53)

___

### go

▸ **go**(`to`): `void`

Navigates the history

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `number` |

#### Returns

`void`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[go](RouterStrategy.RouterStrategy-1.md#go)

#### Defined in

[src/URLStrategy.ts:65](https://github.com/breautek/router/blob/f2901ca/src/URLStrategy.ts#L65)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[listenerCount](RouterStrategy.RouterStrategy-1.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:83

___

### listeners

▸ **listeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[listeners](RouterStrategy.RouterStrategy-1.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:80

___

### off

▸ **off**(`event`, `listener`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[off](RouterStrategy.RouterStrategy-1.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:76

___

### on

▸ **on**(`event`, `listener`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[on](RouterStrategy.RouterStrategy-1.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:73

___

### once

▸ **once**(`event`, `listener`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[once](RouterStrategy.RouterStrategy-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:74

___

### peek

▸ **peek**(`to`): `string`

Returns the URL stored in the history stack at the given relative index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `number` |

#### Returns

`string`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[peek](RouterStrategy.RouterStrategy-1.md#peek)

#### Defined in

[src/URLStrategy.ts:57](https://github.com/breautek/router/blob/f2901ca/src/URLStrategy.ts#L57)

___

### peekBack

▸ **peekBack**(): `string`

Returns the URL one entry back.
This is the same as calling [peek(-1)](URLStrategy.URLStrategy-1.md#peek)

#### Returns

`string`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[peekBack](RouterStrategy.RouterStrategy-1.md#peekback)

#### Defined in

[src/RouterStrategy.ts:147](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L147)

___

### peekForward

▸ **peekForward**(): `string`

Returns the URL one entry forward.
This is the same as calling [peek(1)](URLStrategy.URLStrategy-1.md#peek)

#### Returns

`string`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[peekForward](RouterStrategy.RouterStrategy-1.md#peekforward)

#### Defined in

[src/RouterStrategy.ts:139](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L139)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[prependListener](RouterStrategy.RouterStrategy-1.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:85

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[prependOnceListener](RouterStrategy.RouterStrategy-1.md#prependoncelistener)

#### Defined in

node_modules/@types/node/events.d.ts:86

___

### pushState

▸ **pushState**(`url`, `state?`): `void`

Pushes a new entry into the history stack, navigating to the new location.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `state?` | `IDictionary`<`any`\> |

#### Returns

`void`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[pushState](RouterStrategy.RouterStrategy-1.md#pushstate)

#### Defined in

[src/URLStrategy.ts:74](https://github.com/breautek/router/blob/f2901ca/src/URLStrategy.ts#L74)

___

### rawListeners

▸ **rawListeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[rawListeners](RouterStrategy.RouterStrategy-1.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:81

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[removeAllListeners](RouterStrategy.RouterStrategy-1.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:77

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[removeListener](RouterStrategy.RouterStrategy-1.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:75

___

### removeURLChangeCallback

▸ **removeURLChangeCallback**(`callback`): `void`

Removes an existing listener

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`URLChangeCallback`](../modules/RouterStrategy.md#urlchangecallback) |

#### Returns

`void`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[removeURLChangeCallback](RouterStrategy.RouterStrategy-1.md#removeurlchangecallback)

#### Defined in

[src/RouterStrategy.ts:58](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L58)

___

### replaceState

▸ **replaceState**(`url`, `state?`): `void`

Replaces the current entry in the history stack with the new location.
This will navigate the screen to the new location.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `state?` | `IDictionary`<`any`\> |

#### Returns

`void`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[replaceState](RouterStrategy.RouterStrategy-1.md#replacestate)

#### Defined in

[src/URLStrategy.ts:92](https://github.com/breautek/router/blob/f2901ca/src/URLStrategy.ts#L92)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[setMaxListeners](RouterStrategy.RouterStrategy-1.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:78

___

### setTitle

▸ **setTitle**(`title`): `void`

Sets the browser title

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[setTitle](RouterStrategy.RouterStrategy-1.md#settitle)

#### Defined in

[src/RouterStrategy.ts:29](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L29)

___

### getEventListener

▸ `Static` **getEventListener**(`emitter`, `name`): `Function`[]

Returns a list listener for a specific emitter event name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` \| `EventEmitter` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[getEventListener](RouterStrategy.RouterStrategy-1.md#geteventlistener)

#### Defined in

node_modules/@types/node/events.d.ts:34

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `event`): `number`

**`deprecated`** since v4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[listenerCount](RouterStrategy.RouterStrategy-1.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:30

___

### on

▸ `Static` **on**(`emitter`, `event`, `options?`): `AsyncIterableIterator`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `event` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[on](RouterStrategy.RouterStrategy-1.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:27

___

### once

▸ `Static` **once**(`emitter`, `event`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `event` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[once](RouterStrategy.RouterStrategy-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:25

▸ `Static` **once**(`emitter`, `event`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `event` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[once](RouterStrategy.RouterStrategy-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:26
