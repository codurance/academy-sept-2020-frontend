import React from 'react';
import { render } from '@testing-library/react';
import ButtonWrapper from './ButtonWrapper';

describe('ButtonWrapper should', () => {
  test('Wrap the buttons with specific styles', () => {
    render(
      <ButtonWrapper>
        <button />
      </ButtonWrapper>
    );

    const wrapper = document.getElementsByClassName('button-wrapper');
    expect(wrapper.length === 1).toBeTruthy();
  });
});
