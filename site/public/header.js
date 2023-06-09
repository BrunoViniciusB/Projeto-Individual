function carregarHeader() {
    if(validarUsuario() == false){
        document.getElementById('header').innerHTML = 
        `<div class="container">
        <div class="logo">
            <img src="assets/imgs/Dragon-Ball-Logo.png" height="85px">
        </div>
            <div class="indice">
                <ul><a href="index.html">Home</a></ul>
                <ul><a href="historia.html">História</a></ul>
                <ul><a href="cadastro.html">Cadastro</a></ul>
                <ul><a href="login.html">Login</a></ul>
    
            </div>
        </div>`
    } else{
        document.getElementById('header').innerHTML = 
        `<div class="container">
        <div class="logo">
            <img src="https://logosmarcas.net/wp-content/uploads/2021/02/Dragon-Ball-Logo.png" height="85px">
        </div>
            <div class="indice" style = "width: 650px;">
                <ul><a href="index.html">Home</a></ul>
                <ul><a href="Ranking.html">Ranking</a></ul>
                <ul><a href="dashboard.html">Transformações</a></ul>
                
                <div onclick="mostrarPersonagens()" class="estilizacao_botao">
                <button id="botao_personagens">
                    Personagens
                    <div id="id_personagens" class="div_personagens">
                        <a href="goku.html">Goku</a>
                        <a href="vegeta.html">Vegeta</a>    
                        <a href="gohan.html">Gohan</a>
                        <a href="piccolo.html">Piccolo</a>

                    </div>
                </button>
                <img src="https://static.thenounproject.com/png/1123247-200.png" height="15px">
                </div>


                <ul><a href='index.html' onclick = 'sessionStorage.clear()' class="sair" >
                    Sair
                </a></ul>

            </div>
        </div>`


    }
}

function validarUsuario() {
    var username = sessionStorage.USERNAME_USUARIO
    var idUsuario = sessionStorage.ID_USUARIO 

    if(username == null && idUsuario == null) {
        return false
    } else{
        return true
    }
}