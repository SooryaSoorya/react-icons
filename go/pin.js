
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoPin extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m17.7 27.5l2.5 12.5 2.5-12.5c-0.8 0.1-1.7 0.1-2.5 0.1s-1.8 0-2.5-0.1z m9.9-11.7c-1.3-0.6-2.4-2.3-2.4-3.3v-2.5c0-0.9 0.4-1.5 0.9-2 0.5-0.5 0.9-1.2 0.9-1.8 0-2.1-2.4-3.7-6.8-3.7s-6.9 1.6-6.9 3.7c0 0.6 0.4 1.3 1 1.8 0.4 0.5 0.9 1.1 0.9 2v2.5c0 1-1.2 2.7-2.5 3.3-1.4 0.8-2.7 2.1-2.7 3.5 0 2.8 3.9 5.7 10.2 5.7s10.1-2.8 10.1-5.7c0-1.3-1.2-2.7-2.7-3.5z"/></g>
            </IconBase>
        );
    }
}
