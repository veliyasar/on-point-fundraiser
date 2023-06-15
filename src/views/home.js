import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>On-Point Fundraiser</title>
        <meta property="og:title" content="On-Point Fundraiser" />
      </Helmet>
      <div className="home-container-header">
        <header data-role="Header" className="home-header">
          <img
            alt="logo"
            src="/external/title-icon-200h-200h.png"
            className="home-image"
          />
          <header  className="home-navbar-interactive">
            <div
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav
                data-role="Nav"
                className="home-nav"
              >
                <Link to="/search" className="home-navlink">
                  &nbsp;Kampanya Ara&nbsp;
                </Link>
                <span className="home-text-nav1">SSS</span>
                <span className="home-text-nav2">Hakkında</span>
                <span className="home-text-nav3">İletişim</span>
              </nav>
            </div>
            <div  className="home-btn-group">
              <Link to="/login" className="home-login button">
                Giriş Yap
              </Link>
              <Link to="/register" className="home-register button">
                Kayıt Ol
              </Link>
            </div>
          </header>
        </header>
      </div>
      <div className="home-container-hero-head">
        <div className="home-hero">
          <div className="home-container-welcome">
            <h1 className="home-text-welcome">
              <span>Bağışlarınızın Nasıl Harcandığını Takip Etmek Mümkün!</span>
              <br></br>
            </h1>
            <span className="home-text-welcome-exp">
              On-Point Fundraiser™ yardım kampanyalarının toplanma merkezidir.
              Diğer merkezlerden farklı olarak burada toplanan bağışların nasıl
              harcandığını takip edebilirsiniz.
            </span>
            <div className="home-btn-discover">
              <Link to="/search" className="home-navlink-discover button">
                Keşfet
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU0fHxmdW5kcmFpc2luZ3xlbnwwfHx8fDE2ODY1MTI3NzB8MA&amp;ixlib=rb-4.0.3&amp;h=1500"
            className="home-image-welcome-background"
          />
        </div>
      </div>
      <div className="home-container-features">
        <div className="home-features">
          <h1 className="home-text-feature-head">Neden On-Point Fundraiser?</h1>
          <div className="home-container05">
            <div className="home-feature-card">
              {/*3D Cube Icon*/}
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="home-container06">
                <h2 className="home-text08">Harcama Detayını Görüntüle</h2>
                <span>
                  Proje sahiplerinin topladığı bağışların nasıl harcandığını
                  şeffaf bir şekilde görüntüleyebileceksin.
                </span>
              </div>
            </div>
            <div className="home-feature-card1">
              {/*3D Cube Icon*/}
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="home-container07">
                <h2 className="home-text10">
                  <span>Kanıta Dayalı Harcamalar</span>
                  <br></br>
                </h2>
                <span>
                  Toplanan bağışlar proje sahipleri tarafından kullanılmadan
                  önce güvenli bir hesapta tutulur ve ancak proje sahibi
                  harcamasını kanıtlarıyla sunduğu taktirde bağışları
                  kullanabilir.
                </span>
              </div>
            </div>
            <div className="home-feature-card2">
              {/*3D Cube Icon*/}
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="home-container08">
                <h2 className="home-text14">
                  <span>
                    Bağışçılarının Güvenini Önceliklendiren
                  </span>
                  <br></br>
                  <span>Bir Yardım Kuruluşu</span>
                </h2>
                <span>
                  On-Point Fundraiser™ her şeyden önce senin sisteme olan
                  güvenini sağlamaya öncelik verir. Bağışlarının nereye
                  gittiğini adım adım sana bildirir.
                </span>
              </div>
            </div>
            <div className="home-feature-card3">
              {/*3D Cube Icon*/}
              <svg viewBox="0 0 1024 1024" className="home-icon06">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="home-container09">
                <h2 className="home-text19">Bağış İadesi İmkanı</h2>
                <span>
                  On-Point Fundraiser™ her şeyden önce senin sisteme olan
                  güvenini sağlamaya öncelik verir. Bağışlarının nereye
                  gittiğini adım adım sana bildirir.
                </span>
              </div>
            </div>
            <div className="home-feature-card4">
              {/*3D Cube Icon*/}
              <svg viewBox="0 0 1024 1024" className="home-icon08">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="home-container10">
                <h2 className="home-text21">Yardım Kampanyalarına Abone Ol</h2>
                <span>
                  Proje hedef kaynağına ulaşıncaya kadar düzenli katkı sağla. Bu
                  sırada projenin ilerlemeleri sana e-posta ile iletilsin.
                </span>
              </div>
            </div>
            <div className="home-feature-card5">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="home-container11">
                <h2 className="home-text23">İstediğin Projeye Destek Ver</h2>
                <span>
                  Yürürlükte olan bir projeyi incele. Fikirden hoşlanırsa tek
                  seferlik veya düzenli bağışta bulun.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container-testimonial-head">
        <div className="home-testimonial">
          <div className="home-container-testimonial">
            <h1 className="home-text-testimonial">
              <span>Kullanıcı Geri Bildirimleri</span>
              <br></br>
            </h1>
            <span className="home-text-testimonial-exp">
              Bağışçıların ve kampanya sahiplerinin geri bildirimlerini
              inceleyerek sistemi nasıl daha iyi hale getirebileceğimize
              birlikte karar veriyoruz.
            </span>
            <div className="home-container-card1">
              <div className="home-testimonial-card1">
                {/*Quote Icon*/}
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon12">
                  <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
                </svg>
                <div className="home-feedback1">
                  <span className="home-text-feedback1">
                    Diğer platfromlarda yaptığım bağışların nereye gittiğini
                    bilmediğim için biraz temkinli yaklaşıyordum. Fakat burada
                    gönül rahatlığıyla bağışlarımı gerçekleştirebiliyorum. Aylık
                    kazancımın ufak bir kısmını On-Point Fundraiser&apos;da
                    beğendiğim kampanyalara aktararak çok farklı projelere katkı
                    sağlayabiliyorum.
                  </span>
                  <span className="home-text32">Mustafa Kara</span>
                  <span className="home-text33">BAĞIŞÇI</span>
                  <img
                    alt="profile"
                    src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxtYWxlJTIwcHJvZmlsZXxlbnwwfHx8fDE2ODY2ODE2OTl8MA&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image-feedback1"
                  />
                </div>
              </div>
              <div className="home-testimonial-card1">
                {/*Quote Icon*/}
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon14">
                  <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
                </svg>
                <div className="home-feedback2">
                  <span className="home-text-feedback2">
                    Bir süredir aklımda olan fikri hayata geçirmek için çeşitli
                    yardım toplama platformlarını denedim fakat istediğim
                    kitleyi bir araya getiremedim. On-Point Fundraiser&apos;da
                    etkili bir kampanya sayfası oluşturduktan hızla hedef
                    kaynağıma ulaşabildim.
                  </span>
                  <span className="home-text35">İrem Aksoy</span>
                  <span className="home-text36">
                    <span className="home-text37">KAMPANYA SAHİBİ</span>
                    <br></br>
                  </span>
                  <img
                    alt="profile"
                    src="https://images.unsplash.com/photo-1512310604669-443f26c35f52?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc1fHxmZW1hbGUlMjB8ZW58MHx8fHwxNjg2NjgxNTM4fDA&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image-feedback2"
                  />
                </div>
              </div>
              <div className="home-testimonial-card2">
                {/*Quote Icon*/}
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon16">
                  <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
                </svg>
                <div className="home-feeedback3">
                  <span className="home-text-feedback3">
                      On-Point Fundraiser&apos;da uzun zamandır aradığım yardım
                      topluluğunu buldum.
                    <br></br>
                    <span>
                      Bağış yaptıktan sonra da takip edebilme ve geri bildirim
                      alma imkanı sunulması beni memnun ediyor. Yardım ettiğim
                      projelerin ilerlemesini görmek ve başarılı sonuçlara
                      katkıda bulunduğumu bilmek tatmin edici. Bu online bağış
                      platformuyla bağış yapmak son derece kolay ve pratik!
                      Burada kişisel tercihlerime ve değerlerime uygun bir
                      yardım yapma imkanı buluyorum.
                    </span>
                    <br></br>
                  </span>
                  <span className="home-text44">Aslı Çelik</span>
                  <span className="home-text45">BAĞIŞÇI</span>
                  <img
                    alt="profile"
                    src="https://images.unsplash.com/photo-1493593727793-67bd466f9b32?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI5MXx8ZmVtYWxlJTIwfGVufDB8fHx8MTY4NjY4MTY3N3ww&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-container15">
        <div className="home-blog">
          <div className="home-container16">
            <div className="home-blog-post-card">
              <div className="home-container17">
                <div className="home-container18">
                  <span className="home-text46">HABERLER</span>
                  <span className="home-text47">2 gün önce</span>
                </div>
                <h1 className="home-text48">
                  Yardım Derneği, Eğitim Projesiyle Binlerce Çocuğa Ulaştı
                </h1>
                <span className="home-text49">
                  Yardım Derneği, son eğitim kampanyasıyla binlerce dezavantajlı
                  çocuğa yardım eli uzattı. On-Point Fundraiser ile yürütülen
                  kampanya kapsamında, okul malzemeleri, kıyafetler ve eğitim
                  bursları sağlandı. Dernek, bu kampanya ile çocukların okula
                  devam etme şansını artırmayı ve eğitimde fırsat eşitliğini
                  desteklemeyi hedefledi. Kampanya sonucunda binlerce çocuğun
                  eğitimine katkıda bulunuldu ve geleceklerine umut ışığı oldu.
                </span>
                <div className="home-container19">
                  <a
                    href="https://news.google.com/home?hl=tr&amp;gl=TR&amp;ceid=TR:tr"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    Haberin Devamı-&gt;
                  </a>
                </div>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwNnx8c2Nob29sJTIwY2hpbGRyZW58ZW58MHx8fHwxNjg2NjgyNTUyfDA&amp;ixlib=rb-4.0.3&amp;w=1200"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="home-image5"
              />
            </div>
          </div>
          <div className="home-container20">
            <div className="home-blog-post-card1">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGZvb2QlMjBkb25hdGlvbnxlbnwwfHx8fDE2ODY2ODM2OTJ8MA&amp;ixlib=rb-4.0.3&amp;w=1200"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="home-image6"
              />
              <div className="home-container21">
                <div className="home-container22">
                  <span className="home-text50">HABERLER</span>
                  <span className="home-text51">3 gün önce</span>
                </div>
                <h1 className="home-text52">
                  Vakıf, Yemek Kampanyasıyla Evsizlere Yardım Etti
                </h1>
                <span className="home-text53">
                  Vakıf, kış aylarında evsizlerin daha sıcak bir yemeğe
                  ulaşmasını sağlamak için sıcak yemek kampanyası düzenledi.
                  Gönüllüler ve bağışçılar, vakfın çağrısına yanıt vererek maddi
                  destek sağladı ve kampanyaya katıldı. Bu sayede, sokakta
                  yaşayan ve açlıkla mücadele eden birçok insan besleyici
                  yemeklere erişim sağladı. Vakıf, evsizlere yönelik bu
                  kampanyayla insanların temel beslenme ihtiyaçlarını
                  karşılamayı amaçladı ve hedefine ulaştı.
                </span>
                <div className="home-container23">
                  <a
                    href="https://news.google.com/home?hl=tr&amp;gl=TR&amp;ceid=TR:tr"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    Haberin Devamı-&gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="home-blog-post-card2">
            <div className="home-container24">
              <div className="home-container25">
                <span className="home-text54">HABERLER</span>
                <span className="home-text55">2 hafta önce</span>
              </div>
              <h1 className="home-text56">
                Bağışçılar, Doğal Afet Yardımıyla Mağdur Bölgelerde Umut Saçtı
              </h1>
              <span className="home-text57">
                Son doğal afet kampanyasıyla mağdur bölgelerde büyük bir etki
                yarattı. On-Point Fundraiser&apos;da başlatılan kampanya
                afetzedeler için acil ihtiyaç malzemeleri, barınma desteği ve
                temel sağlık hizmetleri sağlandı. Bağışlarının emin ellerde
                olması dileyen binlerce bağışçı kampanyanın başlamasının hemen
                ardından boyunca gönüllülerin desteğiyle çok sayıda ailenin
                iyileşmesine yardımcı oldu. Bu çalışma afetlerin etkilediği
                topluluklara yardım eli uzatmayı ve onları zor zamanlarında
                desteklemeyi amaçlayarak büyük bir başarıya imza attı.
              </span>
              <div className="home-container26">
                <a
                  href="https://news.google.com/home?hl=tr&amp;gl=TR&amp;ceid=TR:tr"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2"
                >
                  Haberin Devamı-&gt;
                </a>
              </div>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;w=1200"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="home-image7"
            />
          </div>
        </div>
      </div>

      <div className="home-container27">
        <div className="home-banner">
          <span className="home-text58">
            Hedefe Yönelik Bağış Toplama Merkezi
          </span>
          <h1 className="home-text59">Gelişmelerden Haberdar Ol</h1>
          <span className="home-text60">
            Şimdi üye olmak yerine On-Point Fundraiser&apos;ın bültenini takip
            edebilirsin.
          </span>
          <div className="home-container28">
            <input
              type="Email"
              placeholder="Email "
              className="home-textinput input"
            />
            <button className="home-button button">Abone Ol</button>
          </div>
        </div>
      </div>

      <div className="home-container29">
        <footer className="home-footer">
          <div className="home-container30">
            <Link to="/" className="home-navlink2">
              <img
                alt="logo"
                src="/external/title-icon-200h-200h-200h.png"
                className="home-image8"
              />
            </Link>
            <nav className="home-nav1">
              <span className="home-text61">Hakkında</span>
              <span className="home-text62">SSS</span>
              <span className="home-text63">Fiyatlandırma</span>
              <span className="home-text64">İletişim</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container31">
            <span className="home-text65">
              © 2023 On-Point Fundraiser, Tüm Hakları Saklıdır.
            </span>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="twitter-icon">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="instagram-icon">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="facebook-icon">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
