export const resNodeWithoutOrderBy = [
  {
    children: [
      {
        children: [
          { id: "file_1_1_1", label: "File 1-1-1" },
          { id: "file_1_1_2", label: "File 1-1-2" }
        ],
        id: "folder_1_1",
        label: "Folder 1-1"
      },
      { id: "folder_1_2", label: "Folder 1-2" }
    ],
    id: "folder_1",
    label: "Folder 1",
    hasChildren: true,
    depth: 0,
    collapsed: false
  },
  {
    children: [
      { id: "file_1_1_1", label: "File 1-1-1" },
      { id: "file_1_1_2", label: "File 1-1-2" }
    ],
    id: "folder_1_1",
    label: "Folder 1-1",
    hasChildren: true,
    depth: 1,
    collapsed: false
  },
  {
    id: "file_1_1_1",
    label: "File 1-1-1",
    hasChildren: false,
    depth: 2,
    collapsed: true
  },
  {
    id: "file_1_1_2",
    label: "File 1-1-2",
    hasChildren: false,
    depth: 2,
    collapsed: true
  },
  {
    id: "folder_1_2",
    label: "Folder 1-2",
    hasChildren: false,
    depth: 1,
    collapsed: false
  }
];

export const resNodeWithOrderBy = [
  {
    children: [
      {
        children: [
          { id: "file_1_1_1", label: "File 1-1-1" },
          { id: "file_1_1_2", label: "File 1-1-2" }
        ],
        id: "folder_1_1",
        label: "Folder 1-1"
      },
      { id: "folder_1_2", label: "Folder 1-2" }
    ],
    id: "folder_1",
    label: "Folder 1",
    hasChildren: true,
    depth: 0,
    collapsed: false
  },
  {
    id: "folder_1_2",
    label: "Folder 1-2",
    hasChildren: false,
    depth: 1,
    collapsed: false
  },
  {
    children: [
      { id: "file_1_1_1", label: "File 1-1-1" },
      { id: "file_1_1_2", label: "File 1-1-2" }
    ],
    id: "folder_1_1",
    label: "Folder 1-1",
    hasChildren: true,
    depth: 1,
    collapsed: true
  }
];

export const resDataWithoutOrderBy = [
  {
    children: [
      {
        children: [
          { id: "file_1_1_1", label: "File 1-1-1" },
          { id: "file_1_1_2", label: "File 1-1-2" }
        ],
        id: "folder_1_1",
        label: "Folder 1-1"
      },
      { id: "folder_1_2", label: "Folder 1-2" }
    ],
    id: "folder_1",
    label: "Folder 1",
    hasChildren: true,
    depth: 1,
    collapsed: false
  },
  {
    children: [
      { id: "file_1_1_1", label: "File 1-1-1" },
      { id: "file_1_1_2", label: "File 1-1-2" }
    ],
    id: "folder_1_1",
    label: "Folder 1-1",
    hasChildren: true,
    depth: 2,
    collapsed: false
  },
  {
    id: "file_1_1_1",
    label: "File 1-1-1",
    hasChildren: false,
    depth: 3,
    collapsed: true
  },
  {
    id: "file_1_1_2",
    label: "File 1-1-2",
    hasChildren: false,
    depth: 3,
    collapsed: true
  },
  {
    id: "folder_1_2",
    label: "Folder 1-2",
    hasChildren: false,
    depth: 2,
    collapsed: false
  },
  {
    children: [{ id: "folder_2_1", label: "Folder 2-1" }],
    id: "folder_2",
    label: "Folder 2",
    hasChildren: true,
    depth: 1,
    collapsed: true
  }
];
export const resDataWithOrderBy = [
  {
    children: [{ id: "folder_2_1", label: "Folder 2-1" }],
    id: "folder_2",
    label: "Folder 2",
    hasChildren: true,
    depth: 1,
    collapsed: true
  },
  {
    children: [
      {
        children: [
          { id: "file_1_1_1", label: "File 1-1-1" },
          { id: "file_1_1_2", label: "File 1-1-2" }
        ],
        id: "folder_1_1",
        label: "Folder 1-1"
      },
      { id: "folder_1_2", label: "Folder 1-2" }
    ],
    id: "folder_1",
    label: "Folder 1",
    hasChildren: true,
    depth: 1,
    collapsed: false
  },
  {
    id: "folder_1_2",
    label: "Folder 1-2",
    hasChildren: false,
    depth: 2,
    collapsed: false
  },
  {
    children: [
      { id: "file_1_1_1", label: "File 1-1-1" },
      { id: "file_1_1_2", label: "File 1-1-2" }
    ],
    id: "folder_1_1",
    label: "Folder 1-1",
    hasChildren: true,
    depth: 2,
    collapsed: true
  }
];
