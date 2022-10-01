import './App.css';
import Navigation from './components/Navigation';
import { Container } from 'reactstrap';
import AddProduct from './products/AddProduct';
import ProductList from './products/ProductList';

/*
  JSX (JavaScript XML): Allows us to use JS to write HTML

  React translates [XML -> JS] -> HTML
    [] = JSX

  let div = createElement('div')
  div.attributes.class = 'App';
  div.appendChild(<header>);

  <header class="MyClass" id=""><body>
  <asdf attr="asdf">
*/
/*
  <App /> = App();
*/

/*
  Props: Data passed from a parent component to a child component
    - Object of information
    - Read-only

    {
      title: 'Home Page',
      foo: 'bar',
      num: 1
      ...
    }
*/

function SubTitle(data) {
  // data.title = 'New Title'; // not allowed
  let title = data.title;
  return (
    <h2>{title.toUpperCase()}</h2>
  )
}

function App() {
  let x = 'abc';
  return (
    <div className="App">
      
      <Container>
        <SubTitle title="Home Page" foo="bar" num={1} x={x} func={() => {}} />
        {/* <SubTitle title="About Page" />
        <SubTitle title="Products" /> */}
      </Container>
    </div>
  );
}

export default App;
