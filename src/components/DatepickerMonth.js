import PropTypes from 'prop-types';

export default function DatepickerMonth({month}) {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    return (
        <span className="ui-datepicker-month">{months[month]}</span>
    )
}

DatepickerMonth.propTypes = {
    month: PropTypes.number
}