import React, { Component } from 'react';
import { render } from 'react-dom';
import ProductList from './../../../componentes/ProductList/ProductList.js';

const App = ({ message }) => <div>{ message }</div>;

const productos = document.getElementById('productos');


//render(<App message="hola mundo" />, document.getElementById('app'));

render(<ProductList/>,document.getElementById('productos'));