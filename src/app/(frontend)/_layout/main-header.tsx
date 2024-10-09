import Link from "next/link";

export default function MainHeader() {
    return (
        <div className="main-header">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
                        <div className="logo">
                            <Link href="/"><img src="assets/images/logo.png" alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder">
                        <div className="search-area">
                            <form>
                                <div className="control-group">
                                    <ul className="categories-filter animate-dropdown">
                                        <li className="dropdown"> 
                                            <Link className="dropdown-toggle" data-toggle="dropdown" href="/category" > 
                                                Categories <b className="caret" /> 
                                            </Link> 
                                            <ul className="dropdown-menu" role="menu"> 
                                                <li className="menu-header">Computer</li> 
                                                <li role="presentation">
                                                    <Link role="menuitem" tabIndex={-1} href="/category">- Clothing</Link>
                                                </li> 
                                                <li role="presentation">     
                                                    <Link role="menuitem" tabIndex={-1} href="/category">- Electronics</Link> 
                                                </li> 
                                                <li role="presentation">
                                                    <Link role="menuitem" tabIndex={-1} href="/category">  - Shoes</Link> 
                                                </li> 
                                                <li role="presentation">     
                                                    <Link role="menuitem" tabIndex={-1} href="/category">  - Watches</Link>
                                                </li> 
                                            </ul>
                                        </li>
                                    </ul>
                                    <input className="search-field" placeholder="Search here..." />
                                    <Link className="search-button" href="#" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row">
                        <div className="dropdown dropdown-cart"> 
                            <Link href="#" className="dropdown-toggle lnk-cart" data-toggle="dropdown" > 
                                <div className="items-cart-inner">    
                                    <div className="basket">     
                                        <div className="basket-item-count">         
                                            <span className="count">2</span>     
                                        </div>     
                                        <div className="total-price-basket">                  
                                            <span className="lbl">Shopping Cart</span>         
                                            <span className="value">$4580</span>     
                                        </div>     
                                    </div> 
                                </div> 
                            </Link> 
                            <ul className="dropdown-menu"> 
                                <li>     
                                    <div className="cart-item product-summary">     
                                        <div className="row">         
                                            <div className="col-xs-4">        
                                                 <div className="image">                          
                                                    <Link href="/detail">             
                                                        <img src="assets/images/products/p4.jpg" alt="" />
                                                    </Link>        
                                                </div>        
                                            </div>         
                                            <div className="col-xs-7">        
                                                 <h3 className="name">             
                                                    <Link href="/index8a95?page-detail">Simple Product</Link>         
                                                </h3>         
                                                <div className="price">$600.00</div>         
                                            </div>         
                                            <div className="col-xs-1 action">                  
                                                <Link href="#"> <i className="fa fa-trash" /></Link>   
                                            </div>     
                                        </div>     
                                    </div>     
                                    <div className="clearfix" />     
                                    <hr />     
                                    <div className="clearfix cart-total">    
                                        <div className="pull-right">                 
                                            <span className="text">Sub Total :</span>        
                                            <span className="price">$600.00</span>     
                                        </div>     
                                        <div className="clearfix" />    
                                            <Link href="/checkout" className="btn btn-upper btn-primary btn-block m-t-20" > Checkout</Link>     
                                        </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}