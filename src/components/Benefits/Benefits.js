import { Number5, DeliverTime, Manager, USAFlag } from './BenefitsIcons'

const Benefits = () => {
  return (
    <div className='benefits'>
      <div className='benefits__container'>
        <div className='benefits__title'>Наші переваги</div>
        <div className='benefits__wrapper'>
          <div className='benefits__item'>
            <div className='icon'>
              <Number5 />
            </div>
            <div className='title'>5 років на ринку</div>
            <div className='descr'>
              Довіряйте досвіду - 5 років надійної роботи на ринку пригону авто
              зі США
            </div>
          </div>
          <div className='benefits__item'>
            <div className='icon'>
              <DeliverTime />
            </div>
            <div className='title'>Доставка по Україні</div>
            <div className='descr'>
              Aвто зі США прямо під двері. Вам лише залишається отримати його у
              зручний для вас спосіб
            </div>
          </div>
          <div className='benefits__item'>
            <div className='icon'>
              <Manager />
            </div>
            <div className='title'>Персональний менеджер</div>
            <div className='descr'>
              Повний супровід - ваш персональний менеджер з пригону авто
            </div>
          </div>
          <div className='benefits__item'>
            <div className='icon'>
              <USAFlag />
            </div>
            <div className='title'>Представництво в США</div>
            <div className='descr'>
              Повний контроль над процесом пригону авто завдяки нашому
              представництву в США
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Benefits
