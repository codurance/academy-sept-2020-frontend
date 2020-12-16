import { fireEvent, waitFor, render } from '@testing-library/react';
import React from 'react';
import Toast from './Toast';

const title = 'title';
const text = 'text';
let isHidden = false;
const setHide = (value) => {
  isHidden = value;
};

beforeEach(() => {
  isHidden = false;
});

describe('Toast should', () => {
  test('should be hidden', () => {
    const { getByText, getByTestId } = render(
      <Toast title={title} textArea={text} isHidden={true} setHide={setHide} />
    );

    expect(getByTestId('toast')).toHaveClass(
      'toast toast--neutral toast--invisible'
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();
  });

  test('should be positive', () => {
    const { getByTestId } = render(
      <Toast
        title={title}
        textArea={text}
        variant="positive"
        isHidden={true}
        setHide={setHide}
      />
    );

    expect(getByTestId('toast')).toHaveClass(
      'toast toast--positive toast--invisible'
    );
  });

  test('should be negative', () => {
    render(
      <Toast
        title={title}
        textArea={text}
        variant="negative"
        isHidden={true}
        setHide={setHide}
      />
    );

    const toast = document.getElementsByClassName('toast--negative');
    expect(toast.length === 1).toBeTruthy();
  });

  test('should be neutral', () => {
    const { getByTestId } = render(
      <Toast title={title} textArea={text} isHidden={true} setHide={setHide} />
    );

    expect(getByTestId('toast')).toHaveClass(
      'toast toast--neutral toast--invisible'
    );
  });

  test('should execute the callback on click', async () => {
    let dummyNumber = 0;
    const callback = () => (dummyNumber += 1);
    const { getByText, getByTestId } = render(
      <Toast
        title={title}
        textArea={text}
        isHidden={true}
        setHide={setHide}
        callbackOnAction={callback}
      />
    );
    fireEvent.click(getByText(title));
    await waitFor(() => expect(dummyNumber === 1).toBeTruthy());
  });

  test.skip('should be invisible on click', async () => {
    const { getByText, debug, getByTestId } = render(
      <Toast
        title={title}
        textArea={text}
        isHidden={isHidden}
        setHide={setHide}
      />
    );
    debug();
    expect(getByTestId('toast')).toHaveClass(
      'toast toast--neutral toast--visible'
    );
    fireEvent.click(getByText(title));

    //TODO investigate how to mock the setState
    await waitFor(() => {
      expect(getByTestId('toast')).toHaveClass(
        'toast toast--neutral toast--invisible'
      );
    });
  });
});
