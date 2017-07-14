import React from 'react'

export default class DatePicker extends React.Component {
  render(){

    return(
      <div className="date-picker">
        <h2>Календарь</h2>
        <div className="date-header">
          <div className="month">
            <span>1</span>
            <span>Апрель</span>
            <span>2</span>
          </div>
          <div className="year">
            <span>2017</span>
          </div>
        </div>
        <div className="date-content">
          <table>
            <tr>
              <td>Пн</td>
              <td>Вт</td>
              <td>Ср</td>
              <td>Чт</td>
              <td>Пт</td>
              <td>Сб</td>
              <td>Вс</td>
            </tr>
            <tr className="dates">
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td className="weekend">6</td>
              <td className="weekend">7</td>
            </tr>
            <tr className="dates">
              <td>10</td>
              <td>12</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td className="weekend">16</td>
              <td className="weekend">17</td>
            </tr>
            <tr className="dates">
              <td>11</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td className="weekend">26</td>
              <td className="weekend">27</td>
            </tr>
            <tr className="dates">
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td className="weekend">26</td>
              <td className="weekend">27</td>
            </tr>
            <tr className="dates">
              <td>31</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td className="weekend today">6</td>
              <td className="weekend">7</td>
            </tr>
            <tr className="dates">
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td className="weekend">6</td>
              <td className="weekend">7</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}
