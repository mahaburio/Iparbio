import React from 'react'
import HeaderIntialize from '../../components/header/Header'
import { PhoneNumberInput } from '../../components/input/InputFields'
import { RiMapPinFill } from 'react-icons/ri';
import Footer from '../../components/footer/footer';

const ContactUs = () => {


  const locationsData = [
    {
      country: 'Ipar United States',
      organization: 'Ipar Health Sciences Inc',
      address: ['Columbia Center', '701 5th Avenue', 'Seattle, WA 98104'],
      contact: [
        'Customer Service',
        'Phone: 1-833-843-4727',
        'SupportUS@iparhealth.com',
        'Hours: Monday–Friday 10:00 a.m.–4:00 p.m. (PST)',
      ],
    },
    {
      country: 'Ipar Canada',
      organization: 'Ipar Health',
      address: [
        'Pacific Centre',
        '701 West Georgia St, #1500,',
        'Vancouver, V7Y 1C6, BC',
      ],
      contact: [
        'Customer Service',
        'Phone: +1 (604)801-5988',
        'SupportCA@iparhealth.com',
        'Hours: Monday–Friday 11:00 a.m.–4:00 p.m. (MST/MDT)',
      ],
    },
    {
      country: 'Ipar China',
      organization: 'Ipar Health Sciences Ltd',
      address: [
        'Tianhe New City',
        'Building A, Henan E Rd,',
        'High-tech Zone (Xinshi District), Urumqi, China',
        'No. 109, Quanyun Rd, Shenyang, China (Liaoning) Pilot Free Trade Zone, China',
      ],
      contact: [
        'Customer Service',
        'Phone: 400-888-4727',
        'SupportCN@iparhealth.com',
        'Hours: Monday–Friday 10:00 a.m.–5:00 p.m.',
      ],
    },
    {
      country: 'Ipar Kazakstan',
      organization: 'Ipar Health Kazakhstan',
      address: ['90 Shevchenko Str, Almaty 050022, Kazakhstan.'],
      contact: [
        'Customer Service',
        'Phone: +7(747)313-7888',
        'SupportKZ@iparhealth.com',
        'Hours: Monday–Friday 10:00 a.m.–5:00 p.m.',
      ],
    },
    {
      country: 'Ipar Kyrgyzstan',
      organization: 'Ipar Health',
      address: ['Baytik Baatyr St 41, Bishkek City 720005, Kyrgyz Republic'],
      contact: [
        'Customer Service',
        'Phone: +996(312)442 755',
        'SupportKG@iparhealth.com',
        'Hours: Monday–Friday 10:00 a.m.–5:00 p.m.',
      ],
    },
    {
      country: 'Ipar Uzbekistan',
      organization: 'IPAR Biotech',
      address: ['120A, A. Temur St,', 'Andijan 170100, Uzbekistan.'],
      contact: [
        'Customer Service',
        'Phone: +998979977717',
        'SupportUZ@iparhealth.com',
        'Hours: Monday–Friday 10:00 a.m.–5:00 p.m.',
      ],
    },
    {
      country: 'Ipar Tajikistan',
      organization: 'IPAR Biotech',
      address: [
        '408, 4th Floor, Business Center "Poytakht",',
        '45 Mirzo Tursunzade St, Dushanbe 730025, Tajikistan',
      ],
      contact: [
        'Customer Service',
        'Phone: +992 000774727',
        'SupportTJ@iparhealth.com',
        'Hours: Monday–Friday 10:00 a.m.–5:00 p.m.',
      ],
    },
    {
      country: 'Ipar Russia',
      organization: 'Ipar Biotech International',
      address: [
        '3B Entrance, Building 4, 1st Vrazhsky Lane,',
        'Moscow 119121, Russia',
      ],
      contact: [
        'Customer Service',
        'Phone: +7(499)2487458',
        'SupportRU@iparhealth.com',
        'Hours: Monday–Friday 11:00 a.m.–5:00 p.m.',
      ],
    },
    {
      country: 'Ipar Turkiye',
      organization: 'Ipar Health',
      address: [
        'Huzur Mah. Maslak Ayazağa Cad. No : 4',
        'Uniq B Blok K:5',
        'Ayazağa/Sarıyer, Istanbul 34396',
      ],
      contact: [
        'Customer Service',
        'Phone: +90(212)939-2700',
        'SupportTR@iparhealth.com',
        'Hours: Monday–Friday 9:00 a.m.–5:00 p.m.',
      ],
    },
  ];


  return (
    <div className='about_us'>
      <HeaderIntialize showDashboardMenu={false} pvBars={false} />


      {/* Contact Hero */}
      <section class="contact-hero py-5 bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 d-flex align-items-center justify-content-center">
              <div class="img">
                <img src="../images/contact-us.webp" alt="Contact us" />
              </div>
            </div>
            <div class="col-lg-7 mt-lg-0 mt-4">
              <div class="contact-us-details">
                <div class="main-head-title">Contact Us</div>
                <h5 class="gray fw-medium mt-3">
                  Have a question but not sure who to contact? Fill out the
                  form, and we’ll get back to you!
                </h5>

                <div class="input-section mt-5">
                  <form action="">
                    <div class="input-wrapper">
                      <div class="lb-in">
                        <label for="">First Name*</label>
                        <input type="text" required="" />
                      </div>
                      <div class="lb-in">
                        <label for="">Last Name*</label>
                        <input type="text" required="" />
                      </div>

                      <div class="lb-in">
                        <label for="">Email*</label>
                        <input type="email" required="" placeholder="someone@gmail.com" />
                      </div>

                      <div class="lb-in">
                        <label for="">Phone*</label>

                        <PhoneNumberInput />
                      </div>
                      <div class="lb-in subject">
                        <label for="">Add a subject</label>
                        <input type="text" />
                      </div>

                      <div class="lb-in message">
                        <label for="">Message</label>
                        <textarea name="" id=""></textarea>
                      </div>
                    </div>
                    <div class="btn-sec text-end mt-4">
                      <button class="tsp-btn">Cancel</button>
                      <button class="black-btn">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Location Section */}

      <section className="mt-5">
        <div className="container">
          <div className="locations">
            <div className="icon mb-3">
              <RiMapPinFill size={32} color='var(--white-100)' />
            </div>
            <div className="location-details">
              <h2 className="main-head-title">Locations</h2>
              {locationsData.map((loc, index) => (
                <div key={index} className="mt-5">
                  <div className="country fw-medium black">{loc.country}</div>
                  <div className="dts mt-3 ">
                    {/* Address */}
                    <div className="left">
                      <div className="org-name fw-medium black">{loc.organization}</div>
                      <ul className="p-0 m-0 gray">
                        {loc.address.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact */}
                    <div className="right">
                      <ul className="p-0 m-0 gray">
                        {loc.contact.map((info, i) => (
                          <li key={i}>{info}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ContactUs