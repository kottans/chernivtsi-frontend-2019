import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isShow: false }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            isShow: !prevState.isShow
        }));
    }

    render() {
        return (
            <div className="item">
                <div className="item__title" onClick={this.toggle}>
                    {this.props.title}
                    {!this.state.isShow ? <div className="item__toggle">+</div> : <div className="item__toggle">-</div>}
                </div>
                {
                    this.state.isShow &&
                    <div className="item__content">
                        <div className="item__date">Date: {this.props.date}</div>
                        <div className="item__lecturer">
                            Lecturer: <a href={this.props.link} className="github-link">{this.props.lecturer}</a>
                        </div>
                    </div>
                }

            </div>
        )
    }
}
export default Item;