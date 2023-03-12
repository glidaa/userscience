import { Global } from '@emotion/react';
import globalStyles from '../src/styles/global';

export const decorators = [
  (Story) => (
    <>
      <Global styles={globalStyles} />
      <Story />
    </>
  ),
];
