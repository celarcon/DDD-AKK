import { useTranslation } from 'react-i18next'
import { TranslationButton } from '../../components/TranslationButton'
import { TITLE } from '../../i18n/translations/constants/Translates'

export const Header = () => {
	const [t] = useTranslation('global')
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div className='title'>{t(TITLE)}</div>
			<TranslationButton />
		</div>
	)
}
