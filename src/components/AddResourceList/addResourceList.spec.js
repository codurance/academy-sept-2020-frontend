import { render } from '@testing-library/react';
import React from 'react';
import AddResourceList from './AddResourceList';

describe('AddResourceList should', () => {
  test('show as many input fields as subtopics has the array', () => {
    let dummySubtopics = [
      {
        name: 'subtopic1',
        resources: [
          { label: 'label1', url: 'url1' },
          { label: 'label2', url: 'url3' },
        ],
      },
    ];
    render(
      <AddResourceList
        subtopics={dummySubtopics}
        subtopicIndex={0}
        setSubtopics={() => {}}
      />
    );

    const firstResource = dummySubtopics[0].resources[0];
    const secondResource = dummySubtopics[0].resources[1];
    const inputs = document.getElementsByTagName('input');

    expect(inputs.length === 4).toBeTruthy();
    expect(inputs[0].value === firstResource.label).toBeTruthy();
    expect(inputs[1].value === firstResource.url).toBeTruthy();
    expect(inputs[2].value === secondResource.label).toBeTruthy();
    expect(inputs[3].value === secondResource.url).toBeTruthy();
  });
});
