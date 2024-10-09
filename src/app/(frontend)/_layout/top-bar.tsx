import Link from "next/link";

export default function TopBar() {
    return (
        <div className="top-bar animate-dropdown">
            <div className="container">
                <div className="header-top-inner">
                    <div className="cnt-account">
                        <ul className="list-unstyled">
                            <li className="myaccount"><Link href="/my-account"><span>My Account</span></Link></li>
                            <li className="wishlist"><Link href="/wishlist"><span>Wishlist</span></Link></li>
                            <li className="header_cart hidden-xs"><Link href="/cart"><span>My Cart</span></Link></li>
                            <li className="check"><Link href="/checkout"><span>Checkout</span></Link></li>
                            <li className="login"><Link href="/login"><span>Login</span></Link></li>
                        </ul>
                    </div>
                    <div className="cnt-block">
                        <ul className="list-unstyled list-inline">
                            <li className="dropdown dropdown-small">
                                <Link href="" scroll={false} className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"> 
                                    <span className="value">USD </span> <b className="caret" />
                                </Link>
                                <ul className="dropdown-menu"> 
                                    <li> <Link href="" scroll={false}>USD</Link> </li> 
                                    <li> <Link href="" scroll={false}>INR</Link> </li> 
                                    <li> <Link href="" scroll={false}>GBP</Link> </li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-small lang">
                                <Link href="" scroll={false} className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"> 
                                    <span className="value">English </span> <b className="caret" />
                                </Link>
                                <ul className="dropdown-menu"> 
                                    <li><Link href="" scroll={false}>English</Link></li> 
                                    <li><Link href="" scroll={false}>French</Link></li>    
                                    <li><Link href="" scroll={false}>German</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
         </div>
    )
}