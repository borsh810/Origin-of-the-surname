import styles from './Footer.module.css'

const Footer = () => {
	const today = new Date(),
	year = today.getFullYear();
return(
	<footer>
		<div className={styles.footerwrapper}>
			<span>© {year} All Rights Reserved.</span>
		</div>
		</footer>
)
}

export default Footer