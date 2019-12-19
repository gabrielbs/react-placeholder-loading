
<p align="center">A simple component to create loading placeholders without write any SVG line</p>
<p align="center">
  <img src="https://github.com/gabrielbs/react-placeholder-loading/blob/master/example/shapes-example.gif">
</p>

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

 ## Inspiration

This component was created inspired by https://github.com/danilowoz/react-content-loader. If you want to have more flexibility creating  your own SVGs or even using some preseted ones this is the one.

This lib was built for you that just dont want to concern about SVG syntax right now.
