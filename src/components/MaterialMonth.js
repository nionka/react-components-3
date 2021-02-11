import PropTypes from 'prop-types';

export default function MaterialMonth({month}) {
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    return (
        <div className="ui-datepicker-material-month">{months[month]}</div>
    )
}

MaterialMonth.propTypes = {
    month: PropTypes.number
}