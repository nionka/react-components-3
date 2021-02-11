import React from 'react';
import PropTypes from 'prop-types';
import MaterialDay from './MaterialDay';
import MaterialMonth from './MaterialMonth';
import DatepickerMonth from './DatepickerMonth';
import Month from './Month';

export default function Calendar({date}) {
    const dateObj = {
        year: date.getFullYear(),
        month: date.getMonth(),
        dayWeek: date.getDay(),
        day: date.getDate(),
    }
    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <MaterialDay day={dateObj.dayWeek}/>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{dateObj.day}</div>
                    <MaterialMonth month={dateObj.month} />
                    <div className="ui-datepicker-material-year">{dateObj.year}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <DatepickerMonth month={dateObj.month} />&nbsp;<span className="ui-datepicker-year">{dateObj.year}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="ui-datepicker-week-end" />
                    <col className="ui-datepicker-week-end" />
                </colgroup>
                <thead>
                <tr>
                    <th scope="col" title="Понедельник">Пн</th>
                    <th scope="col" title="Вторник">Вт</th>
                    <th scope="col" title="Среда">Ср</th>
                    <th scope="col" title="Четверг">Чт</th>
                    <th scope="col" title="Пятница">Пт</th>
                    <th scope="col" title="Суббота">Сб</th>
                    <th scope="col" title="Воскресенье">Вс</th>
                </tr>
                </thead>
                    <Month data={dateObj} />   
            </table>
        </div>
    );
}

Calendar.proptTypes = {
    date: PropTypes.instanceOf(Date)
}