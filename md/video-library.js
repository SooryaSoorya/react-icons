
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdVideoLibrary extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m20 24.1l10-7.5-10-7.5v15z m13.4-20.7c1.8 0 3.2 1.4 3.2 3.2v20c0 1.8-1.4 3.4-3.2 3.4h-20c-1.8 0-3.4-1.6-3.4-3.4v-20c0-1.8 1.6-3.2 3.4-3.2h20z m-26.8 6.6v23.4h23.4v3.2h-23.4c-1.8 0-3.2-1.4-3.2-3.2v-23.4h3.2z"/></g>
            </IconBase>
        );
    }
}
