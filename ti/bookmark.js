
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiBookmark extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m28.3 3.3h-13.3c-2.8 0-5 2.3-5 5v23.4c0 0.8 0.2 1.5 0.5 2.1 1 1.6 3 1.7 4.7 0l5.3-5.3c0.6-0.6 1.7-0.6 2.3 0l5.3 5.3c0.9 0.8 1.7 1.3 2.6 1.3 1.3 0 2.6-1.1 2.6-3.4v-23.4c0-2.7-2.2-5-5-5z m-13.3 3.4h13.3c1 0 1.7 0.7 1.7 1.6v16.5l-4.1-3.7c-2.3-2.2-6.1-2.2-8.5 0l-4.1 3.7v-16.5c0-0.9 0.8-1.6 1.7-1.6z m10.2 19.5c-0.9-1-2.2-1.5-3.5-1.5s-2.6 0.5-3.6 1.5l-4.8 4.8v-3.9l5.2-4.8c1.8-1.6 4.6-1.6 6.3 0l5.2 4.8v3.9l-4.8-4.8z"/></g>
            </IconBase>
        );
    }
}
