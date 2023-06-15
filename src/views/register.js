import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Kayıt Ol - On-Point Fundraiser</title>
        <meta property="og:title" content="Kayıt Ol- On-Point Fundraiser" />
      </Helmet>
      <div className="register-container01">
        <header data-role="Header" className="register-header">
          <Link to="/" className="register-navlink">
            <img
              alt="logo"
              src="/external/title-icon-200h-200h.png"
              className="register-image"
            />
          </Link>
          <header className="register-navbar-interactive">
            <div
              data-role="Nav"
              className="register-desktop-menu"
            >
              <nav
                data-role="Nav"
                className="register-nav"
              >
                <Link to="/search" className="register-navlink1">
                  &nbsp;Kampanya Ara&nbsp;
                </Link>
                <span className="register-text">SSS</span>
                <span className="register-text01">Hakkında</span>
                <span className="register-text02">İletişim</span>
              </nav>
            </div>
            <div className="register-btn-group">
              <Link to="/login" className="register-login button">
                Giriş Yap
              </Link>
              <Link to="/register" className="register-register button">
                Kayıt Ol
              </Link>
            </div>
          </header>
        </header>
      </div>
      <div className="register-container02">
        <input
          type="text"
          required
          placeholder="Email"
          autoComplete="email"
          className="register-textinput input"
        />
        <input
          type="text"
          required
          placeholder="Şifre"
          autoComplete="current-password"
          className="register-textinput1 input"
        />
        <Link to="/" className="register-navlink2 button">
          Kayıt Ol
        </Link>
        <h1 className="register-text03">
          <span>Aramıza katıl</span>
          <br></br>
        </h1>
        <div className="register-container03">
          <input
            type="checkbox"
            autoComplete="off"
            className="register-checkbox"
          />
          <span className="register-text06">
            Kullanıcı Sözleşmelerini kabul ediyorum.
          </span>
        </div>
        <div className="register-container04">
          <span className="register-text07">
            <span>Zaten hesabın var mı?</span>
            <br></br>
          </span>
          <Link to="/login" className="register-navlink3">
            Giriş Yap
          </Link>
        </div>
        <div
          className="register-thq-dropdown list-item"
        >
          <ul className="register-dropdown-list">
            <li className="register-dropdown list-item">
              <div
                className="register-dropdown-toggle"
              >
                <span className="register-text10">
                  <span>Bağışçı</span>
                  <br></br>
                </span>
              </div>
            </li>
            <li
              className="register-dropdown01 list-item"
            >
              <div
                className="register-dropdown-toggle1"
              >
                <span className="register-text13">Kampanya Sahibi</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="register-container05">
          <div
            data-thq="thq-dropdown"
            className="register-thq-dropdown1 list-item"
          >
            <div
              className="register-dropdown-toggle2"
            >
              <span className="register-text14">
                <span>Hesap Türü</span>
                <br></br>
              </span>
              <div
                className="register-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="register-icon">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="register-dropdown-list1"
            >
              <li
                className="register-dropdown07 list-item"
              >
                <div
                  className="register-dropdown-toggle3"
                >
                  <span className="register-text17">
                    <span>Bağışçı</span>
                    <br></br>
                  </span>
                </div>
              </li>
              <li
                className="register-dropdown08 list-item"
              >
                <div
                  className="register-dropdown-toggle4"
                >
                  <span className="register-text20">
                    <span>Kampanya Sahibi</span>
                    <br></br>
                  </span>
                </div>
              </li>
              <li
                className="register-dropdown09 list-item"
              ></li>
              <li
                data-thq="thq-dropdown"
                className="register-dropdown10 list-item"
              ></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="register-container06">
        <img alt="image" src="/donator-300h.png" className="register-image1" />
        <img alt="image" src="/projects-500h.png" className="register-image2" />
        <img alt="image" src="/campaigner-500h.png" className="register-image3" />
        <span className="register-text23">1347</span>
        <span className="register-text24">22</span>
        <span className="register-text25">3</span>
        <span className="register-text26">Bağışçılar</span>
        <span className="register-text27">Devam Eden Kampanyalar</span>
        <span className="register-text28">Tamamlanan Kampanyalar</span>
        <span className="register-text29">
          <span>
            Çeşitli kampanyaları destekleyen sayısız bağışçı
          </span>
          <br></br>
          <span>verdiği desteğin arkasında durulacağını biliyor.</span>
          <br></br>
        </span>
        <span className="register-text34">
          <span>
            Proje sahipleri tarafından yönetilen ve
          </span>
          <br></br>
          <span>On-Point Fundraiser tarafından denetlenen</span>
          <br></br>
          <span>kampanyalar bağışçılarının güvenini kazanıyor.</span>
          <br></br>
        </span>
        <span className="register-text41">
          <span>Gerekli kaynaklara hızlı bir şekilde ulaşan</span>
          <br></br>
          <span>
            proje sahipleri fikirlerini hayata geçirerek daha
          </span>
          <br></br>
          <span>güzel bir dünya yaratmaya katkıda bulunuyor.</span>
          <br></br>
        </span>
      </div>

      <div className="register-container07">
        <footer className="register-footer">
          <div className="register-container08">
            <Link to="/" className="register-navlink4">
              <img
                alt="logo"
                src="/external/title-icon-200h-200h-200h.png"
                className="register-image4"
              />
            </Link>
            <nav className="register-nav1">
              <span className="register-text48">Hakkında</span>
              <span className="register-text49">SSS</span>
              <span className="register-text50">Fiyatlandırma</span>
              <span className="register-text51">İletişim</span>
            </nav>
          </div>
          <div className="register-separator"></div>
          <div className="register-container09">
            <span className="register-text52">
              © 2023 On-Point Fundraiser, Tüm Hakları Saklıdır.
            </span>
            <div className="register-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="twitter-icon"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="instagram-icon"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="facebook-icon"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Register
