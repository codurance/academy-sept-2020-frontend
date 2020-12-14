import React from 'react';
import { render, act } from '@testing-library/react';
import Button from './Button';

describe('Button should', () => {
  test('have the big size', () => {
    const { getByText } = render(
      <Button
        callback={console.log}
        variant={'big'}
        label={'big button'}
      ></Button>
    );
    expect(getByText('big button')).toBeInTheDocument();
    expect(getByText('big button')).toHaveClass('button--big');
  });
  test('have the small size', () => {
    const { getByText } = render(
      <Button
        callback={console.log}
        variant={'small'}
        label={'small button'}
      ></Button>
    );
    expect(getByText('small button')).toBeInTheDocument();
    expect(getByText('small button')).toHaveClass('button button--small');
  });
  test('call callback on simulated click', async () => {
    let mockVar = 0;

    const { getByText } = render(
      <Button
        callback={() => {
          mockVar += 1;
        }}
        variant={'small'}
        label={'small button'}
      ></Button>
    );
    expect(getByText('small button')).toBeInTheDocument();
    getByText('small button').click();

    await act(() => Promise.resolve());
    expect(mockVar == 1).toBeTruthy();
  });
});
