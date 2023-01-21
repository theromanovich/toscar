import React from 'react';

import Calculator from "../Calculator/Calculator";
import Hero from '../Hero/Hero'
import Item from '../Item/Item'
import Form from "../Form/Form";
import PersonList from "../PersonList/PersonList";

import kaydalova from "../../images/kaydalova.jpeg";
import glolvko from "../../images/golovko.jpeg";

function Content() {
    return (
        <div>
            <Hero
                title='Medical hub'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa, cum delectus facere illum molestias recusandae suscipit. Aliquid deleniti ea illo libero, nulla odio quasi reiciendis sapiente velit voluptate voluptates?'
                cta='Contact us'
            />
            <div className="container">
                <PersonList/>
                <Calculator/>
                <Form/>
                <Item
                    name={'Кайдалова Наталья Сергеевна'}
                    image={kaydalova}
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aspernatur doloremque
                        illo illum, impedit minima nemo neque nisi, nulla officia optio pariatur quasi quisquam sapiente
                        sed soluta totam veritatis.
                    </p>
                </Item>
                <Item
                    name={'Головко Татьяна Ивановна'}
                    image={glolvko}
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex fugiat id, ipsum ratione
                        temporibus. Cum dolorum esse exercitationem, facere fuga iste laudantium neque nobis nostrum,
                        provident, quas quis recusandae.</p>
                </Item>
            </div>
        </div>

    );
}

export default Content;
