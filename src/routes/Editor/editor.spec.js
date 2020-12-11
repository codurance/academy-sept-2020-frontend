import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Editor from './Editor';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';

jest.mock('../../components/Login/GoogleAuthProvider');

function mockGoogleUserAuthenticated() {
  useGoogleAuth.mockImplementationOnce(() => {
    return { fetchWithRefresh: async () => {}, googleUser: true };
  });
}

describe('Editor should render with title and description inputs and publish button', function () {
  test('should render publish button', () => {
    mockGoogleUserAuthenticated();
    const { queryByText } = render(<Editor />);
    expect(queryByText('Publish')).toBeInTheDocument();
  });

  test('should render title and description input fields', () => {
    mockGoogleUserAuthenticated();
    const { queryByLabelText } = render(<Editor />);
    expect(queryByLabelText('learning-path-title')).toBeInTheDocument();
    expect(queryByLabelText('learning-path-description')).toBeInTheDocument();
  });
});

describe('Publish button', () => {
  test('should be disable on empty title or descriptions', () => {
    mockGoogleUserAuthenticated();
    const { getByText } = render(<Editor />);
    expect(getByText('Publish').closest('button')).toHaveAttribute('disabled');
  });

  //TODO fix mockGoogleUserAuthenticated()
  test.skip('should not be disable when title and descriptions are filled', () => {
    mockGoogleUserAuthenticated();
    const titleStub = 'title stub';
    const descriptionStub = 'description stub';
    const { queryByLabelText, getByText, findByText } = render(<Editor />);
    act(async () => {
      await fireEvent.change(queryByLabelText('learning-path-title'), {
        target: { value: titleStub },
      });
      await fireEvent.change(queryByLabelText('learning-path-description'), {
        target: { value: descriptionStub },
      });

      expect(await findByText(titleStub)).toBeInTheDocument();
      expect(await findByText(descriptionStub)).toBeInTheDocument();
      expect(getByText('Publish').closest('button')).toHaveAttribute(
        'disabled'
      );
    });
  });
});
