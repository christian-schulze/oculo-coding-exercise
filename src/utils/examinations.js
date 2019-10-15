export const groupByModality = examinations => {
  const withDate = examinations.reduce((images, examination) => {
    examination.images.forEach(image => {
      images.push({
        ...image,
        date: examination.date
      });
    });

    return images;
  }, []);

  const byModality = withDate.reduce((modalities, image) => {
    if (image.modality in modalities) {
      modalities[image.modality].push(image);
    } else {
      modalities[image.modality] = [image];
    }

    return modalities;
  }, {});

  const byModalityArray = Object.keys(byModality).reduce(
    (modalities, modality) => {
      modalities.push({
        modality,
        images: byModality[modality]
      });
      return modalities;
    },
    []
  );

  return byModalityArray;
};
