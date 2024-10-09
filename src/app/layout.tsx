import Script from "next/script";
import Footer from "./(frontend)/_layout/footer";
import Header from "./(frontend)/_layout/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/front/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/front/assets/css/main.css" />
        <link rel="stylesheet" href="/front/assets/css/blue.css" />
        <link rel="stylesheet" href="/front/assets/css/owl.carousel.css" />
        <link rel="stylesheet" href="/front/assets/css/owl.transitions.css" />
        <link rel="stylesheet" href="/front/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/front/assets/css/rateit.css" />
        <link rel="stylesheet" href="/front/assets/css/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Barlow:200,300,300i,400,400i,500,500i,600,700,800"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
      </head>
      <body className="cnt-home">
        <Header />
          {children}
        <Footer />
        <Script src="/front/assets/js/jquery-1.11.1.min.js"  strategy="beforeInteractive"/> 
        <Script src="/front/assets/js/bootstrap.min.js"  strategy="beforeInteractive"/> 
        <Script src="/front/assets/js/bootstrap-hover-dropdown.min.js"  strategy="beforeInteractive"/> 
        <Script src="/front/assets/js/owl.carousel.min.js"  strategy="beforeInteractive"/> 
        <Script src="/front/assets/js/echo.min.js"  strategy="beforeInteractive"/> 
        <Script src="/front/assets/js/jquery.easing-1.3.min.js"  strategy="beforeInteractive"/> 
        <Script src="/front/assets/js/bootstrap-slider.min.js"  strategy="beforeInteractive"/> 
        <Script src="/front/assets/js/jquery.rateit.min.js"  strategy="beforeInteractive"/> 
        <Script src="/front/assets/js/lightbox.min.js"  strategy="beforeInteractive"/> 
        <Script src="/front/assets/js/bootstrap-select.min.js"  strategy="beforeInteractive"/> 
        <Script src="/front/assets/js/wow.min.js"  strategy="beforeInteractive"/> 
        <Script src="/front/assets/js/scripts.js"  strategy="beforeInteractive"/>
      </body>
    </html>
  );
}
