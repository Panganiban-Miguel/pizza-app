import React from 'react';
import ReactDOM from 'react-dom/client';

function App(){
    return <>
    <Header />
    <Pizza name="Focaccia" image="\pizzas\focaccia.jpg" price="10" description="test1" />
    <Pizza name="Funghi" image="\pizzas\funghi.jpg" price="10" description="test2" />
    <Pizza name="Margherita" image="\pizzas\margherita.jpg" price="10" description="test3" />
    <Pizza name="Prosciutto" image="\pizzas\prosciutto.jpg" price="10" description="test4" />
    <Pizza name="Salamino" image="\pizzas\salamino.jpg" price="10" description="test5" />
    <Pizza name="Spinaci" image="\pizzas\spinaci.jpg" price="10" description="test6" />
    </>;
}

function Header(){
    return <h1>Andy's Pizza Co.</h1>

}

function Pizza({name,image,price,description}){
    return <>
    <h2>${price}</h2>
    <img src={image} alt={name}/>
    <h4>{name}</h4>
    <h4>{description}</h4>
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);