import { FileApi } from 'api/FileApi';
import { notificationError, notificationSuccess } from 'components/Notification';
import { prepareFile } from './prepareFile';

export const uploadImage = async (file: File) => {
  const fdImage = prepareFile(file);
  try {
    const result = FileApi.addImage(fdImage);
    notificationSuccess({
      title: 'Sukces',
      message: 'Poprawnie dodano plik',
    });
    return await result;
  } catch (err) {
    console.error(err);
    notificationError({
      title: 'Wystąpił błąd',
      message: 'Nie udało się dodać pliku',
    });
  }
  return null;
};
