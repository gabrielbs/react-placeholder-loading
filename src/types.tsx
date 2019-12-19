export type AvailableShapes = 'rect' | 'circle';

export type ShapeInfo = Omit<
  IPlaceholderLoadingProps,
  'colorEnd' | 'colorStart' | 'shape'
>;

export interface IPlaceholderLoadingProps {
  width: number;
  height: number;
  colorStart?: string;
  colorEnd?: string;
  shape: AvailableShapes;
}
