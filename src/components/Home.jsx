import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faShare, faIndianRupeeSign, faCoins, faLocationDot, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faChrome } from "@fortawesome/free-brands-svg-icons";
import Card from './Card';
import Pitch from './Pitch';

const Home = ()=>{

    return (
        <div>
            <header className="w-[100%]">
                <div className="mx-auto">
                    <button className="border-2 border-indigo-600 text-indigo-600 md:px-4 md:py-2 px-2 py-1 font-semibold rounded-md hover:bg-indigo-500 hover:text-white shadow-sm mr-2">Dashboard</button>
                    <button  className="text-white bg-pink-600 hover:shadow-lg md:px-4 md:py-2 px-2 py-1 font-semibold rounded-md shadow-sm mr-2">Login Now</button>
                    <button  className="text-white mt-2 bg-pink-600 hover:shadow-lg md:px-4 md:py-2 px-2 py-1 font-semibold rounded-md shadow-sm mr-2">Back to Website</button>
                </div>
                <div className='flex flex-col justify-between lg:flex-row my-10 mx-5'>
                    <div className='flex flex-col md:flex-row'>
                        <div>
                            <img src={require('./img/Letzrent-logo.png')} className="rounded-full w-16 mt-3 ml-5 md:mt-8 md:ml-0" alt=""/>
                        </div>
                        <div className='ml-5 md:ml-7'>
                            <h1 className='text-3xl font-semibold my-2'>LetzRent</h1>
                            <p className='text-sm text-slate-400 my-1'>Address : Mumbai, Maharashtra</p>
                            <p className='text-sm my-2'>
                                <span className='text-green-500'>●</span> EMAIL : | Website : <a href='https://letzrent.com' target="_blank">https://letzrent.com</a> | PAN/TAN : AAJCR3294F
                            </p>
                            <p className='text-xs font-sans'>
                                Online search, compare & booking platform for self-drive cars, 
                                charter flights, living space & more that rewards users.
                            </p>
                            <div className='flex mt-5'>
                                <span className='text-indigo-500 mr-5'><FontAwesomeIcon icon={faUserPlus} className='mr-1' />Follow</span>
                                <span className='text-indigo-500'><FontAwesomeIcon icon={faShare} className='mr-1' />Share</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center md:justify-start md:ml-14'>
                    <span className='px-2 py-1 bg-red-200 font-semibold text-xs rounded-md mr-2'>GEN Z FOUNDER</span>
                    <span className='px-2 py-1 font-semibold text-xs rounded-md mr-2'>MOBILITY</span>
                    <span className='px-2 py-1 font-semibold text-xs rounded-md mr-2'>E-COMMERCE</span>
                </div>
            </header>

            <div className='flex flex-col-reverse justify-center lg:flex-row w-[100%] mt-10 mx-5'>
                <div id='right-side' className='md:mr-2 mt-5 w-[100%] lg:w-[65%] md:px-20'>

                    <div id='yt-video' className='w-[100%] shadow-lg'>
                        <a href="https://www.youtube.com/watch?v=biGcDeB2PbQ">Unable to view video ? Click here</a>
                        <iframe video-url="currentVdo" player="bestPlayer" className='sm:w-[100%] sm:h-[30vw]' id="unique-youtube-embed-id-1" frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="LetzRent for Pepcorns | Making renting simple, affordable and rewarding." src="https://www.youtube.com/embed/biGcDeB2PbQ?start=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fapp.pepcorns.com&amp;widgetid=1">
                        </iframe>
                        <div className='flex flex-col lg:flex-row justify-center lg:justify-evenly lg:py-5 w-[100%]'>
                            <div className='text-indigo-500 text-center mt-2'>
                                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                                Mumbai, Maharahtra
                            </div>
                            <div className='text-indigo-500 text-center mt-2'>
                                <a href="https://letzrent.com/" target="_blank">
                                    <FontAwesomeIcon icon={faChrome} className="mr-2" />
                                    https://letzrent.com/
                                </a>
                            </div>
                            <div className='text-indigo-500 flex justify-center text-xl text-center my-2'>
                                <span className='mx-2'>
                                    <a href="https://www.instagram.com/letzrent.official/">
                                        <FontAwesomeIcon icon={faInstagram} className="text-pink-600" />
                                    </a>
                                </span>
                                <span className='mx-2'>
                                    <a href="https://www.instagram.com/letzrent.official/">
                                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                                    </a>
                                </span>
                                <span className='mx-2'>
                                    <a href="https://www.instagram.com/letzrent.official/">
                                        <FontAwesomeIcon icon={faYoutube} className="text-red-600" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <div id="buttons" className='flex flex-col justify-center lg:flex-row lg:justify-between mr-10 lg:mr-0 my-5'>
                            <button className='text-slate-600 border-2 border-slate-100 hover:text-indigo-400 my-1 lg:my-0 shadow-lg text-lg lg:text-xl py-3 px-12 rounded-md'><FontAwesomeIcon icon={faBagShopping} className="text-lg mr-2" />Pitch</button>
                            <button className='text-slate-600 border-2 border-slate-100 hover:text-indigo-400 my-1 lg:my-0 shadow-lg text-lg lg:text-xl py-3 px-12 rounded-md'><FontAwesomeIcon icon={faBagShopping} className="text-lg mr-2" />Details</button>
                            <button className='text-slate-600 border-2 border-slate-100 hover:text-indigo-400 my-1 lg:my-0 shadow-lg text-lg lg:text-xl py-3 px-12 rounded-md'><FontAwesomeIcon icon={faBagShopping} className="text-lg mr-2" />Updates</button>
                            <button className='text-slate-600 border-2 border-slate-100 hover:text-indigo-400 my-1 lg:my-0 shadow-lg text-lg lg:text-xl py-3 px-12 rounded-md'><FontAwesomeIcon icon={faBagShopping} className="text-lg mr-2" />Comments</button>
                        </div>
                        <div className='mr-10 lg:mr-0'>
                            <Pitch />
                        </div>
                    </div>

                </div>
                <div id='left-side' className='md:mr-2 w-[100%] lg:w-[35%] sm:px-20'>
                    
                    <div className='card py-7 px-5 shadow-lg rounded-lg border-2 border-slate-100 w-[95%]'>
                        <div>
                            <div>
                                <span className='text-indigo-500 text-xl font-bold'><FontAwesomeIcon icon={faIndianRupeeSign} className="mr-2 text-xl"/>0</span>
                            </div>
                            <p className='text-xs text-slate-400 mt-2'>0 % of minimum goal raised</p>
                        </div>
                        <hr className='text-slate-500 my-5' />
                        <div>
                            <div>
                                <span className='text-slate-500 text-xl font-bold'>0</span>
                            </div>
                            <p className='text-lg text-slate-500 mt-2'>Total Investors</p>
                        </div>
                        <hr className='text-slate-500 my-5' />
                        <div>
                            <div>
                                <span className='text-slate-500 text-xl font-bold'>0 Days</span>
                            </div>
                            <p className='text-lg text-slate-500 mt-2'>Left to Invest</p>
                        </div>
                        <hr className='text-slate-500 my-5' />
                        <div className='w-[100%] flex flex-col justify-center'>
                            <button className='bg-pink-600 rounded-md px-14 py-2 text-base mx-auto'>
                                <FontAwesomeIcon icon={faCoins} className="mr-2 text-white" />
                                <span className='text-white'>Campaign Expired</span>
                            </button>
                            <p className='text-center text-xs mt-2'>₹ 1000 Minimum Investment</p>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <h1 className='text-slate-700 font-semibold text-2xl'>Deal Terms</h1>
                        <p className='mt-3 text-xs'>Perks you will receive for Investing Letzrent</p>
                    </div>

                    <Card />

                </div>
            </div>
        </div>
    );
}

export default Home;