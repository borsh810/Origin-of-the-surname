import styles from './Header.module.css'
const Header = () => {
	return(
		<header >
<div className={styles.wrapper}>
				<button className={styles.button}>
				<span className={styles.green}>W</span><span className={styles.gold}>h</span><span className={styles.clr}>o</span> <span className={styles.green}>A</span><span className={styles.gold}>m</span> <span className={styles.clr}>I</span>
					</button>
			</div>
			<div className={styles.polosa}>
		</div>
		</header>
	)
}

export default Header