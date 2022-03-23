/*
Quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostra o cartão correspondente ao que foi selecionado na listagem. 

pra isso vamos precisar trabalhar com dois elementos 
1- listagem
2- cartão do pokemon
Precisamos criar duas variaveis no JS para trabalhar com os elementos na tela. 

Vamos precisar trablahar com eventos de clique feito pelo usuariona listagem de pokemons. 

-remover a classe aberto só do cartão que está aberto. 
-ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar. 
-remover a classe ativa que marca o pokemon selecionado. 
-adicionar a casse ativo no item da lista selecionado. 

*/ 
/*  Precisamos criar duas variaveis no JS para trabalhar com os elementos da tela*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
console.log(listaSelecaoPokemons)

const pokemonsCard = document.querySelectorAll ('.cartao-pokemon')
console.log (pokemonsCard)

listaSelecaoPokemons.forEach(pokemon => {
    //Vamos precisar trablahar com eventos de clique feito pelo usuariona listagem de pokemons. 
    pokemon.addEventListener('click', () => {
        console.log(pokemon)
        //remover a classe aberto só do cartão que está aberto. 
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        //ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar. 
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = 'cartao-'+ idPokemonSelecionado

        const cartaoPokemonPararAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonPararAbrir.classList.add('aberto')

        //remover a classe ativa que marca o pokemon selecionado. 
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a casse ativo no item da lista selecionado.
        const pokemonSelecionaNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionaNaListagem.classList.add('ativo')
    })
})
