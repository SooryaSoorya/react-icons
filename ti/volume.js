
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiVolume extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m28.6 9.7c-0.8 0-1.5 0.3-2.3 0.8l-4.4 2.9c-1.3 0.9-3.7 1.6-5.2 1.6-2.8 0-5 2.2-5 5v3.3c0 2.8 2.2 5 5 5 1.5 0 3.9 0.8 5.1 1.6l4.5 3c0.8 0.5 1.5 0.7 2.3 0.7 1.5 0 3.1-1.1 3.1-3.6v-16.7c0-2.5-1.6-3.6-3.1-3.6z m-5.3 17.2c-1.8-1.1-4.6-1.9-6.6-1.9-1 0-1.7-0.7-1.7-1.7v-3.3c0-0.9 0.7-1.7 1.7-1.7 2 0 4.8-0.8 6.6-1.9v10.5z m5 3.1c0 0.1 0 0.1 0 0.2 0 0-0.1-0.1-0.2-0.1l-3.1-2.1v-12.7l3.2-2.1c0 0 0.1 0 0.1-0.1 0 0.1 0 0.2 0 0.2v16.7z"/></g>
            </IconBase>
        );
    }
}
