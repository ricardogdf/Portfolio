import styles from "../scss/switch.module.scss"

export default function Ricardo() {
    return (
        <>
        
        <div className={styles.wrapper}>
                <div className={styles.toggle}>
                    <input className={styles.toggleInput} type="checkbox" />
                    <div className={styles.toggleBg}></div>
                    <div className={styles.toggleSwitch}>
                        <div className={styles.toggleSwitchFigure}></div>
                        <div className={styles.toggleSwitchFigureAlt}></div>
                    </div>  
                </div>
            </div>

            
        </>
    )
}