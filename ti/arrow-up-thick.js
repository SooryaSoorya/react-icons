
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiArrowUpThick extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m20 5.3l-10.7 10.7c-1.3 1.3-1.3 3.4 0 4.7s3.4 1.3 4.7 0l2.7-2.7v12.1c0 1.9 1.5 3.4 3.3 3.4 1.8 0 3.3-1.5 3.3-3.4v-12.1l2.7 2.7c0.6 0.6 1.5 1 2.3 1s1.7-0.4 2.4-1c1.3-1.3 1.3-3.4 0-4.7l-10.7-10.7z"/></g>
            </IconBase>
        );
    }
}
