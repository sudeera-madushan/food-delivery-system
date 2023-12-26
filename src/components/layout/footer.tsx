function Footer():JSX.Element {
    return(
        <footer className="bg-gray-800 text-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Contact Information */}
                <div className="footer-section">
                    <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                    <p>Email: support@foodswift.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>123 Main Street, Cityville, Country</p>
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
                    <a href="#" target="_blank"><img src="facebook-icon.png" alt="Facebook" className="w-6 h-6" /></a>
                    <a href="#" target="_blank"><img src="twitter-icon.png" alt="Twitter" className="w-6 h-6" /></a>
                    <a href="#" target="_blank"><img src="instagram-icon.png" alt="Instagram" className="w-6 h-6" /></a>
                </div>

                {/* Download Our App */}
                <div className="footer-section">
                    <h4 className="text-lg font-bold mb-4">Download Our App</h4>
                    <p className="text-gray-300">Get the FoodSwift app for easy and fast ordering.</p>
                    <a href="#" target="_blank"><img src="app-store-badge.png" alt="App Store" className="w-32 h-auto" /></a>
                    <a href="#" target="_blank"><img src="google-play-badge.png" alt="Google Play" className="w-32 h-auto" /></a>
                </div>

            </div>
        </footer>
    );
}
export default Footer;