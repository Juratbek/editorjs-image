const exampleData = {
  blocks: [
    {
      type: 'paragraph',
      data: {
        text: 'This is an example of using EditorJs, with @juratbek/editorjs-header package',
      },
    },
    {
      type: 'delimiter',
    },
    {
      type: 'image',
      data: {
        file: {
          url: './image.png',
        },
        caption: 'This is a caption',
      },
    },
  ],
};

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
