import { postFormDataRequest } from './requests';

interface FileResponse {
  url: string;
}

export const FileApi = {
  addImage: (payload: FormData) => postFormDataRequest<FileResponse>('/upload', payload),
};
