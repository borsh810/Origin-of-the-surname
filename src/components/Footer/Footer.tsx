import './Footer.css'

const Footer = () => {
	const today = new Date(),
	year = today.getFullYear();
return(
	<footer>
		<div className='footerwrapper'>
			<span>© {year} All Rights Reserved.</span>
		</div>
		</footer>
)
}

export default Footer