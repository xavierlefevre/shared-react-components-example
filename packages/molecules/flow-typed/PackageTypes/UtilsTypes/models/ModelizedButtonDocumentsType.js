declare type ModelizedButtonDocumentType = {
  docId: string,
  docType: string,
  url: string,
};

declare type ModelizedButtonDocumentsType = {
  DOC_FACTSHEET?: ModelizedButtonDocumentType,
  DOC_KIID?: ModelizedButtonDocumentType,
  'DOC_FLYER-BPF'?: ModelizedButtonDocumentType,
  DOC_MVI?: ModelizedButtonDocumentType,
};
