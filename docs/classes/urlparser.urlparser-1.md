[@breautek/router - v1.0.0](../README.md) / [Exports](../modules.md) / [URLParser](../modules/urlparser.md) / URLParser

# Class: URLParser

[URLParser](../modules/urlparser.md).URLParser

Parses the URL for router paths and url-based variables.

## Table of contents

### Constructors

- [constructor](urlparser.urlparser-1.md#constructor)

### Methods

- [parse](urlparser.urlparser-1.md#parse)

## Constructors

### constructor

\+ **new URLParser**(`pattern`: *string*, `allowPartialMatch?`: *boolean*): [*URLParser*](urlparser.urlparser-1.md)

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`pattern` | *string* | - | The URL pattern   |
`allowPartialMatch` | *boolean* | false | If true, the pattern will match again urls that contains the pattern,                                      even if it isn't an exact match.                                      Defaults to false.    |

**Returns:** [*URLParser*](urlparser.urlparser-1.md)

Defined in: [src/URLParser.ts:11](https://github.com/breautek/router/blob/6c82bce/src/URLParser.ts#L11)

## Methods

### parse

▸ **parse**(`url`: *string*): [*IURLParams*](../interfaces/urlparser.iurlparams.md)

Parses the URL and returns the url parameters.
Returns null the url does not match the pattern

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | The url to test    |

**Returns:** [*IURLParams*](../interfaces/urlparser.iurlparams.md)

Defined in: [src/URLParser.ts:31](https://github.com/breautek/router/blob/6c82bce/src/URLParser.ts#L31)
