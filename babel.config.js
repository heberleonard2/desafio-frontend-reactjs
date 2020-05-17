module.exports = {
	presets: [
		/*Converte um codigo de um javascript mais moderno para um javascript
			que o brownser entende */
		'@babel-presetenv',
		/*Vai adicionar funcionalidades do React nessa conversão. Vai converter
			JSX pra que o brownser entenda */
		'@babel-presetreact'
	]
}