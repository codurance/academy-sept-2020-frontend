import { render } from '@testing-library/react';
import React from 'react';
import ModalContainer from './ModalContainer';

describe('ModalContainer should', () => {
  test('be visible', () => {
    render(
      <ModalContainer isHidden={false}>
        <span />
      </ModalContainer>
    );

    const section = document.getElementsByTagName('section');
    expect(section.length === 1).toBeTruthy();
  });

  test('be invisible', () => {
    render(
      <ModalContainer isHidden={true}>
        <span />
      </ModalContainer>
    );

    const section = document.getElementsByTagName('section');
    expect(section.length === 0).toBeTruthy();
  });
});
