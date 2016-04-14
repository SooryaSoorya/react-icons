
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiTimes extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m29 11c-1.3-1.3-3.4-1.3-4.7 0l-4.3 4.3-4.3-4.3c-1.3-1.3-3.4-1.3-4.7 0-1.3 1.3-1.3 3.4 0 4.7l4.3 4.3-4.3 4.3c-1.3 1.3-1.3 3.4 0 4.7 0.6 0.7 1.5 1 2.3 1s1.7-0.3 2.4-1l4.3-4.3 4.3 4.3c0.7 0.7 1.5 1 2.4 1s1.7-0.3 2.3-1c1.3-1.3 1.3-3.4 0-4.7l-4.3-4.3 4.3-4.3c1.3-1.3 1.3-3.4 0-4.7z"/></g>
            </IconBase>
        );
    }
}
