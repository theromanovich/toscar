import React from 'react';
import Header from './components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Hero from '../src/components/Hero/Hero';
import Doctor from '../src/components/Doctor/Doctor';
import './App.css';
import './Common.scss';


function App() {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div className="App">
            <Header/>
            <main>
                <Hero/>
                {/*<Doctor*/}
                {/*    name={'Ivanov Petro'}*/}
                {/*    image={ "ivanov" }*/}
                {/*/>*/}
                {/*<Doctor*/}
                {/*    name={'Kobenik Petro'}*/}
                {/*    image={ 'kobenik' }*/}
                {/*/>*/}
                {/*<Doctor*/}
                {/*    name={'Matchnuk Petro'}*/}
                {/*    image={ 'ivanov' }*/}
                {/*/>*/}
                {/*<Doctor name={'Ivanov'} photo={ 'image.png' }/>*/}
                {/*<Doctor name={'Ivanov'} photo={ 'image.png' }/>*/}
            </main>
            <Footer/>
        </div>
    );
}

export default App;
