import { render } from '@testing-library/react';
import ResourceList from './ResourceList';
import React from 'react';

describe('ResourceList should', () => {
  test('Contains resources', () => {
    const resourcesStub = [
      { url: 'firstUrl', label: 'firstLabel' },
      { url: 'secondUrl', label: 'secondLabel' },
    ];

    const { getByText } = render(<ResourceList resources={resourcesStub} />);
    const listItems = document.getElementsByTagName('li');
    const firstLi = getByText('firstLabel');
    const secondLi = getByText('secondLabel');

    expect(firstLi).toBeInTheDocument();
    expect(firstLi).toHaveAttribute('href', 'firstUrl');
    expect(secondLi).toBeInTheDocument();
    expect(secondLi).toHaveAttribute('href', 'secondUrl');
    expect(listItems.length === 2).toBeTruthy();
  });
  test('Be empty', () => {
    render(<ResourceList />);
    const listItems = document.getElementsByTagName('li');

    expect(listItems.length === 0).toBeTruthy();
  });
});
