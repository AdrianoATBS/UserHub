export async function userService(){
    const response = await fetch('/users');
    if(!response.ok){
        throw new Error('Falha ao buscar os usuários');
    }
    const dados = await response.json();
    return dados;
}