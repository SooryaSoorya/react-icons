
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoLink extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m30 10h-5.4c1.9 1.3 3.6 3.5 4.2 5h1.2c2.5 0 5 2.5 5 5s-2.6 5-5 5h-7.5c-2.5 0-5-2.5-5-5 0-0.9 0.2-1.8 0.7-2.5h-5.4c-0.2 0.8-0.3 1.6-0.3 2.5 0 5 5 10 10 10h7.5s10-5 10-10-5-10-10-10z m-18.8 15h-1.2c-2.5 0-5-2.5-5-5s2.6-5 5-5h7.5c2.5 0 5 2.5 5 5 0 0.9-0.2 1.8-0.7 2.5h5.4c0.2-0.8 0.3-1.6 0.3-2.5 0-5-5-10-10-10h-7.5s-10 5-10 10 5 10 10 10h5.4c-1.9-1.2-3.6-3.5-4.2-5z"/></g>
            </IconBase>
        );
    }
}
