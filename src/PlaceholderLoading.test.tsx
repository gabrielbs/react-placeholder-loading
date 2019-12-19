import React from 'react';
import { render, wait } from '@testing-library/react';
import PlaceholderLoading from './';

describe('<PlaceholderLoading />', () => {
  it('Should render without crashing', () => {
    const { container } = render(
      <PlaceholderLoading shape="circle" width={50} height={50} />
    );

    expect(container).toBeInstanceOf(HTMLElement);
  });

  it('Should render the correct shape', async () => {
    const { rerender, getByTestId } = render(
      <PlaceholderLoading shape="circle" width={50} height={50} />
    );

    if (getByTestId('shapeElement')) {
      expect(getByTestId('shapeElement').tagName).toBe('circle');
    }

    rerender(<PlaceholderLoading shape="rect" width={50} height={50} />);
    await wait();

    if (getByTestId('shapeElement')) {
      expect(getByTestId('shapeElement').tagName).toBe('rect');
    }
  });

  it('Should render with custom colors', () => {
    const { container } = render(
      <PlaceholderLoading
        colorEnd="#000"
        colorStart="#ccc"
        shape="rect"
        width={50}
        height={50}
      />
    );

    const stops = container.querySelectorAll('stop');

    expect(stops[0].getAttribute('stop-color')).toBe('#ccc');
    expect(stops[1].getAttribute('stop-color')).toBe('#000');
    expect(stops[2].getAttribute('stop-color')).toBe('#ccc');
  });
});
