
A simple component to create loading placeholders without write any SVG line

![gif example](https://github.com/gabrielbs/react-placeholder-loading/blob/master/example/shapes-example.gif)


## Instalation

```
npm i react-placeholder-loading --save
```

## Usage

```jsx
import PlaceholderLoading from 'react-placeholder-loading'

const Example = () => (
  <PlaceholderLoading shape="circle" width={60} height={60} />
)
```


## Props
 - shape: *'rect' | 'circle'*
 - width: *number*
 - height: *number*
 - colorStart?: *string*
 - colorEnd?: *string*
