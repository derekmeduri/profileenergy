const Contact = () => {
    return (
        <section 
            id="contact"
            className="grid md:grid-cols-2 my-12 py-24 md:my-12 gap-4 relative">
        
            <div className="z-10">
                <h5 className="text-xl font-bold my-2">Contact Us</h5>
                <p className="text-green-500 mb-4 max-w-md">
                Learn how Profile Energy can help manage your utility expenses!
                </p>
                <div className="flex flex-row gap-2"> 
                <a href="https://www.eia.gov/">
                     <img src="public/images/eiabuglogo.jpg" alt="eia logo" height={100} width={100}/>
                </a>
                 <a href="https://www.energystar.gov/">
                    <img src="public/images/Energy_Star_logo.png" alt="energystar logo" height={65} width={65} />
                </a>
                </div>
            <div className="mb-6">
                <p>
                    535 N. Broad St., Suite 2, Canfield, Ohio 44406
                </p>
            </div>
                <div>
                    <form className="flex flex-col"> 
                    <div className="mb-6">
                        <label 
                        htmlFor="email"
                        className="text-black block mb-2 text-sm font-medium">
                            Email
                        </label>
                        <input
                        className="bg-white border border-slate-400 rounded-lg block w-full p-2.5"
                        name="email"
                        type="email"
                        id="email"
                        required="true"
                        placeholder="example@email.com"
                        />
                         </div>
                        <div className="mb-6">
                            <label
                            htmlFor="subject"
                            className="text-black block text-sm font-medium">
                                Subject

                            </label>
                            <input
                            name="subject"
                            type="text"
                            id="subject"
                            required='true'
                            className="bg-white border border-slate-400 rounded-lg block w-full p-2.5"
                            placeholder="Subject"
                            />
                        </div>
                        <div className="mb-6">  
                            <label 
                            htmlFor="message"
                            className="text-black block text-sm font-medium"
                            >
                                Message
                            </label>
                            <textarea
                            name="message"
                            id="message"
                            className="bg-white border border-slate-400 rounded-lg block w-full p-2.5"
                            placeholder="How can Profile Energy help manage our utilities?"
                            />
                        </div>
                       <button 
                       type="submit"
                       className="bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                       >
                        Send Message
                       </button>
                   

                </form>
            </div>
            </div>
        </section>
    )

}


export default Contact