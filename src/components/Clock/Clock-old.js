import React, {Component} from 'react'
//

// Функция форматирует время и возвращает строку
function FormattedDate(props) {
    return <h2>Сейчас – {props.date.toLocaleTimeString()}</h2>;
}

// Компонент Clock записанный в виде класса ES6
class ClockOld extends React.Component {
    // инициализация конструктора класса
    constructor(props) {
        super(props);
        // инициализируем state
        this.state = {date: new Date()};
    }

    _tick() {
        // устанавливаем новое время
        this.setState({date: new Date()});
    }

    // Функция componentDidMount() всегда вызывается перед рендером
    componentDidMount() {
        // запускаем отсчет времени
        this.timerID = setInterval(() => this._tick(), 1000);
    }

    // Функция componentWillUnmount() всегда вызывается после рендера
    componentWillUnmount() {
        // останавливаем отсчет времени
        clearInterval(this.timerID);
    }

    // Передаем в рендер разметку с отображением текушего времени
    render() {
        return (
            <div>
                <h1>Привет, Мир!</h1>
                <FormattedDate date={this.state.date}/>
            </div>
        );
    }
}

export default ClockOld;