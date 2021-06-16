const randomDate = () => {
  return new Date(+new Date() - Math.floor(Math.random() * 10000000000)).toString();
};

const randomSize = () => {
  return `${Math.floor(Math.random() * 10)} GB`;
};

export const basicData = [
  {
    children: [
      {
        children: [
          {
            id: "file_1_1_1",
            label: "File 1-1-1"
          },
          {
            id: "file_1_1_2",
            label: "File 1-1-2"
          }
        ],
        id: "folder_1_1",
        label: "Folder 1-1"
      },
      {
        id: "folder_1_2",
        label: "Folder 1-2"
      }
    ],
    id: "folder_1",
    label: "Folder 1"
  },
  {
    children: [
      {
        id: "folder_2_1",
        label: "Folder 2-1"
      }
    ],
    id: "folder_2",
    label: "Folder 2"
  }
];

const data = [
  {
    children: [
      {
        children: [
          {
            id: "file_1_1_1",
            label: "File 1-1-1",
            lastEdit: randomDate(),
            size: randomSize(),
            type: "file"
          },
          {
            id: "file_1_1_2",
            label: "File 1-1-2",
            lastEdit: randomDate(),
            size: randomSize(),
            type: "file"
          }
        ],
        id: "folder_1_1",
        label: "Folder 1-1",
        lastEdit: randomDate(),
        size: randomSize(),
        type: "directory"
      },
      {
        id: "file_1_2",
        label: "File 1-2",
        lastEdit: randomDate(),
        size: randomSize(),
        type: "file"
      }
    ],
    id: "folder_1",
    label: "Folder 1",
    lastEdit: randomDate(),
    size: randomSize(),
    type: "directory"
  },
  {
    children: [
      {
        id: "file_2_1",
        label: "File 2-1",
        lastEdit: randomDate(),
        size: randomSize(),
        type: "file"
      }
    ],
    id: "folder_2",
    label: "Folder 2",
    lastEdit: randomDate(),
    size: randomSize(),
    type: "directory"
  }
];

export default data;
