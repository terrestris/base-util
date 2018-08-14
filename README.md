# base-util

[![Greenkeeper badge](https://badges.greenkeeper.io/terrestris/base-util.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/terrestris/base-util.svg?branch=master)](https://travis-ci.org/terrestris/base-util)
[![Coverage Status](https://coveralls.io/repos/github/terrestris/base-util/badge.svg?branch=master)](https://coveralls.io/github/terrestris/base-util?branch=master)

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
