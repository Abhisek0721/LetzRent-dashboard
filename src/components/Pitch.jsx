const Pitch = ()=>{
    return (
        <section id="pitch" className="my-5 border-2 border-gray-50 shadow-md rounded-lg">
            <div className="header-pitch flex justify-between px-3 md:px-8 py-5">
                <h1 className="text-sm sm:text-xl">DECK</h1>
                <a href="https://api.pepcorns.com/clientassets/icon1651230174497.pdf" target="_blank">
                    <button className="text-white text-xs sm:text-lg bg-indigo-500 px-3 py-1 rounded-md font-semibold">DOWNLOAD PITCH DECK</button>
                </a>
            </div>
            <hr />
            <div className="content-pitch px-8">
                <div className="my-8">
                    <span className="text-lg font-semibold mb-4">10 Seconds Pitch</span>
                    <p className="text-slate-500">
                        Online search, compare & booking platform for self-drive cars,
                        charter flights, living space & more that rewards users.
                    </p>
                </div>

                <hr />

                <div className="my-8">
                    <span className="text-lg font-semibold mb-4">Deck Info</span>
                    <h1 className="text-3xl font-bold">LetzRent</h1>
                </div>

                <hr />
                
                <div className="my-8">
                    <span className="text-lg lg:text-2xl font-semibold mb-4">Highlights</span>
                    <div className="text-slate-500 mt-2 sm:ml-5">
                        <div className="flex text-slate-500 text-sm md:text-lg">
                            <span><li></li></span>
                            <span>Running profitable pilot in Bengaluru.</span>
                        </div>
                        <div className="flex text-slate-500 text-sm md:text-lg">
                            <span><li></li></span>
                            <span>20k+ registered users, 4.2 app rating and 10k+ social media following.</span>
                        </div>
                        <div className="flex text-slate-500 text-sm md:text-lg">
                            <span><li></li></span>
                            <span>Company is projecting 100cr+ transaction volume in 5 years.</span>
                        </div>
                        <div className="flex text-slate-500 text-sm md:text-lg">
                            <span><li></li></span>
                            <span>Founder with the marketing expertise of 17+ years in Reliance, Naaptol, Tv9 and Zee and more.</span>
                        </div>
                        <div className="flex text-slate-500 text-sm md:text-lg">
                            <span><li></li></span>
                            <span>GenZ CTO and co-founder.</span>
                        </div>
                        <div className="flex text-slate-500 text-sm md:text-lg">
                            <span><li></li></span>
                            <span>Expansion is easy and the untapped customer base is huge.</span>
                        </div>
                        <div className="flex text-slate-500 text-sm md:text-lg">
                            <span><li></li></span>
                            <span>Been in news articles, already making buzz.</span>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="my-8">
                    <span className="text-lg lg:text-2xl font-semibold mb-4">Traction</span>
                    <div className="w-[100%] mt-5">
                        <img src={require('./img/Traction.png')} className="w-[100%] md:w-[90%] mx-auto" alt="" />
                    </div>
                </div>

                <hr />

                <div className="my-8">
                    <span className="text-lg lg:text-2xl font-semibold mb-4">Smarter Way To Rent</span>
                    <div className="w-[100%] mt-5">
                        <img src={require('./img/Smarter Way To Rent.png')} className="w-[100%] md:w-[90%] mx-auto" alt="" />
                    </div>
                </div>
                
                <hr />

                <div className="my-8">
                    <span className="text-lg lg:text-2xl font-semibold mb-4">Customers Want Low Prices</span>
                    <div className="w-[100%] mt-5">
                        <p className='text-slate-500 mb-5 lg:w-[95%] text-sm md:text-xl'>
                            To get low prices 85% of the consumers check at least 2 data points (Source: BCG Consumer Trends).
                            In various sectors information centred buying has been made more efficient by companies 
                            like MMT for Travel, Policy bazaar for Insurance, Myntra or Shopperstop for Lifestyle products.
                            However for rental products, there is no one & to fill this need and make the process efficient we launched LetzRent, 
                            hoping to have a first-mover advantage and dominate the market in the coming future.
                        </p>
                        <img src={require('./img/Customers Want Low Prices.png')} className="w-[100%] md:w-[90%] mx-auto" alt="" />
                    </div>
                </div>
                                
                <hr />

                <div className="my-8">
                    <span className="text-lg lg:text-2xl font-semibold mb-4">Single KYC</span>
                    <div className="w-[100%] mt-5">
                        <p className='text-slate-500 mb-5 lg:w-[95%] text-sm md:text-xl'>
                            Renting is a KYC dependent process, every time a customer 
                            books a service from a different service provider 
                            he/she will have to get a new KYC done. With Letzrent, 
                            the hassle of multiple KYC gets removed and with a single KYC,
                            customers can rent from multiple brands.
                        </p>
                    </div>
                </div>
                                
                <hr />

                <div className="my-8">
                    <span className="text-lg lg:text-2xl font-semibold mb-4">Vast Selection</span>
                    <div className="w-[100%] mt-5">
                        <p className='text-slate-500 mb-5 lg:w-[95%] text-sm md:text-xl'>
                            Being an aggregator Letzrent offers more options than category leaders.
                        </p>
                        <img src={require('./img/Vast Selection.png')} className="w-[100%] md:w-[90%] mx-auto" alt="" />
                    </div>
                </div>

                <hr />

                <div className="my-8">
                    <span className="text-lg lg:text-2xl font-semibold mb-4">Why Renting? </span>
                    <div className="w-[100%] mt-5">
                        <div className="text-slate-500 text-sm md:text-xl mt-2 sm:ml-5 lining-nums mb-5">
                            <li className='list-decimal mb-2'>
                                Demographic Twist: Commitment phobic millennials prefer 
                                an asset lite life with a bias toward renting rather than buying.
                            </li>
                            <li className='list-decimal mb-2'>
                                Flexibility: Renting allows people to upgrade or change assets easily.
                            </li>
                            <li className='list-decimal mb-2'>
                                Convenience: With the rental customers dispense with the headache 
                                of down payment, maintenance, insurance etc.
                            </li>
                        </div>
                        <img src={require('./img/Why Renting.png')} className="w-[100%] md:w-[90%] mx-auto" alt="" />
                    </div>
                </div>

                <hr />
                
                <div className="my-8">
                    <span className="text-lg lg:text-2xl font-semibold mb-4">Market Size</span>
                    <div className="w-[100%] mt-5">
                        <img src={require('./img/Market Size.png')} className="w-[100%] md:w-[90%] mx-auto" alt="" />
                    </div>
                </div>

                <hr />
                
                <div className="my-8">
                    <span className="text-lg lg:text-2xl font-semibold mb-4">Competitors</span>
                    <div className="w-[100%] mt-5">
                        <img src={require('./img/Competitors.png')} className="w-[100%] md:w-[90%] mx-auto" alt="" />
                    </div>
                </div>
                
                <hr />
                
                <div className="my-8">
                    <span className="text-lg lg:text-2xl font-semibold mb-4">Feedback: People love us</span>
                    <div className="w-[100%] mt-5">
                        <img src={require('./img/Feedback.png')} className="w-[100%] md:w-[90%] mx-auto" alt="" />
                    </div>
                </div>
                                
                <hr />
                
                <div className="my-8">
                    <span className="text-lg lg:text-2xl font-semibold mb-4">Future and growth</span>
                    <div className="w-[100%] mt-5">
                        <img src={require('./img/futureAndGrowth.png')} className="w-[90%] sm:w-[80%] lg:w-[25%]" alt="" />
                        <img src={require('./img/predictedGrow.png')} className="w-[100%] md:w-[90%] mx-auto" alt="" />
                    </div>
                </div>
                                
                <hr />
                
                <div className="my-8">
                    <span className="text-lg lg:text-2xl font-semibold mb-4">Core Team</span>
                    <div className="w-[100%] mt-5">
                        <img src={require('./img/Core Team.png')} className="w-[100%] md:w-[90%] mx-auto" alt="" />
                    </div>
                </div>
                                                
                <hr />
                
                <div className="my-8">
                    <span className="text-lg lg:text-2xl font-semibold mb-4">Documents for Investors</span>
                    <div className="w-[100%] mt-5 text-indigo-500">
                        <a href="https://drive.google.com/file/d/1clHQGD__nkbsA-cLz3A6_tABUuk5rl3w/view"><li>Due Diligence Report</li></a>
                        <a href="https://drive.google.com/file/d/1i02nUH-27EhiROtNlvXOfkPP7iTfwjpw/view"><li>Certificate of Incorporation</li></a>
                    </div>
                </div>

                <hr className='mb-20' />

            </div>
        </section>
    )
}

export default Pitch;