import Link from 'next/link'
const Information = () => {
  return (
    <div className='information'>
      <div className='information__container'>
        <div className='breadcrumbs'>
          <Link href='/'>Головна</Link> /{' '}
          <Link href='/information'>Інформація</Link>
        </div>
        <div className='information__title'>
          <span>TOSCAR</span> - більше ніж авто з США
        </div>
        <div className='information__descr'>
          <div>
            <div className='information__subtitle'>Історія компанії</div>
            <p>
              <span>Початок нашої історії 2018 року.</span> У момент, коли авто
              з Європи стали чимось суперечливим та ненадійним, а на ринку
              України стабільністю були неадекватні ціни, виникла потреба у
              рішенні цієї проблеми. Рішенні для усіх, кому потрібен автомобіль.
            </p>
            <p>
              <span>Ми обрали Америку</span> — тому що не дивлячись на нібито
              складну доставку, авто з США варті того, аби купувати та привозити
              їх до України. Краща комплектація, прозора історія, ніяких
              скручених пробігів та ціна – на 20-30% нижча, аніж в Україні.
              Переваг більш ніж достатньо, аби позбутися думки про купівлю
              битої-фарбованої машини на місцевому ринку.
            </p>
            <p>
              <span>Спершу перевірили на собі</span> — і досі їздимо лише на
              авто з Америки. Особистий досвід та досвід вже сотень клієнтів
              дозволяє нам стверджувати, що пригон авто з США – найкращий
              варіант для України
            </p>
          </div>
          <img src='/images/cars_infoPage.jpeg' alt='cars' />
        </div>
        <div className='information__mission'>
          <div className='information__mission-descr'>
            <div className='information__mission-title'>
              Місія компаніїї <span>TOSCAR</span>
            </div>
            <p>
              Із звичайної потреби придбати машину за адекватні гроші народилася
              місія TOSCAR: зробити авто із Америки реальністю для кожного
              покупця.
            </p>
            <p>
              <span>Зробити це так, аби купівля була простою та надійною</span>.
              Аби можна було придбати авто, не думаючи про скручений пробіг чи
              майстерно заховані пошкодження. Не думати, де та в чому був обман.
              Не торгуватися за машину, яка не варта тих грошей.
            </p>
            <p>
              <span>Допомогти купити мрію.</span> Машину, яку клієнт дійсно хоче
              та може собі дозволити. На якій буде їздити комфортно, в кайф,
              відчуваючи усю потужність та якість авто із кращою комплектацією,
              хорошим технічним станом та запасом міцності на роки вперед.
            </p>
            <p>
              <span>Це і є філософія TOSCAR</span>. Це – основа нашого підходу
              до надання послуг та мірило якості.
            </p>
          </div>
          <div className='information__graphic'>
            <div className='wrap'>
              <div>
                <div>40</div>
                <div>авто</div>
              </div>
              <span>2018</span>
            </div>
            <div className='wrap'>
              <div>
                <div>72</div>
                <div>авто</div>
              </div>
              <span>2019</span>
            </div>
            <div className='wrap'>
              <div>
                <div>91</div>
                <div>авто</div>
              </div>
              <span>2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Information
