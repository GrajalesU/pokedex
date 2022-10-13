import './sass/app.scss';

import Description from './components/Description';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Description />
        <Footer />
      </div>
    </div>
  );
}

export default App;
