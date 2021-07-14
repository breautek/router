[@breautek/router - v1.0.3](../README.md) / [Exports](../modules.md) / [RouterStrategy](../modules/RouterStrategy.md) / RouterStrategy

# Class: RouterStrategy

[RouterStrategy](../modules/RouterStrategy.md).RouterStrategy

## Hierarchy

- `EventEmitter`

  ↳ **`RouterStrategy`**

  ↳↳ [`HashStrategy`](HashStrategy.HashStrategy-1.md)

  ↳↳ [`URLStrategy`](URLStrategy.URLStrategy-1.md)

## Table of contents

### Constructors

- [constructor](RouterStrategy.RouterStrategy-1.md#constructor)

### Properties

- [captureRejectionSymbol](RouterStrategy.RouterStrategy-1.md#capturerejectionsymbol)
- [captureRejections](RouterStrategy.RouterStrategy-1.md#capturerejections)
- [defaultMaxListeners](RouterStrategy.RouterStrategy-1.md#defaultmaxlisteners)
- [errorMonitor](RouterStrategy.RouterStrategy-1.md#errormonitor)

### Methods

- [\_fireURLChange](RouterStrategy.RouterStrategy-1.md#_fireurlchange)
- [addListener](RouterStrategy.RouterStrategy-1.md#addlistener)
- [addURLChangeCallback](RouterStrategy.RouterStrategy-1.md#addurlchangecallback)
- [back](RouterStrategy.RouterStrategy-1.md#back)
- [canBack](RouterStrategy.RouterStrategy-1.md#canback)
- [canForward](RouterStrategy.RouterStrategy-1.md#canforward)
- [canGo](RouterStrategy.RouterStrategy-1.md#cango)
- [clear](RouterStrategy.RouterStrategy-1.md#clear)
- [emit](RouterStrategy.RouterStrategy-1.md#emit)
- [eventNames](RouterStrategy.RouterStrategy-1.md#eventnames)
- [forward](RouterStrategy.RouterStrategy-1.md#forward)
- [getHistoryLength](RouterStrategy.RouterStrategy-1.md#gethistorylength)
- [getLocation](RouterStrategy.RouterStrategy-1.md#getlocation)
- [getLocationAt](RouterStrategy.RouterStrategy-1.md#getlocationat)
- [getMaxListeners](RouterStrategy.RouterStrategy-1.md#getmaxlisteners)
- [getRouter](RouterStrategy.RouterStrategy-1.md#getrouter)
- [getScrollRestoration](RouterStrategy.RouterStrategy-1.md#getscrollrestoration)
- [go](RouterStrategy.RouterStrategy-1.md#go)
- [listenerCount](RouterStrategy.RouterStrategy-1.md#listenercount)
- [listeners](RouterStrategy.RouterStrategy-1.md#listeners)
- [off](RouterStrategy.RouterStrategy-1.md#off)
- [on](RouterStrategy.RouterStrategy-1.md#on)
- [once](RouterStrategy.RouterStrategy-1.md#once)
- [peek](RouterStrategy.RouterStrategy-1.md#peek)
- [peekBack](RouterStrategy.RouterStrategy-1.md#peekback)
- [peekForward](RouterStrategy.RouterStrategy-1.md#peekforward)
- [prependListener](RouterStrategy.RouterStrategy-1.md#prependlistener)
- [prependOnceListener](RouterStrategy.RouterStrategy-1.md#prependoncelistener)
- [pushState](RouterStrategy.RouterStrategy-1.md#pushstate)
- [rawListeners](RouterStrategy.RouterStrategy-1.md#rawlisteners)
- [removeAllListeners](RouterStrategy.RouterStrategy-1.md#removealllisteners)
- [removeListener](RouterStrategy.RouterStrategy-1.md#removelistener)
- [removeURLChangeCallback](RouterStrategy.RouterStrategy-1.md#removeurlchangecallback)
- [replaceState](RouterStrategy.RouterStrategy-1.md#replacestate)
- [setMaxListeners](RouterStrategy.RouterStrategy-1.md#setmaxlisteners)
- [setTitle](RouterStrategy.RouterStrategy-1.md#settitle)
- [getEventListener](RouterStrategy.RouterStrategy-1.md#geteventlistener)
- [listenerCount](RouterStrategy.RouterStrategy-1.md#listenercount)
- [on](RouterStrategy.RouterStrategy-1.md#on)
- [once](RouterStrategy.RouterStrategy-1.md#once)

## Constructors

### constructor

• **new RouterStrategy**(`router`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `router` | [`Router`](Router.Router-1.md)<[`IRouterProps`](../interfaces/Router.IRouterProps.md)\> |

#### Overrides

EventEmitter.constructor

#### Defined in

[src/RouterStrategy.ts:12](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L12)

## Properties

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](HashStrategy.HashStrategy-1.md#capturerejectionsymbol)

#### Inherited from

EventEmitter.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:46

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

EventEmitter.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:52

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

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

EventEmitter.errorMonitor

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

#### Defined in

[src/RouterStrategy.ts:175](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L175)

___

### addListener

▸ **addListener**(`event`, `listener`): [`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Inherited from

EventEmitter.addListener

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

#### Defined in

[src/RouterStrategy.ts:49](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L49)

___

### back

▸ **back**(): `void`

Navigate the history back one entry. This is an alias for [go(-1)](RouterStrategy.RouterStrategy-1.md#go)

#### Returns

`void`

#### Defined in

[src/RouterStrategy.ts:103](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L103)

___

### canBack

▸ **canBack**(): `boolean`

Returns true if can go back 1 entry.
This is the same as calling [canGo(-1)](RouterStrategy.RouterStrategy-1.md#cango)

#### Returns

`boolean`

#### Defined in

[src/RouterStrategy.ts:117](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L117)

___

### canForward

▸ **canForward**(): `boolean`

Returns true if can go forward 1 entry.
This is the same as calling [canGo(1)](RouterStrategy.RouterStrategy-1.md#cango)

#### Returns

`boolean`

#### Defined in

[src/RouterStrategy.ts:125](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L125)

___

### canGo

▸ `Abstract` **canGo**(`to`): `boolean`

Returns true, if can be navigated to the given relative index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `number` | Must be an integer |

#### Returns

`boolean`

#### Defined in

[src/RouterStrategy.ts:111](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L111)

___

### clear

▸ `Abstract` **clear**(): `void`

Clears the history stack.

#### Returns

`void`

#### Defined in

[src/RouterStrategy.ts:169](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L169)

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

EventEmitter.emit

#### Defined in

node_modules/@types/node/events.d.ts:82

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:87

___

### forward

▸ **forward**(): `void`

navigate the history forward one entry. This is an alias for [go(1)](RouterStrategy.RouterStrategy-1.md#go)

#### Returns

`void`

#### Defined in

[src/RouterStrategy.ts:96](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L96)

___

### getHistoryLength

▸ `Abstract` **getHistoryLength**(): `number`

Gets the size of the history stack

#### Returns

`number`

#### Defined in

[src/RouterStrategy.ts:77](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L77)

___

### getLocation

▸ `Abstract` **getLocation**(): `string`

Gets the current location.
This is the same as calling [peek(0)](RouterStrategy.RouterStrategy-1.md#peek)

#### Returns

`string`

#### Defined in

[src/RouterStrategy.ts:72](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L72)

___

### getLocationAt

▸ `Abstract` **getLocationAt**(`position`): `string`

Gets the URL at the given index in the history stack

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `number` | index |

#### Returns

`string`

#### Defined in

[src/RouterStrategy.ts:66](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L66)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:79

___

### getRouter

▸ **getRouter**(): [`Router`](Router.Router-1.md)<[`IRouterProps`](../interfaces/Router.IRouterProps.md)\>

Gets the router

#### Returns

[`Router`](Router.Router-1.md)<[`IRouterProps`](../interfaces/Router.IRouterProps.md)\>

#### Defined in

[src/RouterStrategy.ts:20](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L20)

___

### getScrollRestoration

▸ `Abstract` **getScrollRestoration**(): `ScrollRestoration`

Gets the scroll restoration

#### Returns

`ScrollRestoration`

#### Defined in

[src/RouterStrategy.ts:82](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L82)

___

### go

▸ `Abstract` **go**(`to`): `void`

Navigates the history

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `number` | Must be an integer. Negative numbers go back, if possible. Positive goes forward, if possible. Zero does nothing. |

#### Returns

`void`

#### Defined in

[src/RouterStrategy.ts:91](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L91)

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

EventEmitter.listenerCount

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

EventEmitter.listeners

#### Defined in

node_modules/@types/node/events.d.ts:80

___

### off

▸ **off**(`event`, `listener`): [`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/events.d.ts:76

___

### on

▸ **on**(`event`, `listener`): [`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:73

___

### once

▸ **once**(`event`, `listener`): [`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:74

___

### peek

▸ `Abstract` **peek**(`to`): `string`

Returns the URL stored in the history stack at the given relative index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `number` | Must be an integer |

#### Returns

`string`

#### Defined in

[src/RouterStrategy.ts:133](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L133)

___

### peekBack

▸ **peekBack**(): `string`

Returns the URL one entry back.
This is the same as calling [peek(-1)](RouterStrategy.RouterStrategy-1.md#peek)

#### Returns

`string`

#### Defined in

[src/RouterStrategy.ts:147](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L147)

___

### peekForward

▸ **peekForward**(): `string`

Returns the URL one entry forward.
This is the same as calling [peek(1)](RouterStrategy.RouterStrategy-1.md#peek)

#### Returns

`string`

#### Defined in

[src/RouterStrategy.ts:139](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L139)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:85

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Inherited from

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:86

___

### pushState

▸ `Abstract` **pushState**(`url`, `state?`): `void`

Pushes a new entry into the history stack, navigating to the new location.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `state?` | `IDictionary`<`any`\> |

#### Returns

`void`

#### Defined in

[src/RouterStrategy.ts:156](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L156)

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

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:81

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:77

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Inherited from

EventEmitter.removeListener

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

#### Defined in

[src/RouterStrategy.ts:58](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L58)

___

### replaceState

▸ `Abstract` **replaceState**(`url`, `state?`): `void`

Replaces the current entry in the history stack with the new location.
This will navigate the screen to the new location.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `state?` | `IDictionary`<`any`\> |

#### Returns

`void`

#### Defined in

[src/RouterStrategy.ts:164](https://github.com/breautek/router/blob/f2901ca/src/RouterStrategy.ts#L164)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`RouterStrategy`](RouterStrategy.RouterStrategy-1.md)

#### Inherited from

EventEmitter.setMaxListeners

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

EventEmitter.getEventListener

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

EventEmitter.listenerCount

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

EventEmitter.on

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

EventEmitter.once

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

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:26
