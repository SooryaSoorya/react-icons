
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPublic extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m29.8 29c2.2-2.4 3.6-5.6 3.6-9 0-5.5-3.5-10.4-8.4-12.3v0.7c0 1.8-1.6 3.2-3.4 3.2h-3.2v3.4c0 0.9-0.8 1.6-1.8 1.6h-3.2v3.4h10c0.9 0 1.6 0.7 1.6 1.6v5h1.6c1.5 0 2.8 1.1 3.2 2.4z m-11.4 4.2v-3.2c-1.8 0-3.4-1.6-3.4-3.4v-1.6l-8-8c-0.2 1-0.4 2-0.4 3 0 6.8 5.2 12.4 11.8 13.2z m1.6-29.8c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z"/></g>
            </IconBase>
        );
    }
}
