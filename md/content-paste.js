
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdContentPaste extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m31.6 33.4v-26.8h-3.2v5h-16.8v-5h-3.2v26.8h23.2z m-11.6-30c-0.9 0-1.6 0.7-1.6 1.6s0.7 1.6 1.6 1.6 1.6-0.7 1.6-1.6-0.7-1.6-1.6-1.6z m11.6 0c1.8 0 3.4 1.4 3.4 3.2v26.8c0 1.8-1.6 3.2-3.4 3.2h-23.2c-1.8 0-3.4-1.4-3.4-3.2v-26.8c0-1.8 1.6-3.2 3.4-3.2h6.9c0.7-2 2.5-3.4 4.7-3.4s4 1.4 4.7 3.4h6.9z"/></g>
            </IconBase>
        );
    }
}
