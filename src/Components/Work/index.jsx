import React, {Component} from 'react'
import styles from './Work.css'
import $ from 'jquery'
import Img from 'react-image'

import Lightbox from 'react-image-lightbox';

class Work extends Component {

    constructor(props) {
        super(props)
        this.state = {
            openGallery: false,
            img: null,
            projects: []
        }
    }

    async componentWillMount() {
        await  this.queryBehance()
    }

    queryBehance() {
        const url = 'https://www.behance.net/v2/users/Juanse2296/projects?client_id=pULi7ivaPknVuBz4MV6lFO3Kh8f4xO7u'
        $.ajax({
            url: url,
            type: "GET",
            data: {projects: {}},
            dataType: "jsonp",
        }).done((response) => {
            return this.fillProjects(response["projects"])
        }).fail(() => {
            console.log("Ajax request fails")
        })
    }

    fillProjects(_projects) {
        let projects = _projects.map(project => {
            let newProject = {
                id: project.id,
                thumbnail:project.covers['404'],
                src: project.covers['original'],
                alt: project.name
            }
            return newProject
        })
        return this.setState({
            projects
        })
    }

    renderGallery() {
        const { openGallery, img } = this.state;
        return (
            <div>
                {
                    openGallery &&
                <Lightbox
                    mainSrc={img}
                    onCloseRequest={() => this.setState({openGallery: false, img: null})}
                />
                }
            </div>
        )
    }

    render() {
        return (
            <div className={`${styles.root}`}>
                {this.renderGallery()}
                <div className={styles.grid}>
                    {this.state.projects.map(img => (

                        <Img key={img.id}
                             onClick={ () => this.setState({openGallery: true, img:img.src})}
                             src={img.thumbnail}
                             alt={img.alt}
                             className={`${styles.img} hvr-bob `}/>

                    ))}
                </div>
            </div>
        )
    }
}

export default Work