# CORS (Cross-Origin Resource Sharing)

- Por padrão nos navegadores é implementado o SOP (Same-Origin Policy), que resumindo é uma restrição onde somente é permitido request para uma mesma origem.
- Basicamente o CORS é um mecanismo baseado em HTTP Headers que permite o SERVER especificar quais origens ele permite acesso aos seus recursos.
- O CORS proporciona segurança, performance e interoperabilidade.

- Então CORS é algo que acontece no navegador, para resolver é preciso especificar no HEADER (Access-Control-Allow-Origin ) as origens confiáveis, assim o navegador vai verificar se o SERVER confia naquela origem.
- Se sim, o navegador vai permitir que o request seja realizado.
- Se não, o navegador vai bloquear o request.

## Preflight Request

- É um request HTTP OPTIONS antes do request em si que está sendo realizado, o server responde se confia na origem e se a mesma e se é possível utilizar um determinado método.

## Request Simples x Preflight

- Simples: GET, POST, HEAD.
- Preflight = PUT, PATCH, DELETE.

## Headers

- Access-Control-Allow-Origin: Origens.
- Access-Control-Allow-Methods: Métodos.
- Access-Control-Max-Age: Preflight Caching.

## Em caso de CORS tente

- Acesse a aba Network das ferramentas de desenvolvedor e procure em Response Headers por Access-Control-Allow-Origin, caso não exista você precisa habilitar o CORS no SERVER, se existir talvez seu CLIENT não corresponda em uma origem confiável.
- Caso seja Preflight verifique se o método que está utilizando é aceito.

## Apresentação

https://docs.google.com/presentation/d/1omxIWJzTo6Sn-_1ZvNhqEyLBZ_CbadFv_SZQkI5sd4g/edit#slide=id.g1ef482fba68_0_26
