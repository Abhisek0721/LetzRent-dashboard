import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faIndianRupeeSign, faPenNib, faTerminal } from '@fortawesome/free-solid-svg-icons';

const Card = ()=>{
    
    let [cards, setCards] = useState([
        {
            "rupee" : "2000",
            "list" : [
                "LetzRent Premium Apparel (T-shirts & Coffee Mug).",
                "Early access to new features & promotions."
            ],
            "tnc": "TNC : Limited to the first 100."
        },
        {
            "rupee" : "5000",
            "list" : [
                "LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag).",
                "Early access to new features & promotions."
            ],
            "tnc": "TNC : Limited to the first 200."
        },
        {
            "rupee" : "10000",
            "list" : [
                "Exclusive interest in owning equity with an investment of ₹50,000 — ₹2,00,000.",
                "Invite to exclusive LetzRent team chat.",
                "LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag).",
                "Early access to new features & promotions."
            ],
            "tnc": "TNC : Equity benefits with no voting rights. Limited to the first 5 investors."
        },
        {
            "rupee" : "25000",
            "list" : [
                "Exclusive interest in owning equity with an investment of ₹3,00,000 — ₹10,00,000.",
                "One-on-one 30 minute video call with Co-Founders.",
                "Invite to exclusive LetzRent team chat.",
                "LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag).",
                "Early access to new features & promotions."
            ],
            "tnc": "TNC : Equity benefits with no voting rights. Limited to the first 5 investors."
        },
        {
            "rupee" : "50000",
            "list" : [
                "Exclusive interest in owning equity with an investment of ₹11,00,000 — ₹30,00,000.",
                "In-Person dinner with Co-Founder in Whitefield, Bangalore.",
                "One-on-one 30 minute video call with Co-Founders.",
                "Invite to exclusive LetzRent team chat.",
                "LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag).",
                "Early access to new features & promotions."
            ],
            "tnc": "TNC : Equity benefits with voting rights. Limited to the first 5 investors."
        },
        {
            "rupee" : "100000",
            "list" : [
                "Exclusive interest in owning equity with an investment of above ₹40,00,000.",
                "LetzRent Weekend Experience: Flight & Hotel on us.",
                "In-Person dinner with Co-Founder in Whitefield, Bangalore.",
                "One-on-one 30 minute video call with Co-Founders.",
                "Invite to exclusive LetzRent team chat.",
                "LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag).",
                "Early access to new features & promotions."
            ],
            "tnc": "TNC : Equity benefits with voting rights(open for discussion of term sheet). Limited to the first 2 investors."
        }
    ]);

    return (
        <>
        {cards && cards.map((item)=>{
            return (
            <div key={item.rupee} className='card mt-10 py-7 px-5 shadow-lg rounded-lg border-2 border-slate-100 w-[95%]'>
                <div>
                    <div>
                        <span className='text-slate-600 text-xl font-bold'><FontAwesomeIcon icon={faIndianRupeeSign} className="mr-2 text-xl"/>{item.rupee}</span>
                    </div>
                    <p className='text-lg text-slate-400 mt-2'>Invest</p>
                </div>
                <div className='my-5'>
                    <p className='text-lg text-slate-500 mt-2'>
                        <FontAwesomeIcon icon={faTerminal} className="text-xs" />
                        {item.list && item.list.map(lst => {
                            return (
                                <li key={lst}>{lst}</li>
                            );
                        })}
                    </p>
                </div>
                <div className='my-5'>
                    <p className='text-lg text-slate-500 mt-2'>
                        <FontAwesomeIcon icon={faPenNib} className="text-xs mr-2" /> {item.tnc}
                    </p>
                </div>
                <div className='w-[100%] flex flex-col justify-center my-5'>
                    <button className='bg-indigo-400 rounded-md px-14 py-2 text-base mx-auto w-[100%]'>
                        <span className='text-white font-semibold'>Invest</span>
                    </button>
                </div>
            </div>
            );
        })}
        </>
    )
}

export default Card;