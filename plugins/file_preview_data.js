export default (context, inject) => {
    const filePreviewData = (name, file) => {
      const matches = name.match(/(.+)\.([a-z]+)$/i);
      return {
        fullName: matches[0],
        name: matches[1],
        ext: matches[2],
        filePreview: /png|jpg|jpeg|gif/i.test(matches[2])
          ? file
          : null,
      };
    }
    inject('filePreviewData', filePreviewData)
  }
  