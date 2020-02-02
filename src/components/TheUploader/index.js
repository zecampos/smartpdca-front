import React from 'react';

import Dropzone from 'react-dropzone';
import { DropContainer, Item } from './styles';

export default function TheUploader({ onUpload }) {
  return (
    <Dropzone accept="image/*" onDropAccepted={onUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <Item>
            <input {...getInputProps()} />

            <p
              style={{
                textAlign: 'center',
                alignSelf: 'center',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              Arraste seus aruivos aqui
            </p>
          </Item>
        </DropContainer>
      )}
    </Dropzone>
  );
}
