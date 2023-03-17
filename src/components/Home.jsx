import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const dishes = [
    { name: 'Greek salad', desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ', price: '12.50', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBU3ESWllEpTAVgTcM37QlCurLPQsjv05Zg&usqp=CAU' },
    { name: 'Brushetta', desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.', price: '8.20', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_x_IVq29sSVY3E2kxEA8BarFhCboDNtH1AA&usqp=CAU' },
    { name: 'Grilled Fish', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.', price: '15.00', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXZ_3SXTu8SwWSC3QZRpZMD6rsfV96cB5VA&usqp=CAU' }
]

function Home() {
    return (
        <>
            <div style={{ backgroundColor: '#495E57', padding: '0px 10px 40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', color: '#fff', marginBottom: 20 }}>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <img style={{ borderRadius: 15, width: 150 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNer3ZiO7eYAEVlGWPj7HsEBdWB0F-JJXsjA&usqp=CAU" alt='sushi' />
                </div>
                <Link to='reserve-table' style={{ backgroundColor: '#F4CE14', padding: 12, borderRadius: 30, border: 'none', fontWeight: 'bold', textDecoration: 'none', color: 'black' }}>Reserve a table</Link>
            </div>
            <div style={{ padding: '0px 10px' }}>
                <h3>ORDER FOR DELIVERY!</h3>
                <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    {['Lanch', 'Main', 'Desserts', 'A La Carta', 'Special'].map(type => <span key={type} style={{ display: 'inline-block', color: 'gray', backgroundColor: 'lightgrey', borderRadius: 15, padding: '5px 10px', margin: 3, fontWeight: 'bold' }}>{type}</span>)}
                </div>
                <div style={{ overflowY: 'auto', height: 320 }}>
                    {dishes.map(dishe => <div key={dishe.name}>
                        <p>{dishe.name}</p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span>{dishe.desc}</span>
                            <img style={{ width: 100 }} src={dishe.photo} alt={dishe.name} />
                        </div>
                        <p>{dishe.price}$</p>
                        <hr />
                    </div>)}
                </div>
            </div>
        </>
    );
}

export default Home
