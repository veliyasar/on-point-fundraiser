import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './campaign.css'

const Campaign = (props) => {
  return (
    <div className="campaign-container">
      <Helmet>
        <title>Kampanya - On-Point Fundraiser</title>
        <meta property="og:title" content="Kampanya - On-Point Fundraiser" />
      </Helmet>
      <div className="campaign-container01">
        <header data-role="Header" className="campaign-header">
          <Link to="/" className="campaign-navlink">
            <img
              alt="logo"
              src="/external/title-icon-200h-200h.png"
              className="campaign-image"
            />
          </Link>
          <header className="campaign-navbar-interactive">
            <div
              data-role="Nav"
              className="campaign-desktop-menu"
            >
              <nav
                data-role="Nav"
                className="campaign-nav"
              >
                <Link to="/search" className="campaign-navlink1">
                  &nbsp;Kampanya Ara&nbsp;
                </Link>
                <span className="campaign-text">SSS</span>
                <span className="campaign-text01">Hakkında</span>
                <span className="campaign-text02">İletişim</span>
              </nav>
            </div>
            <div className="campaign-btn-group">
              <Link to="/login" className="campaign-login button">
                Giriş Yap
              </Link>
              <Link to="/register" className="campaign-register button">
                Kayıt Ol
              </Link>
            </div>
          </header>
        </header>
      </div>

      <div className="campaign-container-example-campaign">
        <h1 className="campaign-text03">
          Geçen Yıl Orman Yangınlarında Zarar Gören Araziyi Yeniden Ağaçlandır!
        </h1>
      </div>
      <div className="campaign-container03">
        <div className="campaign-gallery">
          <div className="campaign-gallery-card">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1602980085374-7e743fff3cc6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxmb3Jlc3QlMjBmaXJlfGVufDB8fHx8MTY4NjY5NTE2MXww&amp;ixlib=rb-4.0.3&amp;h=1500"
              className="campaign-image1"
            />
          </div>
          <div className="campaign-gallery-card1">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1504203328729-b937e8e102f2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwM3x8Zm9yZXN0fGVufDB8fHx8MTY4Njc3NDMwNHww&amp;ixlib=rb-4.0.3&amp;h=1500"
              className="campaign-image2"
            />
          </div>
          <div className="campaign-gallery-card2">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1536245344390-dbf1df63c30a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGZvcmVzdCUyMGZpcmV8ZW58MHx8fHwxNjg2Njk1MTYxfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
              className="campaign-image3"
            />
          </div>
        </div>
      </div>
      <div className="campaign-container04">
        <div className="campaign-stats">
          <div className="campaign-stat">
            <h1 className="campaign-text04">
              <span>500</span>
              <span>+</span>
            </h1>
            <span className="campaign-text07">Bağışçı Sayısı</span>
            <span className="campaign-text08">
              Bu kampanyaya gönül vermiş 500+ bağışçı var!
            </span>
          </div>
          <div className="campaign-stat1">
            <h1 className="campaign-text09">%80</h1>
            <span className="campaign-text10">Asgari Miktar</span>
            <span className="campaign-text11">
              Projenin uygulanabilmesi için kampanya sahibi tarafından
              belirlenen minimum yüzdedir. Eğer bu yüzdeye ulaşılamadan süre
              dolarsa bağışlarınız size iade edilir.
            </span>
          </div>
          <div className="campaign-stat2">
            <h1 className="campaign-text12">%55</h1>
            <span className="campaign-text13">Karşılanan Miktar</span>
            <span className="campaign-text14">
              Hedeflenen tutara ulaşılmadığında toplanan miktar oranı kadar
              proje hayata geçirilebilecektir.
            </span>
          </div>
          <div className="campaign-stat3">
            <h1 className="campaign-text15">17</h1>
            <span className="campaign-text16">Kalan Gün Sayısı</span>
            <span className="campaign-text17">
              <span>
                Bu süre tamamlandıktan sonra proje hayata geçirilmeye
                başlanacaktır. Kampanya sahibinin seçeneğine göre kampanaya
                başladıktan sonra bağışlar alınmaya devam edilebilir.
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="campaign-container05">
        <span className="campaign-text20">
          <span className="campaign-text21">Sevgili Bağışçılar,</span>
          <br className="campaign-text22"></br>
          <br className="campaign-text23"></br>
          <span className="campaign-text24">
            Geçen yıl ülkemizin bazı bölgelerinde meydana gelen orman
            yangınları, doğamızı ve yaşam alanlarımızı büyük ölçüde etkiledi.
            Alevlerin yıkıcı etkileriyle birlikte birçok ağaç yok oldu, bitki
            örtüsü tahrip oldu ve hayvanların yaşam alanları ciddi şekilde zarar
            gördü. Ancak, umutsuzluğa kapılmak yerine, bu felaketin ardından
            yeniden doğuşa yardımcı olabiliriz.
          </span>
          <br className="campaign-text25"></br>
          <br className="campaign-text26"></br>
          <span className="campaign-text27">
            Bu kampanya, yangınlardan zarar gören arazileri yeniden
            ağaçlandırmak amacıyla bir araya gelmemizi hedefliyor. Amacımız, yok
            olan ağaçları ve bitki örtüsünü geri getirerek, canlıların yaşam
            alanlarını yeniden oluşturmak ve gelecek kuşaklara daha yeşil ve
            sağlıklı bir dünya bırakmaktır.
          </span>
          <br className="campaign-text28"></br>
          <br className="campaign-text29"></br>
          <span className="campaign-text30">
            Bağışlarınızla, yangınlar sonucu zarar gören bölgelerde ağaçlandırma
            projeleri yürüteceğiz. Bu projeler, yerel ekosistemlerin yeniden
            kurulmasını sağlayacak, erozyonu engelleyecek, su kaynaklarını
            koruyacak ve biyolojik çeşitliliği teşvik edecektir. Ayrıca,
            canlıların barınma ve beslenme ihtiyaçlarını karşılayacak yeni yaşam
            alanları oluşturarak ekosistemlerin dengesini sağlayacağız.
          </span>
          <br className="campaign-text31"></br>
          <br className="campaign-text32"></br>
          <span className="campaign-text33">
            Katkılarınız, tohumların dikilmesi, ağaç fidanlarının temini, bakım
            ve sulama faaliyetleri gibi ağaçlandırma süreçlerini
            destekleyecektir. Aynı zamanda, yerel topluluklarla işbirliği
            yaparak, bilinçlendirme çalışmaları düzenleyecek ve gelecek
            nesilleri doğanın değerlerine saygı duyan aktif bireyler haline
            getirmeyi hedefliyoruz.
          </span>
          <br className="campaign-text34"></br>
          <br className="campaign-text35"></br>
          <span className="campaign-text36">
            Ormanlarımız, temiz hava sağlamak, iklim değişikliğiyle mücadele
            etmek ve biyolojik çeşitliliği sürdürmek gibi önemli işlevlere
            sahiptir. Bu nedenle, sizin yardımınıza ihtiyacımız var. Her bağış,
            doğayı yeniden canlandırmak için büyük bir adım olacak ve
            geleceğimizi daha sürdürülebilir kılacak.
          </span>
          <br className="campaign-text37"></br>
          <br className="campaign-text38"></br>
          <span className="campaign-text39">
            Lütfen bu kampanyaya katılın ve yangınlarla zarar gören arazileri
            yeniden ağaçlandırmak için destek olun. Birlikte çalışarak, doğal
            güzellikleriyle ünlenen bölgelerimizi yeniden yeşillendirebilir ve
            gelecek nesillere umut dolu bir dünya bırakabiliriz.
          </span>
          <br className="campaign-text40"></br>
          <br className="campaign-text41"></br>
          <span className="campaign-text42">Teşekkürler!</span>
          <br></br>
        </span>
      </div>

      <div className="campaign-container06">
        <div className="campaign-steps">
          <h1 className="campaign-text44">Planlanan Aşamalar</h1>
          <div className="campaign-container07">
            <div className="campaign-container08">
              <div className="campaign-step">
                <h1 className="campaign-text45">1</h1>
                <h1 className="campaign-text46">Arazi Tespiti ve Planlama</h1>
                <span className="campaign-text47">
                  <span className="campaign-text48">
                    Bu aşama gönüllüler sayesinde tamamlandı! İlk aşamada,
                    yangınlarla etkilenen bölgeleri tespit edildi ve yeniden
                    ağaçlandırma için uygun alanlarını belirledik. Alanların
                    coğrafi ve iklimsel özelliklerini değerlendirerek en uygun
                    ağaç türlerini seçtik. Aynı zamanda, yerel halk, ormancılık
                    uzmanları ve sivil toplum kuruluşlarıyla işbirliği yaparak
                    projelerimizi planlayacak ve yerel katılımı teşvik etmeye
                    başladık.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="campaign-step1">
                <h1 className="campaign-text50">
                  <span>2</span>
                </h1>
                <h1 className="campaign-text52">Fidan Temini ve Hazırlık</h1>
                <span className="campaign-text53">
                  <span className="campaign-text54">
                    İkinci aşamada, seçilen ağaç türlerine ait fidanları temin
                    edeceğiz. Yerel fidanlıklarla işbirliği yaparak, yerli ve
                    doğal ağaç türlerini tercih edeceğiz. Fidanların bakımı ve
                    hazırlığı için gerekli altyapıyı oluşturacak ve toprak
                    analizleri, sulama sistemleri ve gübreleme gibi önemli
                    adımları atacağız. Bu aşamaya geçmek için bağışların
                    olgunlaşmasını bekliyoruz.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="campaign-container09">
              <div className="campaign-step2">
                <h1 className="campaign-text56">
                  <span>3</span>
                </h1>
                <h1 className="campaign-text58">Ağaçlandırma ve Bakım</h1>
                <span className="campaign-text59">
                  <span className="campaign-text60">
                    Üçüncü aşamada, belirlenen alanlarda ağaçlandırma
                    çalışmalarına başlayacağız. Toprağa uygun şekilde
                    fidanlarını ekiplerimizle birlikte dikecek, sulama ve bakım
                    işlemlerini gerçekleştireceğiz. Ağaçların sağlıklı büyümesi
                    ve kök salması için düzenli bakım ve koruma faaliyetleri
                    yürüteceğiz. Aynı zamanda, erozyonu önlemek ve bitki
                    örtüsünün hızla yeniden oluşmasını sağlamak için toprak
                    düzenlemesi ve otlatma kontrolleri gibi ek önlemler
                    alacağız.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="campaign-step3">
                <h1 className="campaign-text62">
                  <span>4</span>
                </h1>
                <h1 className="campaign-text64">İzleme ve Sürdürülebilirlik</h1>
                <span className="campaign-text65">
                  <span className="campaign-text66">
                    Bu aşamada, ağaçlandırma projelerimizin etkisini izleyecek
                    ve sürdürülebilirliği sağlamak için önlemler alacağız.
                    Belirlenen bölgelerdeki ağaçların büyüme sürecini takip
                    edecek ve sağlıklı bir şekilde gelişip gelişmediğini
                    değerlendireceğiz. Böylece, projelerimizin başarı oranını ve
                    etkisini değerlendirecek veriler elde edip bunları sizlerle
                    paylaşacağız.
                  </span>
                  <br className="campaign-text67"></br>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="campaign-container10">
        <footer className="campaign-footer">
          <div className="campaign-container11">
            <Link to="/" className="campaign-navlink2">
              <img
                alt="logo"
                src="/external/title-icon-200h-200h-200h.png"
                className="campaign-image4"
              />
            </Link>
            <nav className="campaign-nav1">
              <span className="campaign-text69">Hakkında</span>
              <span className="campaign-text70">SSS</span>
              <span className="campaign-text71">Fiyatlandırma</span>
              <span className="campaign-text72">İletişim</span>
            </nav>
          </div>
          <div className="campaign-separator"></div>
          <div className="campaign-container12">
            <span className="campaign-text73">
              © 2023 On-Point Fundraiser, Tüm Hakları Saklıdır.
            </span>
            <div className="campaign-icon-group">
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

export default Campaign
