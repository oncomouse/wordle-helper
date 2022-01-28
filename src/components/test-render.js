import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import theme from '../features/theme';

const testRender = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

export default testRender;
