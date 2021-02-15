# Basic React

Criei somente o básico aqui. Vamos desenvolver um app de listagem repositórios de um usuário qualquer do github. O app terá a opção de adicionar um novo repositório ou remover um repositório específico.

## criação do projeto

Para iniciar um projeto react, basta iniciar com o create react-app, o comando ja configura o babel e o webpack da aplicação e agiliza o processo. Este pode ser usado em grande parte dos projetos.

```
yarn create react-app basic-react
```

## JSX

O JSX é uma sintaxe do JavaScript para a criação de componentes React, resumidamente com ela é possível excrever HTML e JS no mesmo bloco de código além de permitir que componentes sejam utilizados como tags HTML.

```JSX
<form>
  <p>Formulário do {name}</p>
  <span>preencha na linguagem - {language}</span>

  <Input />
  <Input />

  <Button onClick={() => {}}>Enviar</Button>

</form>
```

## react-router-dom

Para iniciar a roteirização de paginas, é necessário que se instale a dependência responsável.

```
yarn add react-router-dom
```

Abaixo tem-se um exemplo de home, onde temos o path **/** e o componente a ser reenderizado **Home**

```
<Route path="/" component={Home} />
```

## Conexão com API

Vamos fazer uma integração com a api do github para fazer uma listagem de repositórios. Para isso vamos usar a biblioteca **axios**.

```
yarn add axios
```

## Hooks

- useState

Responsável por armazenar dados no estado do componente. Sempre que o valor de cada state muda, o componente passa por um rerender. O useState recebe o tipo do estado como parâmetro e retorna um array, onde a primeira posição é o nome do estado e o segundo é a função responsável por alterar o mesmo.

```JSX
const [state, setState] = useState([])
```

- useEffect

Responsável por permitir a execução de efeitos assim que o componente é montado/desmontado, ou assim que alguma dependência mude. O useEffect recebe 2 parâmetros, o primeiro é uma função que será executada e o segundo é o array de dependecias do hook. Se o array for vazio, significa que a função é executada somente uma vez; caso alguma dependência seja usada no hook, o array a recebe e o useEffect executa a função toda vez que este valor se altere.

```JSX
useEffect(() => {
    async function loadApiData(){
      const response = await api.get('...');

     return response.data
    }

    loadApiData()
  }, [])
```

- useCallback

Responsável por retornar uma função momorizada. Indicado para funções pesadas,... Redebe como parâmetro uma função e um array de dependência.

```JSX
const handleCalculateÁrea = useCallback(() => {
    return FUNÇÃO
  }, [repositories])
```

- useMemo

Responsável por retornar um valor memorizado. Indicado para formatações de dados,... Redebe como parâmetro uma função e um array de dependência.

```JSX
const formattedData = useMemo(() => {
    return DADOS_FORMATADOS;
  }, [repositories])
```
