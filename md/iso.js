
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdIso extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m28.4 28.4h-8.4v-2.5h8.4v2.5z m3.2 3.2v-23.2l-23.2 23.2h23.2z m-22.5-19.1v2.5h3.4v3.4h2.5v-3.4h3.4v-2.5h-3.4v-3.4h-2.5v3.4h-3.4z m22.5-7.5c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h23.2z"/></g>
            </IconBase>
        );
    }
}
