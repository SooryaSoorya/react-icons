
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoSteps extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m12.8 2.5c-2.9 0-5.3 3.9-5.3 8.8 0 2.6 0.7 5.5 1.3 9.9 0.5 3.4 1.8 6.3 4 6.3s3.7-1.9 3.7-5.4c0-1.2-1-3.1-1-4.7-0.1-2.9 1.9-4 1.9-6.7 0-4.9-1.7-8.2-4.6-8.2z m14.3 10c-2.9 0-4.6 3.3-4.6 8.2 0 2.7 2.1 3.8 2 6.7-0.1 1.6-1 3.5-1 4.7 0 3.5 1.4 5.4 3.6 5.4s3.5-2.9 4-6.3c0.7-4.4 1.4-7.3 1.4-9.9 0-4.9-2.4-8.8-5.4-8.8z"/></g>
            </IconBase>
        );
    }
}
