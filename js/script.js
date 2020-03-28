function resu(){
	var ini = document.querySelector('input#inicio')
	var fim = document.getElementById('fim')
	var passo = document.getElementById('passo')
	var res = document.getElementById('res')
	if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
		alert('[ERRO] Preencha os dados corretamente!')
		res.innerHTML = 'Impossivel contar!'
	} else{
		res.innerHTML = ' Contando... <br>'
		let I = Number(ini.value)
		let F = Number(fim.value)
		let P = Number(passo.value)
		if (P <= 0){
			alert('Passo invalido, considerando passo 1')
			P = 1
			
			}
		if(I < F){
			for(let cont=I; cont <= F; cont+=P){
				res.innerHTML += `-> ${cont} \u{1F449} `
			}
			}else{
				for(let cont=I; cont >= F; cont -= P){
					res.innerHTML += `-> ${cont} \u{1F449} `
				}
			}
		res.innerHTML += `\u{1F3C1}`
	
	}
}