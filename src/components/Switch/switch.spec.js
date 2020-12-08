import React from 'react';
import { render } from '@testing-library/react';
import Switch from './Switch';

describe('Switch should change between View and Edit mode.', () => {
  test('should be rendered in in view-mode as per default', () => {
    const { getByAltText } = render(<Switch />);
    expect(getByAltText('Enable editor mode')).toBeInTheDocument();
  });

  test('should change between read and edit mode when clicked', () => {
    const { queryByAltText } = render(
      <Switch viewMode={true} setViewMode={() => {}} />
    );
    let enableEditorMode = () => queryByAltText('Enable editor mode');
    let enableViewMode = () => queryByAltText('Enable view mode');

    expect(enableEditorMode()).toBeInTheDocument();
    expect(enableViewMode()).not.toBeInTheDocument();
    enableEditorMode().click();

    expect(enableEditorMode()).not.toBeInTheDocument();
    expect(enableViewMode()).toBeInTheDocument();
    enableViewMode().click();

    expect(enableEditorMode()).toBeInTheDocument();
    expect(enableViewMode()).not.toBeInTheDocument();
  });
});
