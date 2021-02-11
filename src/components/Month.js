import PropTypes from 'prop-types';

export default function Month({data}) {
    const begin = new Date(data.year, data.month);
    const next = new Date(data.year, data.month + 1);
    const previous = new Date(data.year, data.month - 1);
    const diff = (next - begin) / (1000 * 3600 * 24);
    let diffPrevious = (begin - previous) / (1000 * 3600 * 24);
    const index = (begin.getDay() + 6) % 7;
    let id = 1;
    
    const table = [];
    let k = 1 - index;
    let f = 1;

    for (let i = 0; i < 6; i++) {
        let tr = [];
        for (let j = 0; j < 7; j++) {
            if (k === data.day) {
                tr.push(<td key={id} className="ui-datepicker-today">{k}</td>)
                id++
            } else if (k > 0 && k <= diff) {
                tr.push(<td key={id}>{k}</td>)
                id++
            } else {
                tr.push(<td key={id} className="ui-datepicker-other-month">{k <= 0 ? (diffPrevious + k) : (f, f++)}</td>);
                id++
            }            
            k++;
        }
        table.push(<tr key={id}>{tr}</tr>)
        id++
    }

    return (
        <tbody>{table}</tbody>
    )
}

Month.propTypes = {
    data: PropTypes.shape({
        year: PropTypes.number,
        month: PropTypes.number,
        dayWeek: PropTypes.number,
        day: PropTypes.number,
    })
}

