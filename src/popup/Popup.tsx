import React, { ReactElement } from 'react';
import { Container, Select } from '@mantine/core';

const Popup = () => {
  document.body.style.width = '20rem';
  document.body.style.height = '20rem';

  return (
    <Container p="xl">
      <Select
        label="どの言語に翻訳しますか？"
        defaultValue="EN"
        data={[
          { value: 'EN', label: '英語' },
          { value: 'KR', label: '韓国語' },
          { value: 'ZH', label: '中国語' },
          { value: 'JP', label: '日本語' },
        ]}
      />
    </Container>
  );
};

export default Popup;
