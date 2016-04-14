
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdExitToApp extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m31.6 5c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.9 0-3.4-1.6-3.4-3.4v-6.6h3.4v6.6h23.2v-23.2h-23.2v6.6h-3.4v-6.6c0-1.8 1.5-3.4 3.4-3.4h23.2z m-14.8 21l4.3-4.4h-16.1v-3.2h16.1l-4.3-4.4 2.3-2.4 8.4 8.4-8.4 8.4z"/></g>
            </IconBase>
        );
    }
}
