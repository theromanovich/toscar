import React from 'react';
import Header from './components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Hero from '../src/components/Hero/Hero';
import Item from '../src/components/Item/Item';
import Clock from '../src/components/Clock/Clock';
import './App.css';
import './Common.css';
import kaydalova from './images/kaydalova.jpeg'
import glolvko from './images/golovko.jpeg'


function App() {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div className="App">
            <Header/>
            <main>
                <Hero
                    title='Medical hub'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa, cum delectus facere illum molestias recusandae suscipit. Aliquid deleniti ea illo libero, nulla odio quasi reiciendis sapiente velit voluptate voluptates?'
                    cta='Contact us'
                />
                <div className="container">
                    <div className="row">
                        <Item
                            name={'Кайдалова Наталья Сергеевна'}
                            image={kaydalova}
                        />
                        <Item
                            name={'Головко Татьяна Ивановна'}
                            image={glolvko}
                        />
                    </div>
                </div>

            </main>
            <Clock/>
            <Footer/>
        </div>
    );
}

export default App;
