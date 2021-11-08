[@breautek/router - v2.0.0](../README.md) / [Exports](../modules.md) / [URLStrategy](../modules/URLStrategy.md) / URLStrategy

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
- [getEventListeners](URLStrategy.URLStrategy-1.md#geteventlisteners)
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

[src/URLStrategy.ts:22](https://github.com/breautek/router/blob/04bdd49/src/URLStrategy.ts#L22)

## Properties

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](HashStrategy.HashStrategy-1.md#capturerejectionsymbol)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[captureRejectionSymbol](RouterStrategy.RouterStrategy-1.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:273

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[captureRejections](RouterStrategy.RouterStrategy-1.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:278

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[defaultMaxListeners](RouterStrategy.RouterStrategy-1.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:279

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

node_modules/@types/node/events.d.ts:272

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

[src/RouterStrategy.ts:174](https://github.com/breautek/router/blob/04bdd49/src/RouterStrategy.ts#L174)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[addListener](RouterStrategy.RouterStrategy-1.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:299

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

[src/RouterStrategy.ts:48](https://github.com/breautek/router/blob/04bdd49/src/RouterStrategy.ts#L48)

___

### back

▸ **back**(): `void`

Navigate the history back one entry. This is an alias for [go(-1)](URLStrategy.URLStrategy-1.md#go)

#### Returns

`void`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[back](RouterStrategy.RouterStrategy-1.md#back)

#### Defined in

[src/RouterStrategy.ts:102](https://github.com/breautek/router/blob/04bdd49/src/RouterStrategy.ts#L102)

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

[src/RouterStrategy.ts:116](https://github.com/breautek/router/blob/04bdd49/src/RouterStrategy.ts#L116)

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

[src/RouterStrategy.ts:124](https://github.com/breautek/router/blob/04bdd49/src/RouterStrategy.ts#L124)

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

[src/URLStrategy.ts:60](https://github.com/breautek/router/blob/04bdd49/src/URLStrategy.ts#L60)

___

### clear

▸ **clear**(): `void`

Clears the history stack.

#### Returns

`void`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[clear](RouterStrategy.RouterStrategy-1.md#clear)

#### Defined in

[src/URLStrategy.ts:110](https://github.com/breautek/router/blob/04bdd49/src/URLStrategy.ts#L110)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[emit](RouterStrategy.RouterStrategy-1.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:555

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[eventNames](RouterStrategy.RouterStrategy-1.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:614

___

### forward

▸ **forward**(): `void`

navigate the history forward one entry. This is an alias for [go(1)](URLStrategy.URLStrategy-1.md#go)

#### Returns

`void`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[forward](RouterStrategy.RouterStrategy-1.md#forward)

#### Defined in

[src/RouterStrategy.ts:95](https://github.com/breautek/router/blob/04bdd49/src/RouterStrategy.ts#L95)

___

### getHistoryLength

▸ **getHistoryLength**(): `number`

Gets the size of the history stack

#### Returns

`number`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[getHistoryLength](RouterStrategy.RouterStrategy-1.md#gethistorylength)

#### Defined in

[src/URLStrategy.ts:48](https://github.com/breautek/router/blob/04bdd49/src/URLStrategy.ts#L48)

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

[src/URLStrategy.ts:40](https://github.com/breautek/router/blob/04bdd49/src/URLStrategy.ts#L40)

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

[src/URLStrategy.ts:44](https://github.com/breautek/router/blob/04bdd49/src/URLStrategy.ts#L44)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](URLStrategy.URLStrategy-1.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[getMaxListeners](RouterStrategy.RouterStrategy-1.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:471

___

### getRouter

▸ **getRouter**(): [`Router`](Router.Router-1.md)<[`IRouterProps`](../interfaces/Router.IRouterProps.md)\>

Gets the router

#### Returns

[`Router`](Router.Router-1.md)<[`IRouterProps`](../interfaces/Router.IRouterProps.md)\>

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[getRouter](RouterStrategy.RouterStrategy-1.md#getrouter)

#### Defined in

[src/RouterStrategy.ts:19](https://github.com/breautek/router/blob/04bdd49/src/RouterStrategy.ts#L19)

___

### getScrollRestoration

▸ **getScrollRestoration**(): `ScrollRestoration`

Gets the scroll restoration

#### Returns

`ScrollRestoration`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[getScrollRestoration](RouterStrategy.RouterStrategy-1.md#getscrollrestoration)

#### Defined in

[src/URLStrategy.ts:52](https://github.com/breautek/router/blob/04bdd49/src/URLStrategy.ts#L52)

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

[src/URLStrategy.ts:64](https://github.com/breautek/router/blob/04bdd49/src/URLStrategy.ts#L64)

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[listenerCount](RouterStrategy.RouterStrategy-1.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:561

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[listeners](RouterStrategy.RouterStrategy-1.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:484

___

### off

▸ **off**(`eventName`, `listener`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[off](RouterStrategy.RouterStrategy-1.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:444

___

### on

▸ **on**(`eventName`, `listener`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[on](RouterStrategy.RouterStrategy-1.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:330

___

### once

▸ **once**(`eventName`, `listener`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[once](RouterStrategy.RouterStrategy-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:359

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

[src/URLStrategy.ts:56](https://github.com/breautek/router/blob/04bdd49/src/URLStrategy.ts#L56)

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

[src/RouterStrategy.ts:146](https://github.com/breautek/router/blob/04bdd49/src/RouterStrategy.ts#L146)

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

[src/RouterStrategy.ts:138](https://github.com/breautek/router/blob/04bdd49/src/RouterStrategy.ts#L138)

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[prependListener](RouterStrategy.RouterStrategy-1.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:579

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[prependOnceListener](RouterStrategy.RouterStrategy-1.md#prependoncelistener)

#### Defined in

node_modules/@types/node/events.d.ts:595

___

### pushState

▸ **pushState**(`url`, `state?`): `void`

Pushes a new entry into the history stack, navigating to the new location.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `state?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[pushState](RouterStrategy.RouterStrategy-1.md#pushstate)

#### Defined in

[src/URLStrategy.ts:73](https://github.com/breautek/router/blob/04bdd49/src/URLStrategy.ts#L73)

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[rawListeners](RouterStrategy.RouterStrategy-1.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:514

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[removeAllListeners](RouterStrategy.RouterStrategy-1.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:455

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[removeListener](RouterStrategy.RouterStrategy-1.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:439

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

[src/RouterStrategy.ts:57](https://github.com/breautek/router/blob/04bdd49/src/RouterStrategy.ts#L57)

___

### replaceState

▸ **replaceState**(`url`, `state?`): `void`

Replaces the current entry in the history stack with the new location.
This will navigate the screen to the new location.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `state?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Overrides

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[replaceState](RouterStrategy.RouterStrategy-1.md#replacestate)

#### Defined in

[src/URLStrategy.ts:91](https://github.com/breautek/router/blob/04bdd49/src/URLStrategy.ts#L91)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`URLStrategy`](URLStrategy.URLStrategy-1.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`URLStrategy`](URLStrategy.URLStrategy-1.md)

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[setMaxListeners](RouterStrategy.RouterStrategy-1.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:465

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

[src/RouterStrategy.ts:28](https://github.com/breautek/router/blob/04bdd49/src/RouterStrategy.ts#L28)

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`since`** v15.2.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` \| `EventEmitter` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[getEventListeners](RouterStrategy.RouterStrategy-1.md#geteventlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:262

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`since`** v0.9.12

**`deprecated`** Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[listenerCount](RouterStrategy.RouterStrategy-1.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:234

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`since`** v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[on](RouterStrategy.RouterStrategy-1.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:217

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`since`** v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[once](RouterStrategy.RouterStrategy-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[RouterStrategy](RouterStrategy.RouterStrategy-1.md).[once](RouterStrategy.RouterStrategy-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:158
