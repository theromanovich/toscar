import React from 'react';
import Header from './components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Content from '../src/components/Content/Content';

import './App.css';
import './Common.css';



function App() {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div className="App">
            <Header/>
            <main>
                <Content/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
