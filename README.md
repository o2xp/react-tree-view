# @o2xp/react-tree-view

[![codecov](https://codecov.io/gh/o2xp/react-tree-view/branch/main/graph/badge.svg?token=X6GULSPACD)](https://codecov.io/gh/o2xp/react-tree-view)
[![Maintainability](https://api.codeclimate.com/v1/badges/30c2b22bc7479d9eb8dc/maintainability)](https://codeclimate.com/github/o2xp/react-tree-view/maintainability)
![Build](https://github.com/o2xp/react-tree-view/actions/workflows/push.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/license-MIT-orange.svg)](https://opensource.org/licenses/MIT)
[![Version](https://badge.fury.io/js/%40o2xp%2Freact-tree-view.svg)](https://badge.fury.io/js/%40o2xp%2Freact-tree-view)
[![Style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Linter: eslint (airbnb)](https://img.shields.io/badge/Linter-Eslint%20(Airbnb)-yellow)](https://github.com/airbnb/javascript)

@o2xp/react-tree-view is a modulable component to build tree view and more !

See a show case [just here](https://o2xp.github.io/react-tree-view/).


# Table of Contents
- [**Getting Started**](#getting-started)
    - [**Installing**](#installing)
    - [**Prop Types**](#prop-types)
- [**Contributing**](#contributing)
- [**Build With**](#build-with)
- [**Contributors**](#contributors)

## Getting Started
### Installing
```sh
$ npm i --s @o2xp/react-tree-view
```

In your file : 
```jsx
// ES6
import React, { useState } from "react";
import TreeView from "@o2xp/react-tree-view";

const data = [
  {
    children: [
      {
        children: [
          {
            id: "file_1_1_1",
            label: "File 1-1-1"
          },
          {
            id: "file_1_1_2",
            label: "File 1-1-2"
          }
        ],
        id: "folder_1_1",
        label: "Folder 1-1"
      },
      {
        id: "folder_1_2",
        label: "Folder 1-2"
      }
    ],
    id: "folder_1",
    label: "Folder 1"
  },
  {
    children: [
      {
        id: "folder_2_1",
        label: "Folder 2-1"
      }
    ],
    id: "folder_2",
    label: "Folder 2"
  }
];

const App = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <TreeView data={data} />
    </div>
  );
};

export default App;
```

[**Live implementation**](https://codesandbox.io/s/react-tree-view-basic-2h3yf) 

To go **further** check all [**examples**](https://github.com/o2xp/react-tree-view/tree/main/examples)

### Prop Types
#### Data Property Required

`data` is an array compose of object with this structure.

| Property | Type | Required? | Description |
|:---|:---:|:---:|:---|
| id | String | yes | An id that is uniq |
| label | String | yes | Label displayed |
| children | Array\<data> | no | And array of data type |

#### Expanded Property Optional

`expand` is an array of string containing ids of data element which are expanded.

| Property | Type | Required? | Description |
|:---|:---:|:---:|:---|
| expand | Array\<String> | yes | Array of id |

#### OnClick Property Optional

`onClick` is a function taking data node as parameter and returning nothing.

| Property | Type | Required? | Description |
|:---|:---:|:---:|:---|
| onClick | (dataNode) => void | yes | Triggered on data node click |

#### OrderBy Property Optional

`orderBy` is and object compose of two array.

| Property | Type | Required? | Description |
|:---|:---:|:---:|:---|
| ids | Array\<String> | yes | Array composed of data node id |
| orders | Array\<String> | yes | Array composed of value "asc" or "desc", see [**lodash documentation**](https://lodash.com/docs/4.17.15#orderBy) |

#### ItemSize Property Optional

`itemSize` is the size of each element.

| Property | Type | Required? | Description |
|:---|:---:|:---:|:---|
| itemSize | Number | yes | Size of element |

#### Row Property Optional

`Row` is react component.

| Property | Type | Required? | Description |
|:---|:---:|:---:|:---|
| Row | React Component | yes | Used to overwrite default row element |


## Contributing
Do you want to contribute to this project ? Great ! You can start by reading our [**contributing guide**](https://github.com/o2xp/react-tree-view/blob/develop/CONTRIBUTING.md).

## Build With
* [react](https://reactjs.org/) - A JavaScript library for building user interfaces
* [rollup](https://github.com/rollup/rollup) - Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the standardized ES module format for code, instead of previous idiosyncratic solutions such as CommonJS and AMD.
* [memoize-one](https://github.com/alexreardon/memoize-one) - A memoization library that only caches the result of the most recent arguments.
* [react-window](https://github.com/bvaughn/react-window) - React window works by only rendering part of a large data set (just enough to fill the viewport). This helps address some common performance bottlenecks:

## Contributors
* [**Morgan Dubois**](https://github.com/MorganDbs)
