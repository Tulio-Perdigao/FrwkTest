Teste de admissão para Framework (frwk)
Autor: Túlio Mitre Perdigão

Este software foi feito com a Angular CLI 11, com projeto em versão 8.3.25 atraves do comando

    npx -p @angular/cli@8.3.25 ng new FrwkTest

Sobre a arquitetura do projeto:

    Todo o conteúdo da aplicação está presente na pasta /app.
    A pasta app foi dividida em tres partes:
        - AppComponent, que é o componente de bootstrap da aplicação;
        - common, que é a pasta de arquivos que pode ser usados em todo o projeto. Esta pasta contém serviços, modelos e componentes compartilhados;
        - pages, que é a pasta com os componentes das páginas a serem feitas.

Para rodar o programa, execute os seguintes comandos:

    npm install

    ng serve -o

Obrigado!




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
