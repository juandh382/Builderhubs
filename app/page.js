"use client"

import { useEffect, useState } from "react";
import Image from 'next/image'
import PhoneInput from 'react-phone-number-input'

import '../styles/landing-page.css'

const initialFormState = {
  email: '',
  name: '',
  phone: ''
}


export default function Home() {


  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);



  const [form, setForm] = useState(initialFormState)

  const handleInput = e => {

    setForm(state => ({ ...state, [e.target.name]: e.target.value }))

  }

  return (
    <>

      <section id="we-make-your-life-easy" className="bg-primary-blue ">

        <div className="container position-relative">

          <div className="row">
            <div className="col-md-6 pt-4">
              <h2>
                Construction business owner, we make <span className="text-red">your life easy...</span>
              </h2>
              <p>Revolutionize your bidding process with our accurate quantity takeoff and estimating services.</p>
              <a className="btn btn-primary mx-2">Book a meeting</a>
              <a className="btn btn-outline mx-2">Start a free trial</a>
            </div>
            <div className="col-md-6 position-relative">


              <div className='personal' id="joseph">
                <div className='personal__info'>
                  <div className='personal__info__profil__picture'>
                    <Image src={'/assets/img/joseph.png'} width={76} height={76} alt='' />
                  </div>

                  <h4>Joseph V.</h4>
                  <p>Bid Management Hub</p>
                </div>

                <p className='personal__info__benefits'><small>Benefits</small></p>
                <div className='row'>
                  <div className='col-3 personal__img__container'>
                    <Image
                      src={'/assets/img/calendar.png'}
                      width={20}
                      height={20}
                      alt=''
                    />
                  </div>
                  <div className='col-3 personal__img__container'>
                    <Image
                      src={'/assets/img/clock.png'}
                      width={20}
                      height={20}
                      alt=''
                    />
                  </div>
                  <div className='col-3 personal__img__container'>
                    <Image
                      src={'/assets/img/project.png'}
                      width={20}
                      height={20}
                      alt=''
                    />
                  </div>
                  <div className='col-3 personal__img__container'>
                    <Image
                      src={'/assets/img/file.png'}
                      width={20}
                      height={20}
                      alt=''
                    />
                  </div>

                </div>
              </div>
              <div className='personal personal--small' id="joseph-small">
                <div className='personal__info'>
                  <h4>Joseph V.</h4>
                  <p>Bid Management Hub</p>
                </div>

                <p className='personal__info__benefits'><small>Benefits</small></p>
                <div className='row'>
                  <div className='col-3 personal__img__container'>
                    <Image
                      src={'/assets/img/calendar.png'}
                      width={20}
                      height={20}
                      alt=''
                    />
                  </div>
                  <div className='col-3 personal__img__container'>
                    <Image
                      src={'/assets/img/clock.png'}
                      width={20}
                      height={20}
                      alt=''
                    />
                  </div>
                  <div className='col-3 personal__img__container'>
                    <Image
                      src={'/assets/img/project.png'}
                      width={20}
                      height={20}
                      alt=''
                    />
                  </div>
                  <div className='col-3 personal__img__container'>
                    <Image
                      src={'/assets/img/file.png'}
                      width={20}
                      height={20}
                      alt=''
                    />
                  </div>

                </div>
              </div>
              <div className='personal' id="alex">
                <div className='personal__info'>
                  <div className='personal__info__profil__picture'>
                    <Image src={'/assets/img/alex.png'} width={76} height={76} alt='' />
                  </div>

                  <h4>Alex S.</h4>
                  <p>Services Hub</p>
                </div>

                <p className='personal__info__benefits'><small>Benefits</small></p>
                <div className='row'>
                  <div className='col-3 personal__img__container'>
                    <Image
                      src={'/assets/img/calendar.png'}
                      width={20}
                      height={20}
                      alt=''
                    />
                  </div>
                  <div className='col-3 personal__img__container'>
                    <Image
                      src={'/assets/img/clock.png'}
                      width={20}
                      height={20}
                      alt=''
                    />
                  </div>
                  <div className='col-3 personal__img__container'>
                    <Image
                      src={'/assets/img/project.png'}
                      width={20}
                      height={20}
                      alt=''
                    />
                  </div>
                  <div className='col-3 personal__img__container'>
                    <Image
                      src={'/assets/img/file.png'}
                      width={20}
                      height={20}
                      alt=''
                    />
                  </div>

                </div>
              </div>

              <Image
                src={'/assets/img/computer-turned-on.png'}
                width={1013}
                height={617}
                alt=""
              />
            </div>
          </div>

          <div id="trusted-companies" className="row">

            <div className="col-md-3">
              <h4>TRUSTED BY +25 BUSINESS</h4>
            </div>
            <div className="col-md-9 position-relative">
              <div className="shadow shadow-left"></div>
              <div className="slider">
                <div className="slide-track">

                  <div className="slide">
                    <Image src="/assets/img/coda.png" alt="" width={63} height={51} />
                  </div>
                  <div className=" slide">
                    <Image src="/assets/img/inter.png" alt="" width={71} height={51} />
                  </div>
                  <div className="slide">
                    <Image src="/assets/img/atlassian.png" alt="" width={136} height={51} />
                  </div>
                  <div className="slide">
                    <Image src="/assets/img/click-travel-logo.png" alt="" width={134} height={51} />
                  </div>
                  <div className="slide">
                    <Image src="/assets/img/notion.png" alt="" width={92} height={51} />
                  </div>
                  <div className="slide">
                    <Image src="/assets/img/etoro.png" alt="" width={87} height={51} />
                  </div>
                  <div className="slide">
                    <Image src="/assets/img/h&r-block.png" alt="" width={116} height={51} />
                  </div>
                  <div className="slide">
                    <Image src="/assets/img/content-full.png" alt="" width={100} height={51} />
                  </div>
                  <div className="slide">
                    <Image src="/assets/img/coda.png" alt="" width={63} height={51} />
                  </div>
                  <div className=" slide">
                    <Image src="/assets/img/inter.png" alt="" width={71} height={51} />
                  </div>
                  <div className="slide">
                    <Image src="/assets/img/atlassian.png" alt="" width={136} height={51} />
                  </div>
                  <div className="slide">
                    <Image src="/assets/img/click-travel-logo.png" alt="" width={134} height={51} />
                  </div>
                  <div className="slide">
                    <Image src="/assets/img/notion.png" alt="" width={92} height={51} />
                  </div>
                  <div className="slide">
                    <Image src="/assets/img/etoro.png" alt="" width={87} height={51} />
                  </div>
                  <div className="slide">
                    <Image src="/assets/img/h&r-block.png" alt="" width={116} height={51} />
                  </div>
                  <div className="slide">
                    <Image src="/assets/img/content-full.png" alt="" width={100} height={51} />
                  </div>
                </div>
              </div>
              <div className="shadow shadow-right"></div>
            </div>

          </div>
        </div>
      </section>

      <section id="crm-hub" className="bg-light-golden">
        <div className="shape-container">

          <Image
            src={'/assets/img/shape-1.png'}
            width={1728}
            height={161}
            alt=""
          />

        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2>CRM <strong>Hub</strong></h2>
              <p>Revolutionize your bidding process with our accurate quantity takeoff and estimating services. Our cost-effective solutions help you bid smarter, offering a competitive edge in securing more projects while maximizing profitability.</p>
              <div className="row">
                <div className="col-1">
                  <Image src={'/assets/img/vector-5.png'} width={21} height={21} alt="" />
                </div>
                <div className="col-9">

                  <p>Estimate projects with precision and confidence using our state-of-the-art quantity takeoff and estimating services. Win more contracts, and maximize your profits</p>
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <Image src={'/assets/img/vector-7.png'} width={21} height={21} alt="" />
                </div>
                <div className="col-9">

                  <p>Our cost-effective solutions make bidding more accessible to businesses of all sizes, enabling you to allocate resources efficiently and expand your project portfolio.</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 form-container">
              <div className="shadow"></div>
              <form className="form">
                <h3>Set up a meeting</h3>
                <label htmlFor='name'>Full name</label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleInput}
                  value={form.name}
                  placeholder="Full name"
                />
                <label htmlFor='email'>Email address</label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleInput}
                  value={form.email}
                  placeholder="Email address"
                />
                <label htmlFor='phone'>Phone number</label>
                <PhoneInput
                  placeholder="Phone number"
                  value={form.phone}
                  name='phone'
                  id='phone'

                  onChange={(value) => {
                    if (!value) return;
                    setForm(state => ({ ...state, phone: value }))
                  }}
                />
                <button type="submit" className="btn btn-primary">Book a meeting</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="bid-management-hub" className=" bg-light-golden">
        <div className="container">

          <h2 className="align-right">Bid Management <strong>Hub</strong></h2>
          <div className="row">
            <div className="col-md-4 form-container">

              <form className="form">
                <h3>Set up a meeting</h3>
                <label htmlFor='name'>Full name</label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleInput}
                  value={form.name}
                  placeholder="Full name"
                />
                <label htmlFor='email'>Email address</label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleInput}
                  value={form.email}
                  placeholder="Email address"
                />
                <label htmlFor='phone'>Phone number</label>
                <PhoneInput
                  placeholder="Phone number"
                  value={form.phone}
                  name='phone'
                  id='phone'

                  onChange={(value) => {
                    if (!value) return;
                    setForm(state => ({ ...state, phone: value }))
                  }}
                />
                <button type="submit" className="btn btn-primary">Book a meeting</button>
              </form>
            </div>
            <div className="col-md-8">
              <p><strong>BidConnect simplifies the pre-bid management process for construction professionals. Seamlessly connect with the construction network, access vital project details, and secure valuable opportunities, all within one user-friendly platform.</strong></p>
              <div className="row justify-content-end">
                <div className="col-4 align-right">
                  <Image src={'/assets/img/vector-3.png'} width={45} height={45} alt="" />
                </div>
                <div className="col-8 text-secondary-violet">
                  <p>With BidConnect, stay ahead of the competition by efficiently managing pre-bid tasks and connecting with potential collaborators in the construction industry.</p>
                </div>
                <div className="col-4 align-right">
                  <Image src={'/assets/img/vector-4.png'} width={45} height={40} alt="" />
                </div>
                <div className="col-8 text-secondary-violet">
                  <p>With BidConnect, stay ahead of the competition by efficiently managing pre-bid tasks and connecting with potential collaborators in the construction industry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="your-life-easy" className="bg-primary-blue">
        <div className="shape-container">

          <Image
            src={'/assets/img/shape-2.png'}
            width={1728}
            height={161}
            alt=""
          />

        </div>

        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-md-7">

              <h2>Your life easy...</h2>
              <p>Revolutionize your bidding process with our accurate quantity takeoff and estimating services.</p>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div className="shadow"></div>
          <Image
            src={'/assets/img/phones-your-life-easy.png'}
            width={814}
            height={930}
            alt=""
          />

          <div className="your-life-easy-button-container">
            <a className="btn btn-primary mx-2">Book a meeting</a>
            <a className="btn btn-outline mx-2">Start free trial</a>
          </div>
        </div>

      </section>

      <section id="estimating-hub" className=" bg-primary-blue">
        <div className="container">
          <div className="row">
            <div className="col-md-7">

              <h2>Estimating <strong>Hub</strong></h2>
              <p><strong>Realtraker empowers construction projects with advanced software tools for real-time field and office workflow management. Stay on top of every aspect of your projects, ensuring efficient communication, scheduling, and resource allocation to deliver projects profitably and on time.</strong></p>
              <div className="row">
                <div className="col-1 align-right">
                  <Image src={'/assets/img/vector-5.png'} width={21} height={21} alt="" />
                </div>
                <div className="col-9">

                  <p>Optimize your construction projects with Realtraker's advanced software, seamlessly integrating field and office workflows in real time. Stay agile and responsive</p>
                </div>
              </div>
              <div className="row">
                <div className="col-1 align-right">
                  <Image src={'/assets/img/vector-6.png'} width={21} height={21} alt="" />
                </div>
                <div className="col-9">

                  <p>Realtraker revolutionizes project management by providing instant visibility into field and office operations. Streamline communication,  and enhance productivity.</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 form-container">
              <div className="shadow"></div>
              <form className="form form--dark">
                <h3>Set up a meeting</h3>
                <label htmlFor='name'>Full name</label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleInput}
                  value={form.name}
                  placeholder="Full name"
                />
                <label htmlFor='email'>Email address</label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleInput}
                  value={form.email}
                  placeholder="Email address"
                />
                <label htmlFor='phone'>Phone number</label>
                <PhoneInput
                  placeholder="Phone number"
                  value={form.phone}
                  name='phone'
                  id='phone'

                  onChange={(value) => {
                    if (!value) return;
                    setForm(state => ({ ...state, phone: value }))
                  }}
                />
                <button type="submit" className="btn btn-primary">Book a meeting</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="construction-management-hub" className=" bg-primary-blue">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-8">
              <h2>Construction Management <strong>Hub</strong></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 form-container">
              <div className="shadow"></div>
              <form className="form form--dark">
                <h3>Set up a meeting</h3>
                <label htmlFor='name'>Full name</label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleInput}
                  value={form.name}
                  placeholder="Full name"
                />
                <label htmlFor='email'>Email address</label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleInput}
                  value={form.email}
                  placeholder="Email address"
                />
                <label htmlFor='phone'>Phone number</label>
                <PhoneInput
                  placeholder="Phone number"
                  value={form.phone}
                  name='phone'
                  id='phone'

                  onChange={(value) => {
                    if (!value) return;
                    setForm(state => ({ ...state, phone: value }))
                  }}
                />
                <button type="submit" className="btn btn-primary">Book a meeting</button>
              </form>
            </div>
            <div className="col-md-7">
              <p className="align-right">BidConnect simplifies the pre-bid management process for construction professionals</p>
              <div className="row">
                <div className="col-1">
                  <Image src={'/assets/img/vector-7.png'} alt="" width={27} height={27} />
                </div>
                <div className="col">
                  <p>BidConnect streamlines the pre-bid process, offering construction professionals seamless access to project details and networking opportunities</p>

                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <Image src={'/assets/img/vector-5.png'} alt="" width={27} height={27} />
                </div>
                <div className="col">

                  <p>With BidConnect, stay ahead of the competition by efficiently managing pre-bid tasks and connecting with potential collaborators in the construction industry</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="done-for-your-services-hub" className=" bg-primary-blue">
        <div className="container">
          <div className="row">
            <div className="col-md-7">

              <h2>Done for your services <strong>Hub</strong></h2>
              <p>Revolutionize your bidding process with our accurate quantity takeoff and estimating services. Our cost-effective solutions help you bid smarter, offering a competitive edge in securing more projects while maximizing profitability.</p>
              <div className="row">
                <div className="col-1">
                  <Image src={'/assets/img/vector-8.jpg'} alt="" width={40} height={40} />
                </div>
                <div className="col">
                  <p>Estimate projects with precision and confidence using our state-of-the-art quantity takeoff and estimating services. Win more contracts, and maximize your profits</p>

                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <Image src={'/assets/img/vector-9.png'} alt="" width={21} height={21} />
                </div>
                <div className="col">
                  <p>Our cost-effective solutions make bidding more accessible to businesses of all sizes, enabling you to allocate resources efficiently and expand your project portfolio.</p>

                </div>
              </div>
            </div>

            <div className="col-md-5 form-container">
              <div className="shadow"></div>
              <form className="form form--dark">
                <h3>Set up a meeting</h3>
                <label htmlFor='name'>Full name</label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleInput}
                  value={form.name}
                  placeholder="Full name"
                />
                <label htmlFor='email'>Email address</label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleInput}
                  value={form.email}
                  placeholder="Email address"
                />
                <label htmlFor='phone'>Phone number</label>
                <PhoneInput
                  placeholder="Phone number"
                  value={form.phone}
                  name='phone'
                  id='phone'

                  onChange={(value) => {
                    if (!value) return;
                    setForm(state => ({ ...state, phone: value }))
                  }}
                />
                <button type="submit" className="btn btn-primary">Book a meeting</button>
              </form>
            </div>


          </div>
        </div>
        <div className="shape-container mb-0">
          <Image
            src={'/assets/img/shape-3.png'}
            width={1728}
            height={161}
            alt=""
          />

        </div>
      </section>

      <section id="elevate-your-construction-business-today" className=" bg-light-golden">

        <div className="container">

          <div className="row">
            <div className="col-md-6 pt-4">
              <h2>
                Elevate Your Construction Business <span className="text-red">Today</span>
              </h2>
              <a className="btn btn-primary mx-2">Book a meeting &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </a>
              <a className="btn btn-outline mx-2">Start a free trial &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </a>
            </div>
            <div className="col-md-6 position-relative">
              <div className="shadow"></div>
              <Image
                src={'/assets/img/computer.png'}
                width={1013}
                height={617}
                alt=""
                className="position-relative z-1"
              />
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
