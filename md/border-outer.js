
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdBorderOuter extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m15 18.4v3.2h-3.4v-3.2h3.4z m6.6 6.6v3.4h-3.2v-3.4h3.2z m10 6.6v-23.2h-23.2v23.2h23.2z m-26.6-26.6h30v30h-30v-30z m23.4 13.4v3.2h-3.4v-3.2h3.4z m-6.8 0v3.2h-3.2v-3.2h3.2z m0-6.8v3.4h-3.2v-3.4h3.2z"/></g>
            </IconBase>
        );
    }
}
