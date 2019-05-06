import React from 'react'
import { View, Panel, PanelHeader, Button, Div, Textarea, FormLayout, Select } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import Icon24Repeat from '@vkontakte/icons/dist/24/repeat'
import { languages, checkLanguageAvailability } from './languages'
import connect from '@vkontakte/vkui-connect'
import ReactGA from 'react-ga'


class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			activePanel: 'home',
			accountId : '1086',
			apiKey : '5ad374573f56fbca9889cd71b0536db3',
			text : '',
			translateText : '',
			langFrom : 'en',
			langTo : 'ru',
			error : false
		}
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data })
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
	}

	onChangeText = (e) => {
		const text = e.target.value
		this.setState({ text })
	}

	onClickTranslateButton = () => {
		let text = this.state.text.trim()

		ReactGA.event({
			category: 'Translate',
			action: 'onClickTranslateButton',
			value : JSON.stringify(this.state)
		})

		if (text !== '') {
			let {
				accountId,
				apiKey,
				langTo
			} = this.state

			fetch(`https://api.multillect.com/translate/json/1.0/${accountId}?method=translate/api/translate&to=${langTo}&text=${text}&sig=${apiKey}`)
			.then(res => res.json())
			.then(data => {
				if (typeof data.result.language !== 'undefined' && data.result.language.code !== null) {
					const code = data.result.language.code
					if (this.state.langFrom !== code) {
						if (checkLanguageAvailability(code)) {
							this.setState({ langFrom : code })
						}
					}
				}
				this.setState({ translateText : data.result.translated })
			})
			.catch(e => {
				this.setState({ translateText : '' , error : true })
			})
		} else {
			this.setState({ translateText : '' })
		}
	}

	onReverseLanguage = () => {

		ReactGA.event({
			category: 'Translate',
			action: 'onReverseLanguage'
		})

		this.setState({
			langFrom : this.state.langTo,
			langTo : this.state.langFrom
		})
	}



	render() {

		const widthPercent = '45%'

		return (
			<View activePanel={this.state.activePanel}>
				<Panel id='home' theme='white'>
					<PanelHeader>
						Переводчик
					</PanelHeader>
					<Div style={{
						textAlign : 'center',
						display : 'flex',
						flexDirection : 'row',
						justifyContent : 'center',
						alignItems : 'center'
					}}>
						<Select style={{
							flexGrow  : 2,
							width : widthPercent
						}} 
						value={this.state.langFrom}
						onChange={(e) => this.setState({ langFrom : e.target.value })}>
							{ languages.map((lang,index) => (
								<option key={index} value={lang.value}>{lang.text}</option>
							))}
						</Select>
						<div 
						onClick={() => this.onReverseLanguage()}
						style={{
							display : 'inline-block',
							margin : '0 5px',
							color : 'var(--button_primary_background)'
						}}>
							<Icon24Repeat />
						</div>
						<Select style={{
							flexGrow  : 2,
							width: widthPercent
						}} 
						value={this.state.langTo}
						onChange={(e) => this.setState({ langTo : e.target.value })}>
							{ languages.map((lang,index) => (
								<option key={index} value={lang.value}>{lang.text}</option>
							))}
						</Select>
					</Div>
					<FormLayout>
						<Textarea 
							top="Введите текст (макс: 300 символов)" 
							placeholder="Введите текст, который хотите перевести"
							value={this.state.text}
							onChange={this.onChangeText}
							maxLength={300}
						>
						</Textarea>
						<Button
							size='xl'
							onClick={() => this.onClickTranslateButton()}
						>
							Перевести
						</Button>
						{
							this.state.translateText !== '' &&
							<Div
								style={{
									color : (window.document.body.getAttribute('scheme') === 'client_light') ? '#4a4a4a' : '#fff'
								}}
							>
									<p>{this.state.translateText}</p>
							</Div>
						}
						{
							this.state.error &&
							<Div
								style={{
									color : (window.document.body.getAttribute('scheme') === 'client_light') ? '#4a4a4a' : '#fff'
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
}

export default App
