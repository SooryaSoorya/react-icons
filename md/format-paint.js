
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdFormatPaint extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m30 6.6h5v13.4h-13.4v15c0 0.9-0.7 1.6-1.6 1.6h-3.4c-0.9 0-1.6-0.7-1.6-1.6v-18.4h16.6v-6.6h-1.6v1.6c0 1-0.7 1.8-1.6 1.8h-20c-1 0-1.8-0.8-1.8-1.8v-6.6c0-0.9 0.8-1.6 1.8-1.6h20c0.9 0 1.6 0.7 1.6 1.6v1.6z"/></g>
            </IconBase>
        );
    }
}
