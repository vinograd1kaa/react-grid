import { compose } from 'lodash/fp';
import { withTranslation } from 'react-i18next';
import Tablet from './Tablet';

export default compose(withTranslation())(Tablet);
