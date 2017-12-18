import React, {Component} from 'react'
import imgCenter from "../../assets/Images/Logo/center.png"
import imgLeft from "../../assets/Images/Logo/left.png"
import imgRight from "../../assets/Images/Logo/right.png"
import imgBottom from "../../assets/Images/Logo/bottom.png"
import styles from './Logo.css'
import animate from '../Common/animate.css'


class Logo extends Component {


    render() {
        return (
            <div className={styles.root}>
                <div className={styles.log_top}>
                    <Part img={imgLeft} effect={`${animate.animated} ${animate.bounceInLeft}`} description="Reina"/>
                    <Part img={imgCenter} effect={`${animate.animated} ${animate.jackInTheBox}`} description="Reina"/>
                    <Part img={imgRight} effect={`${animate.animated} ${animate.bounceInRight}`} description="Reina"/>
                </div>
                <div className={styles.log_bottom}>
                    <Part img={imgBottom} effect={`${animate.animated} ${animate.bounceInRight}`} description="Interactive design"/>
                </div>
            </div>
        )
    }
}

class Part extends Component {
    constructor(props) {
        super(props)
        this.state = {
            load: 0,
            effect: [this.props.effect, `hvr-bob`]
        }
        {setTimeout(() => {this.setState({load: 1});}, 2000)}
    }
    render() {
        return (
            <div >
                <img className={`${this.state.effect[this.state.load]} ${styles.image}`} src={this.props.img} alt={this.props.description}/>
            </div>
        )
    }
}


export default Logo