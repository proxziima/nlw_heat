import axios from "axios";

/*
    Receber o código via string code(string)
    Recuperar o acess_token no github
    Verificar se o usuário existe no BD
    --- SIM = Gera um token
    --- NÃO = Cria no BD, gera um token
    Retornar o token com infos do user
*/

class AuthenticateUSerService{

    async execute(code: string) {
        const url = "https://github.com/login/oauth/acess_token";
        axios.defaults.withCredentials = true
        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "application/json"
            },            
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(error => {
            console.log(error.response.data)
        });

        // return response.data;
    }
}

export { AuthenticateUSerService }