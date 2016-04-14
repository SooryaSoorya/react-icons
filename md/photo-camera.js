
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPhotoCamera extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m20 28.4c4.6 0 8.4-3.8 8.4-8.4s-3.8-8.4-8.4-8.4-8.4 3.8-8.4 8.4 3.8 8.4 8.4 8.4z m-5-25h10l3 3.2h5.4c1.8 0 3.2 1.6 3.2 3.4v20c0 1.8-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.6-3.2-3.4v-20c0-1.8 1.4-3.4 3.2-3.4h5.4z m-0.3 16.6c0-3 2.3-5.3 5.3-5.3s5.3 2.3 5.3 5.3-2.3 5.3-5.3 5.3-5.3-2.3-5.3-5.3z"/></g>
            </IconBase>
        );
    }
}
