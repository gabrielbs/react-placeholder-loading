import { ShapeInfo, AvailableShapes } from 'types';

export const getShapeProps = (shapeInfo: ShapeInfo) => {
  const { width, height } = shapeInfo;
  return (type: AvailableShapes) => {
    const shapeOptions = {
      rect: {
        width,
        height,
      },
      circle: {
        cx: width / 2,
        cy: height / 2,
        r: (height + width) / 4,
      },
    };

    return shapeOptions[type];
  };
};

export const getSvgProps = (shapeInfo: ShapeInfo) => {
  const { width, height } = shapeInfo;
  return (type: AvailableShapes) => {
    const svgProps = {
      rect: {
        width,
        height,
      },
      circle: {
        width: width,
        height: height,
      },
    };

    return svgProps[type];
  };
};
