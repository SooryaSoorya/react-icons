
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiWine extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m29.3 15.7c0-4.2-1.5-9.3-1.6-9.5-0.2-0.7-0.9-1.2-1.6-1.2h-12.2c-0.7 0-1.4 0.5-1.6 1.2-0.1 0.2-1.6 5.3-1.6 9.5 0 4.6 3.3 8.4 7.7 9.1 0 0.1-0.1 0.1-0.1 0.2v6.7h-1.6c-1 0-1.7 0.7-1.7 1.6s0.7 1.7 1.7 1.7h6.6c1 0 1.7-0.7 1.7-1.7s-0.7-1.6-1.7-1.6h-1.6v-6.7c0-0.1-0.1-0.1-0.1-0.2 4.4-0.7 7.7-4.5 7.7-9.1z m-9.3 6c-3 0-5.4-2.2-5.9-5h11.8c-0.5 2.8-2.9 5-5.9 5z m-5.9-6.7c0.1-2.4 0.7-5.2 1.1-6.7h9.6c0.4 1.5 1 4.3 1.1 6.7h-11.8z"/></g>
            </IconBase>
        );
    }
}
