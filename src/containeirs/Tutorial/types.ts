export interface TutorialStep {
  id: string,
  imageUrl: string;
  description: string;
}
export interface Tutorial {
  step: TutorialStep[]
}
export const tutorialData: Tutorial = [
  {
    id: 1,
    imageUrl: 'url1',
    description: 'New step description',
  },
  {
    id: 2,
    imageUrl: 'url2',
    description: 'New step2 description',
  },
  {
    id: 3,
    imageUrl: 'url3',
    description: 'New step3 description',
  },
  {
    id: 4,
    imageUrl: 'url4',
    description: 'New step4 description',
  },
  {
    id: 5,
    imageUrl: 'url5',
    description: 'New step5 description',
  },
  {
    id: 6,
    imageUrl: 'url6',
    description: 'New step6 description',
  }
]