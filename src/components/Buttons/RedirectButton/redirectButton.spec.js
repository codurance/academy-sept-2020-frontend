import { act, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RedirectButton from './RedirectButton';

describe('RedirectButton should', () => {
  const redirect = '/redirect';
  test('have the big size', () => {
    const { getByText } = render(
      <Router>
        <RedirectButton
          redirectUrl={redirect}
          variant={'big'}
          label={'big button'}
        ></RedirectButton>
      </Router>
    );
    expect(getByText('big button')).toBeInTheDocument();
    expect(getByText('big button')).toHaveClass('button--big');
  });
  test('have the small size', () => {
    const { getByText } = render(
      <Router>
        <RedirectButton
          redirectUrl={redirect}
          variant={'small'}
          label={'small button'}
        ></RedirectButton>
      </Router>
    );
    expect(getByText('small button')).toBeInTheDocument();
    expect(getByText('small button')).toHaveClass('button button--small');
  });
  test('do the redirect on simulated click', async () => {
    const { getByText } = render(
      <Router>
        <Switch>
          <Route exact path="/redirect">
            <p>fake route</p>
          </Route>
        </Switch>
        <RedirectButton
          redirectUrl={redirect}
          variant={'small'}
          label={'small button'}
        ></RedirectButton>
      </Router>
    );
    expect(getByText('small button')).toBeInTheDocument();
    getByText('small button').click();

    await act(() => Promise.resolve());
    expect(getByText('fake route')).toBeInTheDocument();
  });
});
