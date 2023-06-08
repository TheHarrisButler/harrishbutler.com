// Components
import { Link } from '../ui-components';
// Third Party
import { css } from '@emotion/react';

// Utils
import { routes } from '../utils';

export const HeaderMenu = () => {
  const styles = {
    container: css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '20rem',
    }),
  };

  return (
    <div css={styles.container}>
      <Link label={'About'} href={routes.about()} />
      <Link label={'Blog'} href={routes.blog()} />
      <Link label={'Contact'} href={routes.contact()} />
    </div>
  );
};
