interface UploadedFile extends File {
  name: string;
  lastModified: number;
  lastModifiedDate: Date;
  webkitRelativePath: string;
  size: number;
  type: string;
  path: string;
}

export interface ExtendedFile extends UploadedFile {
  preview: string;
}

export interface FileFromApi {
  url: string;
}

export function isFileFromApi(arg: any): arg is FileFromApi {
  return arg.url !== undefined;
}

export function isExtendedFile(arg: any): arg is ExtendedFile {
  return arg.preview !== undefined;
}
