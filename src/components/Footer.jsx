const Footer = () => {
    return (
        <footer className="footer flex justify-center bg-green-600 w-full">
            <div className="grid grid-cols-4 gap-8 py-8 px-6 text-white">
                <div>
                    <h5>
                    <a href="/"
                    className="text-lg hover:underline">
                        Home
                    </a>
                    </h5>
                    <ul >
                        <li className="hover:underline">
                            Utility Information Management
                        </li>
                        <li className="hover:underline">
                            Energy Procurement
                        </li>
                        <li className="hover:underline">
                            Metering & Billing
                        </li>
                        <li className="hover:underline">
                            Energy Efficiency & Sustainability
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>
                        <a href="/about"   className="text-lg hover:underline">
                        About Us
                        </a>
                    </h5>
                </div>
                <div>
                    <h5>
                        <a href="#contact"   className="text-lg hover:underline">
                        Contact Us
                        </a>
                    </h5>
                    <ul>
                        <li className="hover:underline">
                            <a href='mailto:info@profileenergy.com' rel='noreferrer' target='_blank'>
                            Email
                            </a>
                        </li>
                        <li className="hover:underline">
                            <a href="#contact">
                            Call
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>
                        <a href="https://login.energycap.com/login?loginRedirectUrl=%2Frecent"   className="text-lg hover:underline">
                        Customer Login
                        </a>
                    </h5>
                    <ul>
                        <li className="mb-2 mt-1">
                        <a href="https://www.eia.gov/">
                     <img src="src/assets/images/eiabuglogo.jpg" alt="eia logo" height={50} width={50}/>
                     </a>
                        </li>
                        <li>
                        <a href="https://www.energystar.gov/">
                    <img src="src/assets/images/Energy_Star_logo.png" alt="eia logo" height={50} width={50} />
                </a>
                        </li>
                    </ul>
                </div>
            <div>
            <p className="text-sm">
            © 2024 Profile Energy, Inc. All Rights Reservered.
            </p>
            </div>
            </div>
           
        </footer>
    )
}

export default Footer;