import React from 'react';
import ReactDOM from 'react-dom/client';
import stylesheet from './index.css'

function App(){
    return <div className="container">
    <Header />
    <Menu />
    {/* <Pizza name="Focaccia" image="\pizzas\focaccia.jpg" price="10" description="test1" />
    <Pizza name="Funghi" image="\pizzas\funghi.jpg" price="10" description="test2" /> */}
    {/* <Pizza name="Margherita" image="\pizzas\margherita.jpg" price="10" description="test3" />
    <Pizza name="Prosciutto" image="\pizzas\prosciutto.jpg" price="10" description="test4" />
    <Pizza name="Salamino" image="\pizzas\salamino.jpg" price="10" description="test5" />
    <Pizza name="Spinaci" image="\pizzas\spinaci.jpg" price="10" description="test6" /> */}
    <Order />
    </div>;
}

// function Header(){
//     return <h1 style={{color:"red",fontSize:"48px",textTransform:"uppercase"}}>Fast React Pizza Co.</h1>
// }

function Header(){
    return <h1 className='header'>Fast React Pizza Co.</h1>
}

function Pizza({name,image,price,description}){
    return <div className='pizza'>
    <img src={image} alt={name}/>
    <h3>{name}</h3>
    <p>{description}</p>
    <p>{price}</p>
    </div>
}

const pizzas = [{name:"Foccacia",image:"\\pizzas\\focaccia.jpg",price:6,description:"Bread with Italian olive oil and rosemary."},
    {name:"Funghi", image:"\\pizzas\\funghi.jpg", price:12, description:"Tomato, mozzarella, mushrooms and onions."},
    {name:"Margherita", image:"\\pizzas\\margherita.jpg", price:10, description:"Tomato and mozzarella."},
    {name:"Prosciutto", image:"\\pizzas\\prosciutto.jpg", price:18, description:"Tomato, mozzarella, ham, aragula and burrata cheese."},
    {name:"Salamino", image:"\\pizzas\\salamino.jpg", price:15, description:"Tomato, mozzarella and pepperoni."},
    {name:"Spinaci", image:"\\pizzas\\spinaci.jpg", price:12, description:"Tomato, mozzarella, spinach and ricotta cheese."}];
const pizzaList = pizzas.map((pizza, index) => <Pizza key={index} name={pizza.name} image={pizza.image} price={pizza.price} description={pizza.description} />)

function Menu(){
    return <div className='menu'>
    <h2 className='menu'>Our Menu</h2>

    <Tagline />
    {/* <Pizza name="Focaccia" image="\pizzas\focaccia.jpg" price=6 description="Bread with Italian olive oil and rosemary." />
    <Pizza name="Funghi" image="\pizzas\funghi.jpg" price=12 description="Tomato, mozzarella, mushrooms and onions." />
    <Pizza name="Margherita" image="\pizzas\margherita.jpg" price=10 description="Tomato and mozzarella." />
    <Pizza name="Prosciutto" image="\pizzas\prosciutto.jpg" price=18 description="Tomato, mozzarella, ham, aragula and burrata cheese." />
    <Pizza name="Salamino" image="\pizzas\salamino.jpg" price=15 description="Tomato, mozzarella and pepperoni." />
    <Pizza name="Spinaci" image="\pizzas\spinaci.jpg" price=12 description="Tomato, mozzarella, spinach and ricotta cheese." /> */}
    <div className="pizzas">{pizzaList}</div>
    </div>
}

// function Footer(){
//     const date = new Date();
//     const curHour = date.getHours()
//     let footerTXT=''
//     if (curHour <= 10 || curHour >= 22){
//         footerTXT = <footer className='footer'>Sorry, we're closed.</footer>
//     } else {
//         footerTXT = <footer className'footer'>We're currently open!</footer>
//     }
//     return footerTXT
// }

function Tagline(){
    const date = new Date();
    const curHour = date.getHours()
    const isOpen = (curHour <= 10 || curHour >= 22)
    return (
        <p>
            {isOpen ? null : "Authentic Italian cuisine, all from our authentic wood-fired pizza ovens." }
        </p>
    )
}

// function Footer(){
//     const date = new Date();
//     const curHour = date.getHours()
//     const isOpen = (curHour <= 10 || curHour >= 22)
//     return (
//         <footer className='footer'>
//             {isOpen ? "Sorry, we're closed." : "We're currently open!"}
//         </footer>
//     )
// }

function Order(){
    const date = new Date();
    const curHour = date.getHours()
    const isOpen = (curHour <= 10 || curHour >= 22)
    return (
        <>
        <footer className='footer'>
             {isOpen ? "Sorry, we're closed." : "We're currently open!"}
        </footer>
        {isOpen ? null : <p className="btn">Order</p>}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);