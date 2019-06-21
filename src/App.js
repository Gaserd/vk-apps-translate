import React, { useState, useEffect } from 'react'
import { View, Panel, PanelHeader, Button, Div, Textarea, FormLayout, Select } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import Icon24Repeat from '@vkontakte/icons/dist/24/repeat'
import { languages, checkLanguageAvailability } from './languages'
import connect from '@vkontakte/vkui-connect'
import ReactGA from 'react-ga'
import banner from './banner2.png'
import { getObjectUrl } from './utils'

const apiKey = '5ad374573f56fbca9889cd71b0536db3';
const accountId = '1086';

const widthPercent = '45%';

const styles = {
	externalLink: {
		display : 'block',
		textAlign : 'center',
		backgroundColor : 'var(--header_background)',
		marginTop : '-1px',
		padding : 10,
		color : '#fff',
		textDecoration : 'none'
	},
	banner: {
		width : 320,
		height : 100
	},
	selectWrapper: {
		textAlign : 'center',
		display : 'flex',
		flexDirection : 'row',
		justifyContent : 'center',
		alignItems : 'center'
	},
	select: {
		flexGrow  : 2,
		width : widthPercent
	},
	reverseButton: {
		display : 'inline-block',
		margin : '0 5px',
		color : 'var(--button_primary_background)'
	}
};

const getColor = () => window.document.body.getAttribute('scheme') === 'client_light' ? '#4a4a4a' : '#fff';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [text, setText] = useState('');
	const [translateText, setTranslateText] = useState('');
	const [langFrom, setLangFrom] = useState('en');
	const [langTo, setLangTo] = useState('ru');
	const [error, setError] = useState(false);
	const [fetchedUser, setFetchedUser] = useState(null);

	useEffect(() => {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					ReactGA.initialize('UA-83599084-6', {
						gaOptions: {
							userId: e.detail.data.id
						}
					});
					setFetchedUser(e.detail.data)
					break
				case 'VKWebAppGetUserInfoFailed':
					ReactGA.initialize('UA-83599084-6')
					break
				case 'VKWebAppUpdateConfig':
					if (typeof e.detail.data.scheme !== 'undefined')
						window.document.body.setAttribute('scheme', e.detail.data.scheme)
					break
				default:
					console.log(e.detail.type)
			}
		})
		connect.send('VKWebAppGetUserInfo', {})
		connect.send("VKWebAppUpdateConfig", {})

		const object = getObjectUrl()
		if (object !== null) {
			if (typeof object.text !== 'undefined') {
				setText(object.text)
			}
		}
	}, []);

	const onChangeText = e => {
		setText(e.target.value)
	}

	const onClickTranslateButton = () => {
		const trimedText = text.trim()

		ReactGA.event({
			category: 'Translate',
			action: 'onClickTranslateButton',
			value : JSON.stringify({text, translateText, langFrom, langTo, fetchedUser})
		})

		if (trimedText !== '') {
			fetch(`https://api.multillect.com/translate/json/1.0/${accountId}?method=translate/api/translate&to=${langTo}&text=${trimedText}&sig=${apiKey}`)
			.then(res => res.json())
			.then(data => {
				if (typeof data.result.language !== 'undefined' && data.result.language.code !== null) {
					const code = data.result.language.code
					if (langFrom !== code) {
						if (checkLanguageAvailability(code)) {
							setLangFrom(code)
						}
					}
				}
				setTranslateText(data.result.translated)
			})
			.catch(e => {
				setTranslateText('')
				setError(true)
			})
		} else {
			setTranslateText('')
		}
	}

	const onReverseLanguage = () => {

		ReactGA.event({
			category: 'Translate',
			action: 'onReverseLanguage'
		})

		setLangFrom(langTo);
		setLangTo(langFrom)
	}

	const renderSelect = (value, setFunction) => (
		<Select style={styles.select}
		        value={value}
		        onChange={(e) => setFunction(e.target.value)}>
			{ languages.map((lang,index) => (
				<option key={index} value={lang.value}>{lang.text}</option>
			))}
		</Select>
	)

	return (
		<View activePanel={activePanel}>
			<Panel id='home' theme='white'>
				<PanelHeader>
					Переводчик
				</PanelHeader>
				<a
					style={styles.externalLink}
					href='https://vk.com/clanofnorthwolf'
					target='_blank'
					rel='noopener noreferrer'
				>
					Вступай в <b>Клан Северного Волка <span style={{color:'red'}}>\</span>Киберспорт</b>
				</a>
				<Div style={styles.selectWrapper}>
					{renderSelect(langFrom, setLangFrom)}
					<div
					onClick={() => onReverseLanguage()}
					style={styles.reverseButton}>
						<Icon24Repeat />
					</div>
					{renderSelect(langTo, setLangTo)}
				</Div>
				<FormLayout>
					<Textarea
						top="Введите текст (макс: 300 символов)"
						placeholder="Введите текст, который хотите перевести"
						value={text}
						onChange={onChangeText}
						maxLength={300}
					>
					</Textarea>
					<Button
						size='xl'
						onClick={() => onClickTranslateButton()}
					>
						Перевести
					</Button>
					{
						translateText !== '' &&
						<div>
						<Div
							style={{
								color : getColor()
							}}
						>
								Перевод:
								<p>{translateText}</p>
						</Div>
						</div>
					}

					{
						error &&
						<Div
							style={{
								color : getColor()
							}}
						>
							<p>Извините, но возникла какая-то ошибка. Попробуйте повторить через 2-3 минуты.</p>
						</Div>
					}
				</FormLayout>
			</Panel>
		</View>
	)
}

export default App
