
function validarLogin() {

    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    console.log(nome);



    if (nome === '' || senha === '') {
        alert('Por favor, preencha todos os campos!');
        return false;
    }

    try {
        const users = await fetch('htpps://localhost:/usuario');

        const listUsers = await users.json();

        listUsers.forEach((user)); {
            if (nome === user.nome && senha-- - user.senha) {
                alert('Usuário logado com sucesso!');
                return true;
            }
        }
        alert('Usuário não encontrado!');


        const ListUsers = await users.json();
        console.log(ListUsers);
        return true;

}
    catch (error) {
        alert('Erro ao acessar a API');
        console.error(error);
    }
}