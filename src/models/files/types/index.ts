
export enum MimeType {
  JPEG = 'image/jpeg',
  JPG  = 'image/jpg',
  PNG  = 'image/png',
  GIF  = 'image/gif',
  PDF  = 'application/pdf'//'./pdf',
};

/** Тип данных по загруженному файлу, например в Rule */
export interface FileType {
  name      : string
  url       : string
  mimetype? : MimeType
  // data: Buffer
  // size: number
  // encoding: string
}

// export type ResFileResult = FileType & { createdAt: string }

export interface FileData {
  size     : number
  name     : string
  mimetype : MimeType
}

export enum FileOperationType {
  RULE_IMAGE = 'rule_image',
  PROFILE    = 'profile',
  INVOICE    = 'invoice'
}

export interface PersistentFileType {
//   _events: [Object: null prototype],
//   _eventsCount: 1,
//   _maxListeners: undefined,
//   lastModifiedDate: 2024-01-12T11:46:37.978Z,
  filepath         : string //'/var/folders/zv/zbjg1qw932v_n1gk96z372n80000gp/T/a7358088a3d582a87f81bff02',
  newFilename      : string //'a7358088a3d582a87f81bff02',
  originalFilename : string //'323181713.jpg',
  mimetype         : MimeType //'image/jpeg',
//   hashAlgorithm: false,
  size             : number //105337,
//   _writeStream: [WriteStream],
//   hash: null,
//   [Symbol(kCapture)]: false
};
