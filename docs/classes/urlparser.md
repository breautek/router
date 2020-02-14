[@breautek/router - v1.0.0-beta.2](../README.md) › [Globals](../globals.md) › [URLParser](urlparser.md)

# Class: URLParser

Parses the URL for router paths and url-based variables.

## Hierarchy

* **URLParser**

## Index

### Constructors

* [constructor](urlparser.md#constructor)

### Methods

* [parse](urlparser.md#parse)

## Constructors

###  constructor

\+ **new URLParser**(`pattern`: string, `allowPartialMatch`: boolean): *[URLParser](urlparser.md)*

*Defined in [src/URLParser.ts:11](https://github.com/breautek/router/blob/658faf7/src/URLParser.ts#L11)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`pattern` | string | - | The URL pattern |
`allowPartialMatch` | boolean | false | If true, the pattern will match again urls that contains the pattern,                                      even if it isn't an exact match.                                      Defaults to false.  |

**Returns:** *[URLParser](urlparser.md)*

## Methods

###  parse

▸ **parse**(`url`: string): *[IURLParams](../interfaces/iurlparams.md)*

*Defined in [src/URLParser.ts:31](https://github.com/breautek/router/blob/658faf7/src/URLParser.ts#L31)*

Parses the URL and returns the url parameters.
Returns null the url does not match the pattern

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | The url to test  |

**Returns:** *[IURLParams](../interfaces/iurlparams.md)*
