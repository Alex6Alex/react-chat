import React from 'react'

export default class DatePicker extends React.Component {
  constructor(props){
    super(props)
    let date = new Date()
    let months = [
      'Январь', 'Февраль', 'Март', 'Апрель',
      'Май', 'Июнь', 'Июль', 'Август',
      'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ]

    this.state = {
      date,
      months
    }
  }

  changeDate(month, year){
    let date = this.state.date
    date.setMonth(date.getMonth() + month)
    date.setFullYear(date.getFullYear() + year)
    this.setState({ date: date })
  }

  setDays(){
    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    return(
      <tr>
        {days.map((day, i) => {
          return <td key={i}>{day}</td>
        })}
      </tr>
    )
  }

  setDates(){
    let tableRow = []
    const table = []
    const today = new Date().setHours(0, 0, 0, 0)
    let currentDay = new Date(`${this.state.date.getMonth() + 1}
                              .01.${this.state.date.getFullYear()}`)

    while (currentDay.getDay() !== 1) {
      currentDay.setDate(currentDay.getDate() - 1)
    }

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        let day = `day${j}`

        if (currentDay.getTime() === today){
          day = 'today'
        }

        tableRow.push(
          <td className={day} key={j}>
            {currentDay.getDate()}
          </td>
        )

        currentDay.setDate(currentDay.getDate() + 1)
      }

      table.push(
        <tr className='dates' key={i}>
          {tableRow}
        </tr>
      )

      tableRow = []
    }

    return table
  }

  hidePicker(){
    document.getElementsByClassName('date-header')[0].style.display = 'none'
    document.getElementsByClassName('date-content')[0].style.display = 'none'
    document.getElementsByClassName('date-title')[0].style.display = 'none'
    document.getElementsByClassName('short-date')[0].style.display = 'flex'
  }

  render(){
    const month = this.state.months[this.state.date.getMonth()]
    const year = this.state.date.getFullYear()
    const today = new Date()

    return(
      <div className='date-picker'>
        <div className='date-title'>
          <h2>Календарь</h2>
          <span className='glyphicon glyphicon-chevron-down'
            onClick={this.hidePicker.bind(this)}>
          </span>
        </div>
        <div className='date-header'>
          <div className='month-checker'>
            <span className='glyphicon glyphicon-chevron-left'
              onClick={this.changeDate.bind(this, -1, 0)}>
            </span>
            <span className='month'>
              {month}
            </span>
            <span className='glyphicon glyphicon-chevron-right'
              onClick={this.changeDate.bind(this, 1, 0)}>
            </span>
          </div>
          <div className='year-checker'>
            <span className='glyphicon glyphicon-chevron-left'
              onClick={this.changeDate.bind(this, 0, -1)}>
            </span>
            <span className='year'>
              {year}
            </span>
            <span className='glyphicon glyphicon-chevron-right'
              onClick={this.changeDate.bind(this, 0, 1)}>
            </span>
          </div>
        </div>
        <div className='date-content'>
          <table>
            <tbody>
              { this.setDays() }
              { this.setDates() }
            </tbody>
          </table>
        </div>
        <div className='short-date'>
          <h2>{today.getDate()} {this.state.months[today.getMonth()]}
          {today.getFullYear()}</h2>
        </div>
      </div>
    )
  }
}
