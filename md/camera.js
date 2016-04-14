
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdCamera extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m16.4 36.3c2.7-4.7 5.3-9.4 8.1-14l6 10.6c-2.8 2.3-6.5 3.7-10.5 3.7-1.2 0-2.4-0.1-3.6-0.3z m-12.3-11.3h16.1l-6.1 10.5c-4.8-1.7-8.5-5.7-10-10.5z m3.6-16.2c2.8 4.8 5.6 9.7 8.5 14.6h-12.5c-0.3-1.1-0.3-2.2-0.3-3.4 0-4.4 1.6-8.3 4.3-11.2z m28.6 7.8c0.3 1.1 0.3 2.2 0.3 3.4 0 4.4-1.6 8.3-4.3 11.3l-8-13.8-0.5-0.9h12.5z m-0.4-1.6h-16.1l6.1-10.5c4.8 1.8 8.5 5.7 10 10.5z m-20.2 2.5l-0.2 0.2-6-10.6c2.8-2.3 6.5-3.7 10.5-3.7 1.3 0 2.4 0.1 3.6 0.4z"/></g>
            </IconBase>
        );
    }
}
