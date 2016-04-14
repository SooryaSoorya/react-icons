
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdSwitchCamera extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m25 25.9l5.9-5.9-5.9-5.9v4.3h-10v-4.3l-5.9 5.9 5.9 5.9v-4.3h10v4.3z m8.4-19.3c1.8 0 3.2 1.6 3.2 3.4v20c0 1.8-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.6-3.2-3.4v-20c0-1.8 1.4-3.4 3.2-3.4h5.4l3-3.2h10l3.1 3.2h5.3z"/></g>
            </IconBase>
        );
    }
}
