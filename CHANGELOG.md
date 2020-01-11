# Changelog

## 1.0.0-dev
### Breaking Changes
- Project converted to TypeScript and automatically produces typings.
- `Route` prop `path` now should be `url`

## 0.9.1 (Jan 9, 2020)
- dev: Travis config added
- [#17](https://github.com/breautek/router/pull/17) hotfix: `/` now fails matching against any route and will fallback to the index route if available.

## 0.9.0 (January 8, 2020)
- Transitions rework
- Fixed URL change event from firing when the URL hasn't changed.
- [#15](https://github.com/breautek/router/pull/15) - Fixed an issue where a page can be reconstructed when using transitions.

## 0.8.0 (December 19, 2019)
- Subview rendering

## 0.7.0 (December 16, 2019)
- Replaced `url-pattern` with a much more simple, but reliable `URLParser`.

## 0.6.2 (December 16, 2019)
- Dep roll
- Fixed issue with page variables containing underscores being truncated.

## 0.6.1 (December 12, 2019)
- Dep roll for subdependency vulnerabilities

## 0.6.0 (October 16, 2019)
- Replaced bundle tool with rollup. Webpack still used for `npm test`

## 0.5.0 (September 19, 2019)
- Replaced deprecated methods with UNSAFE prefixed versions, or refactored them completely

## 0.4.0 (February 18, 2019)
- Added support for changing the window/tab title.
- Fixed a bug in HashStrategy that caused URL change event to fire with inconsistent URL values
- Added getPageStyles to Page. Provides the ability to set inline styles on the bt_router_Page element.
- Moved to webpack

## 0.3.5 (April 1, 2019)
- Peek API

## 0.3.4 (February 8, 2019)
- Updated dependencies to resolve third-party vulnerabilities

## 0.3.3 (December 5, 2018)
- Updated NPM package information

## 0.3.2 (November 30, 2018)
- Added getLocationAt to router strategies.

## 0.3.1 (November 1, 2018)
- Added URL routing strategy for natural looking URLs

## 0.2.4 (October 24, 2018)
- Birth of CHANGELOG
- Fixed an issue when using pushState on an empty stack
