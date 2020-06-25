function scope() {
	const form = document.querySelector('.form');
	const result = document.querySelector('.result');

	let people = [];

	function responseForm(e) {
		e.preventDefault();

		const nome = document.querySelector('.nome');
		const sobrenome = document.querySelector('.sobrenome');
		const peso = document.querySelector('.peso');
		const altura = document.querySelector('.altura');

		people.push({
			nome: nome.value,
			sobrenome: sobrenome.value,
			peso: peso.value,
			altura: altura.value,
		});

		console.log(people);

		result.innerHTML += `<p>
		Nome: ${nome.value}<br />
		Sobrenome: ${sobrenome.value}<br />
		Peso: ${peso.value}<br />
		Altura: ${altura.value}
		</P>`;
	}

	form.addEventListener('submit', responseForm);
}

scope();