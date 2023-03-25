import styles from './Manual.module.css'
const SurnameX = (props: any) => {
	const ready = props.surname.toLowerCase().replace(/[^а-яіїґёʼ'ўұқ -]/ig, '').trim()
	return(
		<div className={styles.manual}>
			<span><div className={styles.align}><span className={styles.bigger}>Вітаємо!</span><br />Ваше прізвище - { ready.includes(' ') ? ready.split(/\s+/).map((e: string) => e[0].toUpperCase() + e.substring(1)).join(' ') : ready.includes('-') ? ready.split('-').map((e: string) => e[0].toUpperCase() + e.substring(1)).join('-') : ready.toUpperCase()[0] + ready.slice(1)}. Походження прізвища - {props.nation}.</div><br /> {props.story} </span>
		</div>
	)
}

export default SurnameX