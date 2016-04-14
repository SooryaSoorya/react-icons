
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdNextWeek extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m18.4 30.9l6.6-6.8-6.6-6.6-1.8 1.6 5 5-5 5z m-1.8-22.5v3.2h6.8v-3.2h-6.8z m6.8-3.4c1.8 0 3.2 1.5 3.2 3.4v3.2h6.8c1.8 0 3.2 1.6 3.2 3.4v18.4c0 1.8-1.4 3.2-3.2 3.2h-26.8c-1.8 0-3.2-1.4-3.2-3.2v-18.4c0-1.8 1.4-3.4 3.2-3.4h6.8v-3.2c0-1.8 1.4-3.4 3.2-3.4h6.8z"/></g>
            </IconBase>
        );
    }
}
