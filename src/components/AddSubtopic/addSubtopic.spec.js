import { render } from '@testing-library/react';
import React from 'react';
import AddSubtopic from './AddSubtopic';

let dummySubtopics = [
  { name: 'subtopic1', resources: [] },
  { name: 'subtopic2', resources: [] },
];

describe('AddSubtopic should', () => {
  test('show as many input fields as subtopics has the array', () => {
    const { getByText } = render(
      <AddSubtopic subtopics={dummySubtopics} setSubtopics={() => {}} />
    );

    expect(getByText(dummySubtopics[0].name)).toBeInTheDocument();
    expect(getByText(dummySubtopics[1].name)).toBeInTheDocument();
  });
});
