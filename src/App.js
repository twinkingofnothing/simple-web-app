import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('welcome')}</h1>
        <LanguageSelector />
      </header>

      <main className="App-main">
        <section className="intro-section">
          <p className="description">{t('description')}</p>
          <p className="greeting">{t('greeting')}</p>
        </section>

        <section className="features-section">
          <h2>{t('features.title')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🌐</h3>
              <p>{t('features.languageSwitch')}</p>
            </div>
            <div className="feature-card">
              <h3>💾</h3>
              <p>{t('features.persistence')}</p>
            </div>
            <div className="feature-card">
              <h3>🔍</h3>
              <p>{t('features.detection')}</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="content-grid">
            <div className="content-card">
              <h3>{t('aboutUs')}</h3>
              <p>{t('aboutDescription')}</p>
            </div>
            <div className="content-card">
              <h3>{t('contact')}</h3>
              <p>{t('contactDescription')}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>{t('footer')}</p>
      </footer>
    </div>
  );
}

export default App; 