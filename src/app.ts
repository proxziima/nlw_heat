import "dotenv/config";
import express from "express";

import { router } from "./routes";

const app = express();

//É preciso especificar para o Express que ele receba e aceite requisições com o body via json. Usando o código abaixo ele resolve o erro.
app.use(express.json());

app.use(router);

app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    );

app.get("/signin/callback", (request, response) =>{
    
    const { code } = request.query;

    return response.json(code);
})
});

app.listen(4000, () => console.log ('🚀 Server is running on port 4000'));