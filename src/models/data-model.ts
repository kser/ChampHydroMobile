export class District {
    id = 0;
    name = '';
    map = '';
    projects: Project[];
  }

export class Project {
    id = 0;
    showMap = false;
    name = '';
    pages: ProjPage[];
  }
  
  export class ProjPage {
    type = '';
    photo1 = '';
    comment1   = '';
    photo2  = '';
    comment2    = '';
  }

  export const projects: Project[] = [
    {
      id: 1,
      showMap: false,
      name: 'Lake Conroe',
      pages: [
        {type: '2-Photo', photo1: '', comment1: 'c1', photo2: '', comment2: 'c2'}
      ]
    },
    {
        id: 2,
        showMap: false,
        name: 'Zube Park',
        pages: [
          {type: '2-Photo', photo1: '', comment1: 'discs', photo2: '', comment2: 'golf'}
        ]
      },
      {
        id: 3,
        showMap: false,
        name: 'Serres DGC',
        pages: [
          {type: '2-Photo', photo1: '', comment1: 'Kyle', photo2: '', comment2: 'is cool'}
        ]
      }
  ];

  export const districts: District[] = [
      {
          id: 1,
          name: 'Josh Account',
          map: '',
          projects: projects
      }
  ]
  

  