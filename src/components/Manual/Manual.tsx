import SurnameX from "./SurnameX"
import Ukrainian from "../Characters/Ukrainian"
import Russian from "../Characters/Russian"
import Belarus from "../Characters/Belorus"
import Kazakh from '../Characters/Kazakh'

const Manual = (props: any) => {
	const basic = props.surname
	const surname = props.surname.toLowerCase().replace(/[^а-яіїґёʼ'ўұқ-]/ig, '')
	const two = surname.slice(-2)
	const sur = surname.slice(-3)
	const ukrDop = surname.slice(-4)
	if (basic.length > 29) return <div><span>Упс... Занадто довге прізвище</span></div>
	if (surname.length > 4) {
		if (two === 'ун' || two === 'ка' || two === 'ач' || two === 'ок' || two === 'юх' || two === 'ах' || two === 'ыш' || two === 'ух' || two === 'ня' || sur === 'ина' || two === 'ьо' || two === 'ля' || two === 'та' || two === 'ха' || two === 'ца' || sur === 'ака' || sur === 'яка' || two === 'га' || sur === 'ань' || two === 'аш' || sur === 'шин' || sur === 'хно' || two === 'ан' || two === 'ян' || two === 'ло' || two === 'ко' || two === 'ра' || two === 'ла' || two === 'ба' || two === 'да' || two === 'ец' ||  two === 'ей' || two === 'ай' || two === 'ій' || two === 'ар' || sur === 'арь' || ukrDop.includes('ейк') || ukrDop.includes('очк') || two === 'ар' || two === 'як' ||  surname === 'коваль' ||  surname === 'билоус' ) return <div><SurnameX story={<Ukrainian></Ukrainian>} nation='Україна' surname={props.surname}></SurnameX></div>
		if (two === 'ый' || two === 'ин' || two === 'ын' || two === 'ев' || two === 'ёв' || two === 'ов' || two === 'ой' || two === 'их' || two === 'ых') return <div><SurnameX story={<Russian></Russian>} nation='Росія' surname={props.surname}></SurnameX></div>
		if (two === 'ик' || two === 'ык' || ukrDop === 'онок' || ukrDop === 'енок' || sur === 'чик') return <div><SurnameX story={<Belarus></Belarus>} nation='Білорусь' surname={props.surname}></SurnameX></div>
		if (sur === 'ұлы' || ukrDop === 'қызы' || sur === 'улы' || ukrDop === 'кызы' || ukrDop === 'тегі' ) return <div><SurnameX story={<Kazakh></Kazakh>} nation='Казахстан' surname={props.surname}></SurnameX></div>
	}
	return(
		<></>
	)
}

export default Manual