function Footer():JSX.Element {
    return(
        <footer className="bg-gray-800 text-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Contact Information */}
                <div className="footer-section">
                    <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                    <p>Email: support@foodswift.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>123 Main Street, Colombo 6, Sri Lanka</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                    <ul>
                        <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
                        <li><a href="/faqs" className="text-gray-300 hover:text-white">FAQs</a></li>
                        <li><a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                        <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                        <li><a href="/careers" className="text-gray-300 hover:text-white">Careers</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="footer-section">
                    <h4 className="text-lg font-bold mb-4">Connect with Us</h4>
                    <a href="#" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="Facebook" className="w-6 h-6" /></a>
                    <a href="#" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="Twitter" className="w-6 h-6" /></a>
                    <a href="#" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="Instagram" className="w-6 h-6" /></a>
                </div>

                {/* Download Our App */}
                <div className="footer-section">
                    <h4 className="text-lg font-bold mb-4">Download Our App</h4>
                    <p className="text-gray-300">Get the FoodSwift app for easy and fast ordering.</p>
                    <a href="#" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/512px-App_Store_%28iOS%29.svg.png" alt="App Store" className="w-10 h-auto" /></a>
                    <a href="#" target="_blank"><img src="https://static-00.iconduck.com/assets.00/google-play-icon-2048x2048-487quz63.png" alt="Google Play" className="w-10 h-auto" /></a>
                </div>

            </div>
        </footer>
    );
}
export default Footer;
