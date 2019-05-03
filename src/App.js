import React from 'react'
import { View, Panel, PanelHeader, FixedLayout, Button, Div, Textarea, FormLayout, Select } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import Icon24Repeat from '@vkontakte/icons/dist/24/repeat'
import languages from './languages'
import connect from '@vkontakte/vkui-connect'


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

		if (text !== '') {
			let {
				accountId,
				apiKey,
				langFrom,
				langTo
			} = this.state

			fetch(`https://api.multillect.com/translate/json/1.0/${accountId}?method=translate/api/translate&from=${langFrom}&to=${langTo}&text=${text}&sig=${apiKey}`)
			.then(res => res.json())
			.then(data => {
				this.setState({ translateText : data.result.translated })
			})
			.catch(e => {
				this.setState({ translateText : '' , error : true })
			})
		}
	}

	onReverseLanguage = () => {
		this.setState({
			langFrom : this.state.langTo,
			langTo : this.state.langFrom
		})
	}



	render() {
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
							maxWidth : 200
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
							maxWidth : 200
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
							placeholder="введите текст, который хотите перевести"
							value={this.state.text}
							onChange={this.onChangeText}
							maxLength={300}
						>
						</Textarea>
						{
							this.state.translateText !== '' &&
							<Div>
								{
									<p>{this.state.translateText}</p>
								}
							</Div>
						}
						{
							this.state.error &&
							<Div>
								<p>Извините, но возникла какая-то ошибка. Попробуйте повторить через 2-3 минуты.</p>
							</Div>
						}
					</FormLayout>
					<FixedLayout vertical='bottom'>
						<Div>
							<Button
								size='xl'
								onClick={() => this.onClickTranslateButton()}
							>
								Перевести
							</Button>
						</Div>
					</FixedLayout>
				</Panel>
			</View>
		)
	}
}

export default App
