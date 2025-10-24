import React from 'react';
import ReactDOM from 'react-dom/client';

function App(){
    return <>
    <Header />
    <Pizza name="" image="" price="" description="" />
    </>;
}

function Header(){
    return <h1>Andy's Pizza Co.</h1>

}

function Pizza(name,image,price,description){
    return <>
    
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);