import Link from "next/link";

export default function Footer() {
    return(
        <footer id="footer" className="footer color-bg">
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="address-block">
                                <div className="module-body">    
                                    <ul className="toggle-footer">        
                                        <li className="media">            
                                            <div className="pull-left">                
                                                <span className="icon fa-stack fa-lg">
                                                    <i className="fa fa-map-marker fa-stack-1x fa-inverse" />
                                                </span>            
                                            </div>            
                                            <div className="media-body">               
                                                <p>ThemesGround, 789 Main rd, Anytown, CA 12345 USA</p>
                                            </div>       
                                        </li>        
                                        <li className="media">            
                                            <div className="pull-left">                
                                                <span className="icon fa-stack fa-lg">                    
                                                    <i className="fa fa-mobile fa-stack-1x fa-inverse" />                
                                                </span>            
                                            </div>            
                                            <div className="media-body">                
                                                <p> + (888) 123-4567 / + (888) 456-7890</p>           
                                            </div>        
                                        </li>        
                                        <li className="media">            
                                            <div className="pull-left">                
                                                <span className="icon fa-stack fa-lg">                
                                                    <i className="fa fa-envelope fa-stack-1x fa-inverse" />                
                                                </span>            
                                            </div>            
                                            <div className="media-body">
                                                <span><Link href="" scroll={false}>marazzo@themesground.com</Link></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="module-heading">
                                <h4 className="module-title">Customer Service</h4>
                            </div>
                            <div className="module-body">
                                <ul className="list-unstyled">
                                    <li className="first"><Link href="" scroll={false} title="Contact us">My Account</Link></li>
                                    <li><Link href="" scroll={false} title="About us">Order History</Link></li>
                                    <li><Link href="" scroll={false} title="faq">FAQ</Link></li>
                                    <li><Link href="" scroll={false} title="Popular Searches">Specials</Link></li>
                                    <li className="last"><Link href="" scroll={false} title="Where is my order?">Help Center</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="module-heading">
                                <h4 className="module-title">Corporation</h4>
                            </div>
                            <div className="module-body">
                                <ul className="list-unstyled">
                                    <li className="first"><Link title="Your Account" href="/about">About us</Link>
                                    </li>
                                    <li><Link title="Information" href="" scroll={false}>Customer Service</Link>
                                    </li>
                                    <li><Link title="Addresses" href="" scroll={false}>Company</Link>
                                    </li>
                                    <li><Link title="Addresses" href="" scroll={false}>Investor Relations</Link>
                                    </li>
                                    <li className="last"><Link title="Orders History" href="" scroll={false}>Advanced Search</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="module-heading">
                                <h4 className="module-title">Why Choose Us</h4>
                            </div>
                            <div className="module-body">
                                <ul className="list-unstyled">
                                    <li className="first"><Link href="" scroll={false} title="About us">Shopping Guide</Link></li>
                                    <li><Link href="" scroll={false} title="Blog">Blog</Link></li>
                                    <li><Link href="" scroll={false} title="Company">Company</Link></li>
                                    <li><Link href="" scroll={false} title="Investor Relations">Investor Relations</Link></li>
                                    <li className=" last"><Link href="/contact-us" title="Suppliers">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-bar">
                <div className="container">
                    <div className="col-xs-12 col-sm-4 no-padding social">
                        <ul className="link">
                            <li className="fb pull-left">
                                <Link target="_blank" rel="nofollow" href="" scroll={false} title="Facebook" />
                            </li>
                            <li className="tw pull-left">
                                <Link target="_blank" rel="nofollow" href="" scroll={false} title="Twitter" />
                            </li>
                            <li className="googleplus pull-left">
                                <Link target="_blank" rel="nofollow" href="" scroll={false} title="GooglePlus" />
                            </li>
                            <li className="rss pull-left">
                                <Link target="_blank" rel="nofollow" href="" scroll={false} title="RSS" />
                            </li>
                            <li className="pintrest pull-left">
                                <Link target="_blank" rel="nofollow" href="" scroll={false} title="PInterest" />
                            </li>
                            <li className="linkedin pull-left">
                                <Link target="_blank" rel="nofollow" href="" scroll={false} title="Linkedin" />
                            </li>
                            <li className="youtube pull-left">
                                <Link target="_blank" rel="nofollow" href="" scroll={false} title="Youtube" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 no-padding copyright">
                        <Link target="_blank" href="https://www.templateshub.net">Templates Hub</Link>
                    </div>
                    <div className="col-xs-12 col-sm-4 no-padding">
                        <div className="clearfix payment-methods">
                            <ul>
                                <li><img src="assets/images/payments/1.png" alt="" /></li>
                                <li><img src="assets/images/payments/2.png" alt="" /></li>
                                <li><img src="assets/images/payments/3.png" alt="" /></li>
                                <li><img src="assets/images/payments/4.png" alt="" /></li>
                                <li><img src="assets/images/payments/5.png" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
    
}