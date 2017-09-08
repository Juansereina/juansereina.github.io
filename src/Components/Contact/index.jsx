import React, {Component} from 'react'
import styles from './Contact.css'
class Contact extends Component {

    handleSend(event){
        event.preventDefault()
    }
    render() {
        return (
            <div className={`${styles.root} `}>
                <div className={styles.subroot}>
                    <form className={styles.containerForm}>
                        <div className={styles.data_message}>
                            <div className={`${styles.input}`}>
                                <span className={`fa fa-user ${styles.icon} ${styles.item}`}/>
                                <input placeholder="Name" id="name" type="text" className={`${styles.item} validate`}/>
                            </div>
                            <div className={`${styles.input}`}>
                                <span className={`fa fa-vcard ${styles.icon} ${styles.item}`}/>
                                <input placeholder="Email" id="email" type="text" className={`${styles.item} validate`}/>
                            </div>
                        </div>
                        <div className={styles.content_message}>
                            <div className={`${styles.input}`}>
                                <span className={`fa fa-info ${styles.icon} ${styles.item}`}/>
                                <input placeholder="Subject" id="subject" type="text" className="validate"/>
                            </div>
                            <div className={`${styles.input}`}>
                                <span className={`fa fa-comment ${styles.icon} ${styles.item}`}/>
                                <textarea placeholder="Message" id="textarea"
                                          className="materialize-textarea lighten-5 "/>
                            </div>
                        </div>
                        <button className={`${styles.button} btn white-text `} type="submit" name="action" onClick={this.handleSend}>
                            <span>Send</span>
                        </button>
                    </form>
                </div>
                <div className={styles.subroot}/>
            </div>
        )
    }
}

export default Contact