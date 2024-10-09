import HeaderNav from "./header-nav";
import MainHeader from "./main-header";
import TopBar from "./top-bar";

export default function Header() {
    return(
        <header className="header-style-1">
            <TopBar />
            <MainHeader />
            <HeaderNav />
        </header>

    )
}