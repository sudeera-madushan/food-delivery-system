import { TbExchange } from "react-icons/tb";
function Cart():JSX.Element {
    return (
        <section className={'flex justify-around'}>
            <div>
                <div className={'w-[48vw] p-2  flex rounded-xl shadow-xl mx-5 my-2'}>
                    <img src="./../../src/assets/french-fries.png"
                         alt=""
                         className={'w-24 p-2'}/>
                    <div>
                        <h1 className={'p-2 pb-0 font-concert-one text-2xl'}>Tomato Pamadoro</h1>
                        <div className={'p-2 font-concert-one text-2xl flex'}>
                            <h1 className={''}>Quantity : 10</h1>
                            <h1 className={'ms-10'}>LKR500.00</h1>
                        </div>
                    </div>
                </div>
                <div className={'w-[48vw] p-2  flex rounded-xl shadow-xl mx-5 my-2'}>
                    <img src="./../../src/assets/french-fries.png"
                         alt=""
                         className={'w-24 p-2'}/>
                    <div>
                        <h1 className={'p-2 pb-0 font-concert-one text-2xl'}>Tomato Pamadoro</h1>
                        <div className={'p-2 font-concert-one text-2xl flex'}>
                            <h1 className={''}>Quantity : 10</h1>
                            <h1 className={'ms-10'}>LKR500.00</h1>
                        </div>
                    </div>
                </div>
                <div className={'w-[48vw] p-2  flex rounded-xl shadow-xl mx-5 my-2'}>
                    <img src="./../../src/assets/french-fries.png"
                         alt=""
                         className={'w-24 p-2'}/>
                    <div>
                        <h1 className={'p-2 pb-0 font-concert-one text-2xl'}>Tomato Pamadoro</h1>
                        <div className={'p-2 font-concert-one text-2xl flex'}>
                            <h1 className={''}>Quantity : 10</h1>
                            <h1 className={'ms-10'}>LKR500.00</h1>
                        </div>
                    </div>
                </div>
                <div className={'w-[48vw] p-2  flex rounded-xl shadow-xl mx-5 my-2'}>
                    <img src="./../../src/assets/french-fries.png"
                         alt=""
                         className={'w-24 p-2'}/>
                    <div>
                        <h1 className={'p-2 pb-0 font-concert-one text-2xl'}>Tomato Pamadoro</h1>
                        <div className={'p-2 font-concert-one text-2xl flex'}>
                            <h1 className={''}>Quantity : 10</h1>
                            <h1 className={'ms-10'}>LKR500.00</h1>
                        </div>
                    </div>
                </div>
                <div className={'w-[48vw] p-2  flex rounded-xl shadow-xl mx-5 my-2'}>
                    <img src="./../../src/assets/french-fries.png"
                         alt=""
                         className={'w-24 p-2'}/>
                    <div>
                        <h1 className={'p-2 pb-0 font-concert-one text-2xl'}>Tomato Pamadoro</h1>
                        <div className={'p-2 font-concert-one text-2xl flex'}>
                            <h1 className={''}>Quantity : 10</h1>
                            <h1 className={'ms-10'}>LKR500.00</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'w-[50vw] shadow-xl m-2'}>
                <div className={'flex justify-between'}>
                    <h1 className={'m-5 mb-1 font-agbalumo text-xl'}>Address :</h1>
                    <TbExchange className={'m-5 mb-1 font-agbalumo text-xl hover:text-blue-700'}/>
                </div>
                <h1 className={'m-5 mt-0 font-agbalumo text-2xl p-2 rounded-xl shadow'}>Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.</h1>

                <div className={'p-10 px-20'}>
                    <div className={'flex justify-between pt-10 py-1 border-b'}>
                        <h1 className={''}>Total </h1>
                        <h1 className={'font-bold'}>1000.00</h1>
                    </div>
                    <div className={'flex justify-between py-1 border-b'}>
                        <h1 className={''}>Delivery Cost  </h1>
                        <h1 className={'font-bold'}>257.00</h1>
                    </div>
                    <div className={'flex justify-between py-1  border-b-2'}>
                        <h1 className={''}>Tax Cost  </h1>
                        <h1 className={'font-bold'}>50.00</h1>
                    </div>
                    <div className={'flex justify-between py-1 border-b-2'}>
                        <h1 className={''}>To Pay</h1>
                        <h1 className={'font-bold'}>1357.00</h1>
                    </div>
                    <div className={'flex justify-end'}>
                        <button className={'bg-[var(--primary-color)] p-2 m-2 rounded-xl text-white font-bold hover:bg-red-700'}>Order Now</button>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Cart;