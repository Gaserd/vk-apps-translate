import React from 'react';
import { View, Panel, PanelHeader, FixedLayout, Button, Div, Textarea, FormLayout, Select } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Forward from '@vkontakte/icons/dist/24/forward';



class App extends React.Component {

	languages = [
		{
			value : 'en',
			text : 'Английский'
		},
		{
			value : 'ru',
			text : 'Русский'
		}
	]

	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			apiKey : 'trnsl.1.1.20190424T093036Z.286892ab4580ac8b.3419dbe26a59c5c44c724fd660b391f96ef4bbb8',
			text : '',
			translateText : [],
			langFrom : 'en',
			langTo : 'ru'
		};
	}

	onChangeText = (e) => {
		const text = e.target.value
		this.setState({ text })
	}

	onClickTranslateButton = () => {
		fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?lang=${this.state.langFrom}-${this.state.langTo}&key=${this.state.apiKey}&text=${this.state.text}`)
		.then(res => res.json())
		.then(data => {
			this.setState({ translateText : data.text })
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
						textAlign : 'center'
					}}>
						<Select style={{
							display : 'inline-block',
							width : '40%'
						}} 
						value={this.state.langFrom}
						onChange={(e) => this.setState({ langFrom : e.target.value })}>
							{ this.languages.map((lang,index) => (
								<option key={index} value={lang.value}>{lang.text}</option>
							))}
						</Select>
						<div style={{
							display : 'inline-block',
							margin : '0 5px',
							color : 'var(--button_primary_background)'
						}}>
							<Icon24Forward />
						</div>
						<Select style={{
							display : 'inline-block',
							width : '40%'
						}} 
						value={this.state.langTo}
						onChange={(e) => this.setState({ langTo : e.target.value })}>
							{ this.languages.map((lang,index) => (
								<option key={index} value={lang.value}>{lang.text}</option>
							))}
						</Select>
					</Div>
					<FormLayout>
						<Textarea 
							top="Введите текст" 
							placeholder="Hello, world!"
							value={this.state.text}
							onChange={this.onChangeText}
						>
						</Textarea>
						<Div>
							{
								this.state.translateText.map((text, index) => (
									<p key={index}>{text}</p>
								))
							}
						</Div>
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
		);
	}
}

export default App;
