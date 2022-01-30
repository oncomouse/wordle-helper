/** @jsxRuntime classic */
/** @jsx jsx */
import { useTheme, jsx } from '@emotion/react';
import useStore from '../features/store';
import mq from '../features/mq';

const BackspaceButton = () => {
  const deleteLetter = useStore((state) => state.deleteLetter);
  const theme = useTheme();
  return (
    <button
      css={mq({
        lineHeight: 1,
        margin: `${theme.button.margin}em`,
        width: [`${theme.button.widthSmall * 1.5}em`, `${theme.button.width * 1.5}em`],
        fontSize: `${theme.button.font.size}em`,
        height: `${theme.button.height}em`,
      })}
      onClick={() => deleteLetter()}
    >
      ⇦
    </button>
  );
};

export default BackspaceButton;
