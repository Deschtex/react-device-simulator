# React Device Simulator

React component that allows visualizing a given component in diferent screen sizes.

![Example](https://raw.githubusercontent.com/Deschtex/react-device-simulator/master/example.png)

## Instalation and usage

Simply add the package:

```bash
yarn add react-device-simulator
```

And wrap a component that you want to have tested with different screen sizes:

```js
import React from 'react'
import { render } from 'react-dom'
import DeviceSimulator from 'react-device-simulator'
import MyComponent from './my-component'

render(
  <div>
    <DeviceSimulator>
      <MyComponent />
    </DeviceSimulator>
  </div>,
  document.getElementById('root')
)
```
