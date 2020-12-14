import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';

describe('Header should', () => {
  test('redirect to the home when user clicks on the logo', async () => {
    const { getByAltText, getByText } = render(
      <Router>
        <Header>
          <></>
        </Header>
        <Switch>
          <Route exact path="/">
            <div>home</div>
          </Route>
        </Switch>
      </Router>
    );

    const logo = getByAltText('Codurance Logo');
    fireEvent.click(logo);
    await waitFor(() => getByText('home'));
  });
});
