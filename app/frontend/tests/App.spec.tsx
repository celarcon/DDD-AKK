import { render, screen } from '@testing-library/react'
import { Header } from '../src/sections/header/Header'
import i18n from '../src/i18n/i18n'
import esJSON from '../src/i18n/translations/es/global.json'

describe('testSuite', () => {
	beforeEach(() => {
		i18n.init()
	})

	test('App component display header', () => {
		render(<Header />)

		const heading = screen.getByText(esJSON.HEADER.TITLE)

		expect(heading).toBeInTheDocument()
	})
})
