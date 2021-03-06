# React Native Alegrify UI

## What is React Native Alegrify UI?

[Alegrify](https://alegrify.com) is an innovative solution to track your mental health and to become happier.

As we believe human knowledge should be shared, we made some of our User Interface Elements available 
for everyone who wants to use it.

This repo is a React Native implementation of the available elements.

## How to use

Install the dependency with yarn, npm or any alternative:

```bash
yarn add react-native-alegrify-ui
```

As some components use the react-native-svg dependency, don't forget to link it:

```bash
react-native link react-native-svg
```

Wrap your root component in a styler provider

```js
import { StylerProvider } from 'react-native-styler';

const StyledApp = (
    <StylerProvider>
        <App />
    </StylerProvider>
);

export default StyledApp;
```

Then import any of the available components

```js
import { Button } from 'react-alegrify-ui';
```