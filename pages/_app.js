import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // required due to purgeCss removing font awesome icon styling: https://stackoverflow.com/a/66575373

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
