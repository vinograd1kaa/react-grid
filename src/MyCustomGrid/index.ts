import { compose } from 'lodash/fp';
import { withTranslation } from 'react-i18next';
import Grid from './Grid';

export default compose(withTranslation())(Grid);
