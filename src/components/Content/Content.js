import React from 'react';
import Hero from '../Hero/Hero'
import Item from '../Item/Item'
import kaydalova from "../../images/kaydalova.jpeg";
import glolvko from "../../images/golovko.jpeg";
import Form from "../Form/Form";
import Calculator from "../Calculator/Calculator";

function Content() {
    return (
        <div>
            <Hero
                title='Medical hub'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa, cum delectus facere illum molestias recusandae suscipit. Aliquid deleniti ea illo libero, nulla odio quasi reiciendis sapiente velit voluptate voluptates?'
                cta='Contact us'
            />
            <div className="container">
                <Calculator/>
                <Form/>
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

    );
}

export default Content;
