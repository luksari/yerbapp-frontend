interface UploadedFile extends File {
  name: string;
  lastModified: number;
  lastModifiedDate: Date;
  webkitRelativePath: string;
  size: number;
  type: string;
  path: string;
}

interface ExtendedFile extends UploadedFile {
  preview: string;
}

interface FileFromApi {
  url: string;
}
