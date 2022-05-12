# Bem vindo ao Desafio Callix - Space X

Este é o frontend do desafio. Aqui mostraremos os dados que tratamos em nossa api/backend de forma simples e direta.

## Observações

Com alguns problemas relacionados a tempo, não consegui fazer algo visualmente atratível, tive que cortar algumas ideias e simplificar outras para poder fazer uma entrega funcional.
Porém irei continuar futuras implementações neste repositório, deixando-o mais robusto e atraente.
Outro ponto em relação à teste A/B, não consegui tempo suficiente para resolver algumas questões relacionadas a este ponto.
Portanto, perdão.

## Como foi desenvolvido?

Basicamente o frontend foi pensado como uma landing page simples com a cara do site oficial da [Space X](https://spacex.com), porém o planejamento não andou como o ocorrido e fiquei com o tempo curto para desenvolver o frontend.

Decidi utilizar Typescript por já estar me adaptando às tendências do mercado e também porque mantém mais organizado e aprova de erros.

Criei então uma estrutura de páginas, porém a única exibida é a Launches que acabou se tornando a home (página principal) da aplicação. Utilizei um componente para cabeçalho e um para o Card.
Fiz as services para fazer as requisições à API e utilizei o useEffect na página para rodar ao carregar a página e chamar as funções dos services.
Fiz algumas funções para criação dos elementos repetitíveis, justamente para não haver repetições de código desnecessárias.

E por fim, o resultado pode ser visto [aqui](https://dcallix-frontend.vercel.app/) ou clonando este repositório e seguindo os passos abaixo já pré-indicados pelo próprio [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
