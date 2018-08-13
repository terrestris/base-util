# base-util

[![Greenkeeper badge](https://badges.greenkeeper.io/terrestris/base-util.svg)](https://greenkeeper.io/)

A set of helper classes for working with strings, objects, etc.

## Installation

```javascript static
npm i @terrestris/base-util
```

## API Documentation

### CsrfUtil

  - **getContentFromMetaTagByName()**
  - **getCsrfValue()**
  - **getCsrfHeaderName()**
  - **getCsrfParameterName()**
  - **getHeader()**
  - **getHeaderObject()**

### Logger

### MathUtil

  - **radToDeg()**
  - **degToRad()**
  - **mod()**

### ObjectUtil

  - **getPathByKeyValue()**
  - **getValue()**

### StringUtil

  - **urlify()**
  - **coerce()**
  - **stringDivider()**
  - **stripHTMLTags()**

### UndoUtil

  - **atLeastOneUndoable()**
  - **atLeastOneRedoable()**

### UrlUtil

  - **read()**
  - **write()**
  - **getBasePath()**
  - **getQueryParams()**
  - **getQueryParam()**
  - **joinQueryParams()**
  - **hasQueryParam()**
  - **createValidGetCapabilitiesRequest()**
  - **bundleOgcRequests()**
  - **objectToRequestString()**
  - **isValid()**
