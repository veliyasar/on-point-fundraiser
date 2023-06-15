import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Giriş Yap - On-Point Fundraiser</title>
        <meta property="og:title" content="Giriş Yap - On-Point Fundraiser" />
      </Helmet>
      <div className="login-container1">
        <header data-role="Header" className="login-header">
          <Link to="/" className="login-navlink">
            <img
              alt="logo"
              src="/external/title-icon-200h-200h.png"
              className="login-image"
            />
          </Link>
          <header className="login-navbar-interactive">
            <div
              data-role="Nav"
              className="login-desktop-menu"
            >
              <nav
                data-role="Nav"
                className="login-nav"
              >
                <Link to="/search" className="login-navlink1">
                  &nbsp;Kampanya Ara&nbsp;
                </Link>
                <span className="login-text">SSS</span>
                <span className="login-text01">Hakkında</span>
                <span className="login-text02">İletişim</span>
              </nav>
            </div>
            <div className="login-btn-group">
              <Link to="/login" className="login-login button">
                Giriş Yap
              </Link>
              <Link to="/register" className="login-register button">
                Kayıt Ol
              </Link>
            </div>
          </header>
        </header>
      </div>
      <div className="login-container2">
        <input
          type="text"
          required
          autoFocus
          placeholder="Email"
          autoComplete="email"
          className="login-textinput input"
        />
        <input
          type="text"
          required
          placeholder="Şifre"
          autoComplete="current-password"
          className="login-textinput1 input"
        />
        <Link to="/" className="login-navlink2 button">
          Giriş Yap
        </Link>
        <h1 className="login-text03">Tekrar Hoşgeldin</h1>
        <div className="login-container3">
          <input
            type="checkbox"
            autoComplete="off"
            className="login-checkbox"
          />
          <span className="login-text04">Oturumu açık bırak</span>
        </div>
        <div className="login-container4">
          <span className="login-text05">Henüz bir hesabın yok mu?</span>
          <Link to="/register" className="login-navlink3">
            Kayıt Ol
          </Link>
        </div>
      </div>
      <div className="login-container5">
        <img alt="image" src="/donator-300h.png" className="login-image1" />
        <img alt="image" src="/projects-500h.png" className="login-image2" />
        <img alt="image" src="/campaigner-500h.png" className="login-image3" />
        <span className="login-text06">1347</span>
        <span className="login-text07">22</span>
        <span className="login-text08">3</span>
        <span className="login-text09">Bağışçılar</span>
        <span className="login-text10">Devam Eden Kampanyalar</span>
        <span className="login-text11">Tamamlanan Kampanyalar</span>
        <span className="login-text12">
          <span>
            Çeşitli kampanyaları destekleyen sayısız bağışçı
          </span>
          <br></br>
          <span>verdiği desteğin arkasında durulacağını biliyor.</span>
          <br></br>
        </span>
        <span className="login-text17">
          <span>
            Proje sahipleri tarafından yönetilen ve
          </span>
          <br></br>
          <span>On-Point Fundraiser tarafından denetlenen </span>
          <br></br>
          <span>kampanyalar bağışçılarının güvenini kazanıyor.</span>
          <br></br>
        </span>
        <span className="login-text24">
          <span>Gerekli kaynaklara hızlı bir şekilde ulaşan </span>
          <br></br>
          <span>
            proje sahipleri fikirlerini hayata geçirerek
          </span>
          <br></br>
          <span>daha güzel bir dünya yaratmaya katkıda bulunuyor</span>
          <br></br>
        </span>
      </div>
      <div className="login-container6">
        <footer className="login-footer">
          <div className="login-container7">
            <Link to="/" className="login-navlink4">
              <img
                alt="logo"
                src="/external/title-icon-200h-200h-200h.png"
                className="login-image4"
              />
            </Link>
            <nav className="login-nav1">
              <span className="login-text31">Hakkında</span>
              <span className="login-text32">SSS</span>
              <span className="login-text33">Fiyatlandırma</span>
              <span className="login-text34">İletişim</span>
            </nav>
          </div>
          <div className="login-separator"></div>
          <div className="login-container8">
            <span className="login-text35">
              © 2023 On-Point Fundraiser, Tüm Hakları Saklıdır.
            </span>
            <div className="login-icon-group">
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

export default Login
