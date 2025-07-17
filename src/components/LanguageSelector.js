import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'zh_Hant', name: 'Chinese Traditional', nativeName: '繁體中文' }
  ];

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const getCurrentLanguageName = () => {
    const currentLang = languages.find(lang => lang.code === i18n.language);
    return currentLang ? currentLang.nativeName : 'Unknown';
  };

  return (
    <div className="language-selector">
      <label htmlFor="language-select" className="language-label">
        {t('selectLanguage')}:
      </label>
      <select
        id="language-select"
        value={i18n.language}
        onChange={handleLanguageChange}
        className="language-dropdown"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.nativeName}
          </option>
        ))}
      </select>
      <div className="current-language">
        {t('currentLanguage')}: <strong>{getCurrentLanguageName()}</strong>
      </div>
    </div>
  );
};

export default LanguageSelector; 