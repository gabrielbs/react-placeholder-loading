import * as React from 'react';
import { IPlaceholderLoadingProps } from './types';
import { getShapeProps, getSvgProps } from './utils';

const PlaceholderLoading = ({
  width,
  height,
  colorStart = '#f0f0f0',
  colorEnd = '#e0e0e0',
  shape,
}: IPlaceholderLoadingProps) => {
  const ShapeElement = shape;
  const shapeProps = getShapeProps({ width, height })(shape);
  const svgProps = getSvgProps({ width, height })(shape);

  return (
    <svg {...svgProps}>
      <ShapeElement
        {...shapeProps}
        role='img'
        data-testid="shapeElement"
        fill="url(#linear-gradient)"
      />
      <defs>
        <linearGradient
          id="linear-gradient"
          x1={'0%'}
          y1={'0%'}
          x2={'100%'}
          y2={'0%'}
        >
          <stop offset={'0%'} stopColor={colorStart}>
            <animate
              attributeName="offset"
              values={`-2; -2; 1`}
              dur="2s"
              keyTimes={'0; 0.70; 1'}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset={'50%'} stopColor={colorEnd}>
            <animate
              attributeName="offset"
              values={`0; 0; 2`}
              dur="2s"
              keyTimes={'0; 0.70; 1'}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset={'100%'} stopColor={colorStart}>
            <animate
              attributeName="offset"
              values={`0; 0; 3`}
              dur="2s"
              keyTimes={'0; 0.90; 1'}
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PlaceholderLoading;
