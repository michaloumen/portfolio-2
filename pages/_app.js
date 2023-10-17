import App from 'next/app';
import '../styles.css';
import LanguageProvider from '../src/hooks/languageProvider';
import Navbar from '../src/components/molecules/Navbar';

export default class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <LanguageProvider>
        <Navbar /> {/* Renderize o Navbar aqui */}
        <Component {...pageProps} />
      </LanguageProvider>
    );
  }
}

