
#Requesitos:
Nodejs v12.14.1 ou superior

#Iniciar projeto 
git clone https://github.com/messiascardoso/nodejsCotacaoViagem.git

#Entrar na pasta do projeto
```
npm install 
```

#Iniciar projeto:
```
npm start 
ou 
node app.js
```
#Realizar teste de API

Plugin VScode => REST Client
./apitTeste.rest

```
####### Post Quote ###########

POST http://localhost:3000/route HTTP/1.1
content-type: application/json

{
    "from": "ABC",
    "to": "BA",
    "price":10
}
```

###### "GET /quote/GRU/SCL" ############
```
GET http://localhost:3000/quote/GRU/SCL
```










