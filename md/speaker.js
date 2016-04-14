
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdSpeaker extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m20 20c2.7 0 5 2.3 5 5s-2.3 5-5 5-5-2.3-5-5 2.3-5 5-5z m0 13.4c4.6 0 8.4-3.8 8.4-8.4s-3.8-8.4-8.4-8.4-8.4 3.8-8.4 8.4 3.8 8.4 8.4 8.4z m0-26.8c-1.9 0-3.4 1.6-3.4 3.4s1.5 3.4 3.4 3.4c1.8 0 3.4-1.6 3.4-3.4s-1.6-3.4-3.4-3.4z m8.4-3.2c1.8 0 3.2 1.4 3.2 3.2v26.8c0 1.8-1.4 3.2-3.2 3.2h-16.8c-1.8 0-3.2-1.4-3.2-3.2v-26.8c0-1.8 1.4-3.2 3.2-3.2h16.8z"/></g>
            </IconBase>
        );
    }
}
