import React from 'react';
import { render } from 'react-dom';

const useFetch = (path: string) => {
  // TODO Реализовать загругку юзеров с https://jsonplaceholder.typicode.com
  return ['hello world', false];
};

const App = () => {
  const [data, loading] = useFetch('/posts');

  return <div>
    {/*  TODO: Реализовать вывод на экран данных с сервера*/}
  </div>;
};

render(<App />, document.getElementById('root'));
