import PropTypes from 'prop-types';

export default function MaterialDay({day}) {
    const dayWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return (
        <div className="ui-datepicker-material-day">{dayWeek[day]}</div>
    )
}
MaterialDay.propTypes = {
    day: PropTypes.number
}