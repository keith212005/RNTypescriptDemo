import I18n from 'react-native-i18n';

import {en, es} from './index';

export const localize = (name: string, params = {}) => {
  I18n.fallbacks = true;
  I18n.translations = {
    en,
    es,
  };

  return I18n.t(name, params);
};
