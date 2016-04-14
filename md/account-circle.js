
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdAccountCircle extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m20 32c4.1 0 7.8-2.2 10-5.4-0.1-3.2-6.7-5.1-10-5.1-3.4 0-9.9 1.9-10 5.1 2.2 3.2 5.9 5.4 10 5.4z m0-23.6c-2.7 0-5 2.2-5 5s2.3 5 5 5 5-2.3 5-5-2.3-5-5-5z m0-5c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z"/></g>
            </IconBase>
        );
    }
}
