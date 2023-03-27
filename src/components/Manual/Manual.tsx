import SurnameX from "./SurnameX"
import Ukrainian from "../Characters/Ukrainian"
import Russian from "../Characters/Russian";
import Belarus from "../Characters/Belorus";
import Kazakh from "../Characters/Kazakh";

const data = {
	uk: {
		 nation: 'Україна',
		 ends: ['ун', 'ка', 'ач', 'ок', 'юх', 'ах', 'ыш', 'ух', 'ня', 'ина', 'ьо', 'ля', 'та', 'ха', 'ца', 'ака', 'яка', 'га', 'ань', 'аш', 'шин', 'хно', 'ан', 'ян', 'ло', 'ко', 'ра', 'ла', 'ба', 'да', 'ец', 'ей', 'ай', 'ій', 'ар', 'арь', 'ейк', 'очк', 'ар', 'як', 'коваль', 'билоус']
	},
	ru: {
		 nation: 'Росія',
		 ends: ['ый', 'ин', 'ын', 'ев', 'ёв', 'ов', 'ой', 'их', 'ых']
	},
	by: {
		 nation: 'Білорусь',
		 ends: ['ик', 'ык', 'онок', 'енок', 'чик']
	},
	kz: {
		 nation: 'Казахстан',
		 ends: ['ұлы', 'қызы', 'улы', 'кызы', 'тегі']
	}
}

const Manual = (props: any) => {
	
    const surname = props.surname // Витягаємо прізвище з props
	
    if (surname.length > 29) return <span>Упс... Занадто довге прізвище</span> // Перевіряємо чи не перевищує довжину прізвища 29 символів
    else if (surname.length < 4) return <span>Упс... Занадто коротке прізвище</span> // Перевіряємо чи не менше 4 символів


    const country = Object.values(data).find((country) => { // Для кожного об'єкта в об'єкті data
        const {ends} = country // Витягаємо масив ends з об'єкта country
        return ends.find((end) => surname.endsWith(end)) // Перевіряємо чи прізвище закінчується на один з елементів масиву ends
    })

    if (!country) return <span>Упс... Прізвище не визначене</span> // Якщо не належить до жодної з країн, то повертаємо повідомлення

    const {nation} = country // Витягаємо з об'єкта country значення nation
    return <SurnameX story={nation === 'Україна' ? <Ukrainian/> : nation === 'Росія' ? <Russian/> : nation === 'Білорусь' ? <Belarus/> :  <Kazakh/> } nation={nation} surname={surname}></SurnameX> // Повертаємо компонент SurnameX з пропсами
}

export default Manual