import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './search.css'

const Search = (props) => {
  return (
    <div className="search-container">
      <Helmet>
        <title>Ara - On-Point Fundraiser</title>
        <meta property="og:title" content="Ara - On-Point Fundraiser" />
      </Helmet>
      <div className="search-container1">
        <header data-role="Header" className="search-header">
          <Link to="/" className="search-navlink">
            <img
              alt="logo"
              src="/external/title-icon-200h-200h.png"
              className="search-image"
            />
          </Link>
          <header className="search-navbar-interactive">
            <div
              data-role="Nav"
              className="search-desktop-menu"
            >
              <nav
                data-role="Nav"
                className="search-nav"
              >
                <Link to="/search" className="search-navlink1">
                  &nbsp;Kampanya Ara&nbsp;
                </Link>
                <span className="search-text">SSS</span>
                <span className="search-text01">Hakkında</span>
                <span className="search-text02">İletişim</span>
              </nav>
            </div>
            <div className="search-btn-group">
              <Link to="/login" className="search-login button">
                Giriş Yap
              </Link>
              <Link to="/register" className="search-register button">
                Kayıt Ol
              </Link>
            </div>
          </header>
        </header>
      </div>
      <div className="search-container-input">
        <input
          type="text"
          placeholder="Ara.."
          autoFocus
          className="search-textinput input"
        />
      </div>
      <div className="search-container-discover">
        <div className="search-features">
          <h1 className="search-text-discover">Kampanyaları Keşfet</h1>
          <div className="search-container4">

            <Link to="/campaign">
              <div className="search-feature-card">
                <h2 className="search-text04">
                  Geçen Yıl Orman Yangınlarında Zarar Gören Araziyi Yeniden
                  Ağaçlandır!
                </h2>
                <span className="search-text05">
                  <span>500+ Bağışçı</span>
                  <br></br>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1536245344390-dbf1df63c30a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGZvcmVzdCUyMGZpcmV8ZW58MHx8fHwxNjg2Njk1MTYxfDA&amp;ixlib=rb-4.0.3&amp;w=300"
                  className="search-image1"
                />
              </div>
            </Link>

            <div className="search-feature-card1">
              <h2 className="search-text09">
                MS Hastalığı Farkındalık Çalışması için Kaynağa İhtiyacımız Var
              </h2>
              <span className="search-text10">
                <span>50+ Bağışçı</span>
                <br></br>
                <br></br>
              </span>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGdyb3VwfGVufDB8fHx8MTY4NjY5NDA3OHww&amp;ixlib=rb-4.0.3&amp;w=300"
                className="search-image2"
              />
            </div>

            <div className="search-feature-card2">
              <h2 className="search-text14">
                Depremden Etkilenen Vatandaşlar için Giysi Yardımı
              </h2>
              <span className="search-text15">
                <span>400+ Bağışçı</span>
                <br></br>
                <br></br>
              </span>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNsb3RoZXN8ZW58MHx8fHwxNjg2Njk0ODkyfDA&amp;ixlib=rb-4.0.3&amp;w=300"
                className="search-image3"
              />
            </div>

            <div className="search-feature-card3">
              <h2 className="search-text19">
                Başarılı İhtiyaç Sahibi Öğrencilere Burs Veriyoruz
              </h2>
              <span className="search-text20">
                <span>100+ Bağışçı</span>
                <br></br>
                <br></br>
              </span>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fHx8MTY4NjY5NTIyOHww&amp;ixlib=rb-4.0.3&amp;w=300"
                className="search-image4"
              />
            </div>

            <div className="search-feature-card4">
              <h2 className="search-text24">
                Kanser Hastalarının İlaçlarını Almaya Destek Oluyoruz
              </h2>
              <span className="search-text25">
                <span>100+ Bağışçı</span>
                <br></br>
                <br></br>
              </span>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1630094539416-5e17c6191be5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM4fHxwaWxsc3xlbnwwfHx8fDE2ODY2OTUyODN8MA&amp;ixlib=rb-4.0.3&amp;w=300"
                className="search-image5"
              />
            </div>

            <div className="search-feature-card5">
              <h2 className="search-text29">
                Kampüsteki Kedilerin Rehabilitasyonu için Bize Yardım Et!
              </h2>
              <span className="search-text30">
                <span>100+ Bağışçı</span>
                <br></br>
                <br></br>
              </span>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1542643223-e3963a5ae192?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHN0cmVldCUyMGNhdHxlbnwwfHx8fDE2ODY2OTU0ODh8MA&amp;ixlib=rb-4.0.3&amp;w=400"
                className="search-image6"
              />
            </div>

            <div className="search-feature-card6">
              <h2 className="search-text34">
                Kazada Yaralanan İşçinin Ailesi için Yardım Topluyoruz
              </h2>
              <span className="search-text35">
                <span>50+ Bağışçı</span>
                <br></br>
                <br></br>
              </span>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1614213951697-a45781262acf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHdvcmtlcnxlbnwwfHx8fDE2ODY2ODk1MTl8MA&amp;ixlib=rb-4.0.3&amp;w=300"
                className="search-image7"
              />
            </div>

          </div>
        </div>
      </div>

      <div className="search-container5">
        <footer className="search-footer">
          <div className="search-container6">
            <Link to="/" className="search-navlink3">
              <img
                alt="logo"
                src="/external/title-icon-200h-200h-200h.png"
                className="search-image8"
              />
            </Link>
            <nav className="search-nav1">
              <span className="search-text39">Hakkında</span>
              <span className="search-text40">SSS</span>
              <span className="search-text41">Fiyatlandırma</span>
              <span className="search-text42">İletişim</span>
            </nav>
          </div>
          <div className="search-separator"></div>
          <div className="search-container7">
            <span className="search-text43">
              © 2023 On-Point Fundraiser, Tüm Hakları Saklıdır.
            </span>
            <div className="search-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="twitter-icon">
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

export default Search
