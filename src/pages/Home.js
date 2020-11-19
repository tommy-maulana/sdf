import React, {Component} from 'react';

import Logo from '../demos/conference/images/logo-dark.png'
import LogoMobile from '../demos/conference/images/logo-dark@2x.png'
import Speaker1 from '../demos/conference/images/speakers/0.jpg'
import Speaker2 from '../demos/conference/images/speakers/1.jpg'
import Speaker3 from '../demos/conference/images/speakers/2.jpg'
import Speaker4 from '../demos/conference/images/speakers/3.jpg'
import Speaker5 from '../demos/conference/images/speakers/4.jpg'
import Speaker6 from '../demos/conference/images/speakers/5.jpg'
import Speaker7 from '../demos/conference/images/speakers/6.jpg'
import Speaker8 from '../demos/conference/images/speakers/7.jpg'
import Speaker9 from '../demos/conference/images/speakers/8.jpg'
import Speaker10 from '../demos/conference/images/speakers/9.jpg'
import Speaker11 from '../demos/conference/images/speakers/10.jpg'
import Speaker12 from '../demos/conference/images/speakers/11.jpg'
import About1 from '../demos/conference/images/about/1.jpg'
import About2 from '../demos/conference/images/about/2.jpg'


class Home extends React.Component{
    render(){
        return(
            <div>
                {/* <!-- Document Wrapper
	============================================= --> */}
	<div id="wrapper" class="clearfix">

		{/* <!-- Header
		============================================= --> */}
		<header id="header" class="responsive-sticky-header transparent-header dark header-size-sm" data-sticky-shrink="false">
			<div id="header-wrap">
				<div class="container">
					<div class="header-row justify-content-lg-between">

{/* 						<!-- Logo
						============================================= --> */}
						<div id="logo" class="mr-lg-0">
							<a href="#" data-scrollto="#slider" class="standard-logo" data-dark-logo="demos/conference/images/logo-dark.png"><img src={Logo} alt="Canvas Logo"/></a>
							<a href="#" data-scrollto="#slider" class="retina-logo" data-dark-logo="demos/conference/images/logo-dark@2x.png"><img src={LogoMobile} alt="Canvas Logo"/></a>
						</div>{/* <!-- #logo end --> */}

						<div id="primary-menu-trigger">
							<svg class="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
						</div>

{/* ß */}
						<nav class="primary-menu">

							<ul class="menu-container not-dark one-page-menu" data-easing="easeInOutExpo" data-speed="1250" data-offset="160">
								<li class="menu-item"><a class="menu-link" href="#section-about" data-href="#section-about"><div>About</div></a></li>
								<li class="menu-item"><a class="menu-link" href="#section-speakers" data-href="#section-speakers"><div>Speakers</div></a></li>
								<li class="menu-item"><a class="menu-link" href="#section-moderator" data-href="#section-moderator"><div>SDF Warriors</div></a></li>
								<li class="menu-item"><a class="menu-link" href="#section-schedule" data-href="#section-schedule"><div>Schedule</div></a></li>
								<li class="menu-item"><a class="menu-link" href="#section-tickets" data-href="#section-tickets"><div>Tickets</div></a></li>
								<li class="menu-item"><a class="menu-link" href="#section-sponsors" data-href="#section-sponsors"><div>Partners</div></a></li>
								
							</ul>

						</nav>{/* <!-- #primary-menu end -->

						<!-- Primary Navigation
						============================================= --> */}
						<nav class="primary-menu">

							<ul class="menu-container header-button">
								<li class="menu-item">
									<a href="https://bit.ly/RegistrasiSDF20" class="button button-effect m-0" data-scrollto="#section-tickets">Free Tickets</a>
								</li>
							</ul>

						</nav>{/* <!-- #primary-menu end --> */}

					</div>
				</div>
			</div>
			<div class="header-wrap-clone"></div>
		</header>{/* <!-- #header end --> */}

		{/* <!-- Hero/Slider
		============================================= --> */}
		<section id="slider" class="slider-element min-vh-60 min-vh-md-100 include-header" style={{background: "linear-gradient(#e66465, #9198e5);" }} >
			<div class="slider-inner">

				<div class="vertical-middle">
					<div class="container dark py-5 py-md-0">
						<div class="row justify-content-between mt-5 col-mb-50">
							<div class="col-lg-6 parallax" data-0="transform: translateY(0px); opacity: 1" data-300="transform: translateY(50px); opacity: 0">
								<span class="gradient-underline h4">FORTRAN</span>
								<h2 class="font-weight-bold display-2 mb-0">Sriwijaya Digital Festival</h2>
							</div>
							<div class="col-lg-6 d-flex align-items-lg-end flex-column parallax text-left text-lg-right mb-5 mb-lg-0" data-0="transform: translateY(0px)" data-700="transform: translateY(-50px)">
								<div class="mt-auto">
									<h2 class="mb-2 gradient-text">November 28-29, 2020</h2>
									<h4 class="font-weight-normal">Palembang - Sumatera Selatan<br/>Indonesia</h4>
									<a href="https://bit.ly/RegistrasiSDF20" class="button button-xxlarge button-white button-gradient m-0" data-scrollto="#section-tickets">Get Tickets Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>{/* <!-- #Slider end -->

		<!-- Content
		============================================= --> */}
		<section id="content" style={{backgroundColor:"#000"}}>
			<div class="content-wrap pt-0" style={{overflow: "visible"}}>

				{/* <!-- Section About
				============================================= --> */}
				<div id="section-about" class="section page-section bg-transparent pt-0 clearfix">

					<div class="container clearfix">

						<div class="mb-5 dark">
							<span class="display-4 font-weight-bold gradient-underline font-primary">About SDF</span>
						</div>

						<div class="clear"></div>

						<div class="row justify-content-around dark">
							<div class="col-md-6">
								<h4 class="font-body ls1 text-uppercase">Sriwijaya Digital Festival (SDF) 2020</h4>
								<p class="text-white-50">SDF 2020 menghadirkan pembicara yang ahli dibidangnya. Beberapa diantaranya dari Aruna.id, e-fishery, Gojek Singapore, Talabat Dubai, Tokopedia, Prakerja, PT Pusri dan masih banyak lagi!</p>
								<p class="text-white-50">Kegiatan ini berbentuk panel diskusi yang akan membahas bagaimana transformasi digital dapat membuka kesempatan dan tantangan bagi kita semua</p>
								<div class="row mt-5">
									<div class="col-6 col-sm-3">
										<div class="counter gradient-text"><span data-from="0" data-to="4" data-refresh-interval="1" data-speed="400"></span></div>
										<h5 class="font-body">Media Partners</h5>
									</div>

									<div class="col-6 col-sm-3">
										<div class="counter gradient-text"><span data-from="1" data-to="11" data-refresh-interval="2" data-speed="600"></span>+</div>
										<h5 class="font-body">Speakers</h5>
									</div>

									<div class="col-6 col-sm-3">
										<div class="counter gradient-text"><span data-from="1" data-to="23" data-refresh-interval="3" data-speed="1200"></span>+</div>
										<h5 class="font-body">Community Partners</h5>
									</div>

									<div class="col-6 col-sm-3">
										<div class="counter gradient-text"><span data-from="0" data-to="20" data-refresh-interval="50" data-speed="1500"></span>+</div>
										<h5 class="font-body">Startup Local</h5>
									</div>
								</div>
							</div>

							<div class="col-md-5">
								<div class="about-img position-relative">
									<div class="my-3 my-lg-0"><div class="gradient-bg"><img src={About2} alt="About Image"/></div></div>
									<div data-0="top: 160px" data-end="top: 120px"><div class="gradient-bg"><img src={About1} alt="About Image"/></div></div>
								</div>
							</div>
						</div>

					</div>

				</div>{/* <!-- #section-about end --> */}

				<div class="clear"></div>

				{/* <!-- Section Speakers
				============================================= --> */}
				<div id="section-speakers" class="section page-section bg-transparent pt-0 topmargin-lg clearfix">
					<div class="container">
						<div class="mb-5 dark d-flex flex-wrap justify-content-between align-items-center">
							<span class="display-4 font-weight-bold gradient-underline mb-0">Speakers</span>
							
						</div>
						<div class="card-columns mx-auto dark"  style={{maxWidth: "1000px"}}>
							<a href="#" class="team">
								<div class="team-image">
									<img src={Speaker1} alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Pigar</h4><span>Digital Leads at Digitalabs</span>
                                    <span>PT Semen Baturaja (Persero)</span>
                                    </div>
								</div>
							</a>

							<a href="#" class="team">
								<div class="team-image">
									<img src={Speaker2} alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Adelia April Lisianti </h4><span>Digital Product Manager</span>
                                    <span>PT Bank Negara Indonesia (Persero) Tbk</span>
                                    </div>
								</div>
							</a>

							<a href="#" class="team">
								<div class="team-image">
									<img src={Speaker3} alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Hengki Sihombing</h4><span>Direktur Operasi</span>
                                    <span>Kartu Prakerja</span>
                                    </div>
								</div>
							</a>

							<a href="#" class="team">
								<div class="team-image">
									<img src={Speaker4} alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Arief Rahmansyah</h4>
                                    <span>Machine Learning Engineer</span>
                                    <span>GO-JEK - Singapore</span>
                                    </div>
								</div>
							</a>

							<a href="#" class="team">
								<div class="team-image">
									<img src={Speaker5} alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Faisal Morensya</h4>
                                    <span>Software Engineer II</span>
                                    <span>Talabat - Dubai</span>
                                    </div>
								</div>
							</a>

							<a href="https://www.linkedin.com/in/zakiafrani/" class="team">
								<div class="team-image">
									<img src={Speaker6} alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">M Zaki Al-Afrani</h4>
                                    <span>Technical Architect</span>
                                    <span>Tokopedia</span>
                                    </div>
								</div>
							</a>

							<a href="https://www.linkedin.com/in/joneten-saputra-913816105/" class="team">
								<div class="team-image">
									<img src={Speaker7} alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Joneten Saputra</h4>
                                    <span>Executive Chairman</span>
                                    <span>Palembang Digital</span>
                                    </div>
								</div>
							</a>

							<a href="#" class="team">
								<div class="team-image">
									<img src={Speaker8} alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Ahmad Farisi</h4>
                                    <span>Lecturer</span>
                                    <span>STMIK Global Informatika MDP</span>
                                    </div>
								</div>
							</a>

                            <a href="https://www.linkedin.com/in/faridnaslam/" class="team">
								<div class="team-image">
									<img src={Speaker9} alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Farid Naufal Aslam</h4>
                                    <span>CEO & Cofounder</span>
                                    <span>Aruna.id</span>
                                    </div>
								</div>
							</a>

                            <a href="https://www.linkedin.com/in/sofianhw/detail/photo/" class="team">
								<div class="team-image">
									<img src={Speaker11} alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Sofian Hadiwijaya</h4>
                                    <span>CTO & Co-Founder</span>
                                    <span>Warung Pintar</span>
                                    </div>
								</div>
							</a>

                            <a href="https://www.linkedin.com/in/gibran-huzaifah-6358a04a/" class="team">
								<div class="team-image">
									<img src={Speaker10} alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Gibran Huzaifah</h4>
                                    <span>Chief Executive Officer</span>
                                    <span>eFishery</span>
                                    </div>
								</div>
							</a>

                            <a href="#" class="team">
								<div class="team-image">
									<img src={Speaker12} alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Malian Zikri</h4>
                                    <span>Chief Executive Officer</span>
                                    <span>Digital Creative</span>
                                    </div>
								</div>
							</a>

						</div>
					</div>
				</div>{/* <!-- #section-speaker end --> */}

				<div class="clear"></div>

				{/* <!-- Section Moderator
				============================================= --> */}
				<div id="section-moderators" class="section page-section bg-transparent pt-0 topmargin-lg clearfix">
					<div class="container">
						<div class="mb-5 dark d-flex flex-wrap justify-content-between align-items-center">
							<span class="display-4 font-weight-bold gradient-underline mb-0">SDF Warriors</span>
							
						</div>
						<div class="card-columns mx-auto dark"  style={{maxWidth: "1000px"}}>
							<a href="#" class="team">
								<div class="team-image">
									<img src="demos/conference/images/moderators/2.jpg" alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Raihan </h4><span>Ketua FORTRAN</span></div>
								</div>
							</a>

							<a href="#" class="team">
								<div class="team-image">
									<img src="demos/conference/images/speakers/001.jpg" alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Ardiansyah </h4><span>Wakil Ketua FORTRAN</span></div>
								</div>
							</a>

							<a href="#" class="team">
								<div class="team-image">
									<img src="demos/conference/images/speakers/001.jpg" alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Regina</h4><span>Bendahara FORTRAN</span></div>
								</div>
							</a>

							<a href="#" class="team">
								<div class="team-image">
									<img src="demos/conference/images/speakers/001.jpg" alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Rizal</h4><span>Ketua Tim Bidang Sekolah</span></div>
								</div>
							</a>

							<a href="#" class="team">
								<div class="team-image">
									<img src="demos/conference/images/speakers/001.jpg" alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Muhammad Shidqi</h4><span>Ketua Tim Bidang Kampus</span></div>
								</div>
							</a>

							<a href="#" class="team">
								<div class="team-image">
									<img src="demos/conference/images/speakers/001.jpg" alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Shabrina </h4><span>Event Management</span></div>
								</div>
							</a>

							<a href="#" class="team">
								<div class="team-image">
									<img src="demos/conference/images/speakers/001.jpg" alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Annisa</h4><span>Content Management</span></div>
								</div>
							</a>

							<a href="#" class="team">
								<div class="team-image">
									<img src="demos/conference/images/speakers/001.jpg" alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Riska</h4><span>Tech Manager</span></div>
								</div>
							</a>

							<a href="#" class="team">
								<div class="team-image">
									<img src="demos/conference/images/moderators/1.jpg" alt="John Doe"/>
								</div>
								<div class="team-desc">
									<div class="team-title"><h4 class="gradient-text">Taufiq Hakim</h4><span>EO Specialist</span></div>
								</div>
							</a>


						</div>
					</div>
				</div>{/* <!-- #section-speaker end -->

				<!-- Section Schedule
				============================================= --> */}
				<div id="section-schedule" class="section page-section bg-transparent pt-0 topmargin-lg clearix">
					<div class="container">
						<div class="mb-5 dark d-flex justify-content-between align-items-center">
							<span class="display-4 font-weight-bold gradient-underline mb-0">Schedule</span>
						</div>

						<div class="schedule-wrap mx-auto rounded" style={{maxWidth: "1000px"}}>
							<div class="tabs tabs-bb mb-0 clearfix" id="tab-9">

								<ul class="tab-nav d-flex clearfix">
									<li class="flex-fill"><a href="#tabs-1">28th <span class="d-none d-md-inline-block">November</span></a></li>
									<li class="flex-fill"><a href="#tabs-2">29th <span class="d-none d-md-inline-block">November</span></a></li>
									
								</ul>

								<div class="tab-container mt-5">
									<div class="tab-content clearfix" id="tabs-1">
										<dl class="row dark mb-0">

											<dt class="col-sm-3"><div class="schedule-time font-primary">9:00 am - 10.00 am</div></dt>
											<dd class="col-sm-9">
												<div class="schedule-desc">- Persiapan Streamyard</div>
                                                <div class="schedule-desc">- Play Video Trailer Acara</div>
											</dd>

											<dt class="col-sm-3"><div class="schedule-time font-primary">10.00 am - 10.10 am</div></dt>
											<dd class="col-sm-9">
												<div class="schedule-desc">Pembukaan oleh Host:<small>- Shabrina</small></div>
											</dd>

											<dt class="col-sm-3"><div class="schedule-time font-primary">10.10 am - 10.30 am</div></dt>
											<dd class="col-sm-9">
												<div class="schedule-desc">Opening Speech Ketua Aptikom Sumsel<small>- Darius Antoni</small></div>
											</dd>

											<dt class="col-sm-3"><div class="schedule-time font-primary">10.30 am - 11.00 am</div></dt>
											<dd class="col-sm-9">
												<div class="schedule-desc">Opening Speech Kepala Dinas Komunikasi dan Informatika Sumsel<small>- Ahmad Rizwan</small></div>
											</dd>

											<dt class="col-sm-3"><div class="schedule-time font-primary">11.00 am - 12.30 pm</div></dt>
											<dd class="col-sm-9">
												<div class="schedule-desc">Transformasi Digital disektor perbankan, produksi dan pemerintah
                                                <small>- Ramadhan</small>
                                                <small>- Pigar</small>
                                                <small>- Adelia</small>
                                                <small>- Hengky Sihombing</small>
                                                </div>
											</dd>

											<dt class="col-sm-3"><div class="schedule-time font-primary">12.30 pm - 01.30 pm</div></dt>
											<dd class="col-sm-9">
												<div class="schedule-desc">Break and Lunch</div>
											</dd>
                                            <dt class="col-sm-3"><div class="schedule-time font-primary">01.30 am - 03.00 pm</div></dt>
											<dd class="col-sm-9">
												<div class="schedule-desc">Berbagi Perjalanan dan Pengalaman dalam Memulai Karir Sebagai Software Engineer
                                                <small>- Arief Rahmansyah</small>
                                                <small>- Faisal Morensya</small>
                                                <small>- M Zaki Al-Afrani</small>
                                                </div>
											</dd>
                                            <dt class="col-sm-3"><div class="schedule-time font-primary">03.00 pm - 03.30 pm</div></dt>
                                            <dd class="col-sm-9">
												<div class="schedule-desc">Closing Panel dan Pengumuman Acara Besok 29 Nov 2020, serta ucapan Terima Kasih
                                                <small>- Shabrina</small>
                                                </div>
											</dd>
										</dl>
									</div>
									<div class="tab-content clearfix" id="tabs-2">
										<dl class="row dark mb-0">

											<dt class="col-sm-3"><div class="schedule-time font-primary">10.00 am - 10.10 am</div></dt>
											<dd class="col-sm-9">
												<div class="schedule-desc">Pembukaan oleh Host:
												<small>Shabrina</small>
												</div>
											</dd>

											<dt class="col-sm-3"><div class="schedule-time font-primary">10.10 am - 11.50 am</div></dt>
											<dd class="col-sm-9">
												<div class="schedule-desc">Peran Komunitas, Lembaga Kursus dan Kampus dalam Mengembangkan Talent Digital di Sumatera Selatan
												<small>- Malian Zikri</small>
												<small>- Ahmad Farisi</small>
												<small>- Joneten Saputra</small>
												</div>
											</dd>

											<dt class="col-sm-3"><div class="schedule-time font-primary">11.50 am - 12.15 pm</div></dt>
											<dd class="col-sm-9">
												<div class="schedule-desc">Quiz
												<small>- Riska</small></div>
											</dd>

											<dt class="col-sm-3"><div class="schedule-time font-primary">12.15 pm - 01.00 pm</div></dt>
											<dd class="col-sm-9">
												<div class="schedule-desc">Delicious Lunch<small>- Cafeteria</small></div>
											</dd>

											<dt class="col-sm-3"><div class="schedule-time font-primary">01.00 pm - 02.30 pm</div></dt>
											<dd class="col-sm-9">
												<div class="schedule-desc">Startup yang Melirik Kearifan Lokal (Warung, Tambak Ikan dan Nelayan)
												<small>- Sofian Hadiwijaya</small>
												<small>- Farid Naufal</small>
												<small>- Gibran</small>
												</div>
											</dd>

											<dt class="col-sm-3"><div class="schedule-time font-primary">02.30 pm - 03.30 pm</div></dt>
											<dd class="col-sm-9">
												<div class="schedule-desc">Ceremonial Closing
												<small>- Ketua Aptikom Sumsel</small></div>
											</dd>

										</dl>
									</div>
									

								</div>

							</div>
						</div>
					</div>
				</div>{/* <!-- #section-scedule end --> */}

				<div class="clear"></div>

				{/* <!-- Section Tickets
				============================================= --> */}
				<div id="section-tickets" class="section page-section bg-transparent pt-0 clearfix">
					<div class="container">
						<div class="mb-5 dark d-flex justify-content-between align-items-center">
							<span class="display-4 font-weight-bold gradient-underline mb-0">Tickets</span>
						</div>
					</div>


					<div class="position-relative">

						<div class="container">
							<div class="row pricing align-items-center">

								<div class="col-lg-3 col-sm-6">
									<div class="pricing-box disabled text-center">
										<div class="pricing-title title-sm">
											<h3 class="nott ls0">Early Bird(Full Event)</h3>
											<span>Valid until 15th Nov</span>
										</div>
										<div class="pricing-price early-bird-pricing font-primary font-weight-bold">
											SOLD
										</div>
										<div class="pricing-persons">
											<select class="required custom-select" name="early-bird-person" id="early-bird-person">
												<option value="1" selected>1 Person</option>
												<option value="2">2 Persons</option>
												
											</select>
										</div>
										<div class="pricing-action px-5">
											<a href="#" class="button button-large button-gradient btn-block m-0">Get Ticket</a>
										</div>
									</div>
								</div>

								<div class="col-lg-3 col-sm-6 mt-4 mt-sm-0">
									<div class="pricing-box text-center">
										<div class="pricing-title title-sm">
											<h3 class="nott ls0">1 Day Pass</h3>
											<span class="nott">Valid until 27th November</span>
										</div>
										<div class="pricing-price 1-day-pricing font-primary font-weight-bold">
											<span class="price-unit"></span>FREE
										</div>
										<div class="pricing-persons">
											<select class="required custom-select" name="1-day-pricing-person" id="1-day-pricing-person">
												<option value="1" selected>1 Person</option>
												<option value="2">2 Persons</option>
									
											</select>
										</div>
										<div class="pricing-action px-5">
											<a href="https://bit.ly/RegistrasiSDF20" class="button button-large button-gradient btn-block m-0">Get Ticket</a>
										</div>
									</div>
								</div>

								<div class="col-lg-3 col-sm-6 mt-4 mt-lg-0">
									<div class="pricing-box text-center">
										<div class="pricing-title title-sm">
											<h3 class="nott ls0">2 Days Pass</h3>
											<span class="nott">Valid until 26th November</span>
										</div>
										<div class="pricing-price 2-day-pricing font-primary font-weight-bold">
											<span class="price-unit"></span>FREE
										</div>
										<div class="pricing-persons">
											<select class="required custom-select" name="2-day-pricing-person" id="2-day-pricing-person">
												<option value="1" selected>1 Person</option>
												<option value="2">2 Persons</option>
											</select>
										</div>
										<div class="pricing-action px-5">
											<a href="https://bit.ly/RegistrasiSDF20" class="button button-large button-gradient btn-block m-0">Get Ticket</a>
										</div>
									</div>
								</div>

								<div class="col-lg-3 col-sm-6 mt-4 mt-lg-0">
									<div class="pricing-box text-center">
										<div class="pricing-title title-sm">
											<h3 class="nott ls0">Full Event</h3>
											<span class="nott">Valid until 26th November</span>
										</div>
										<div class="pricing-price full-pricing font-primary font-weight-bold">
											<span class="price-unit"></span>FREE
										</div>
										<div class="pricing-persons">
											<select class="required custom-select" name="full-pricing-person" id="full-pricing-person">
												<option value="1" selected>1 Person</option>
												<option value="2">2 Persons</option>
												
											</select>
										</div>
										<div class="pricing-action px-5">
											<a href="https://bit.ly/RegistrasiSDF20" class="button button-large button-gradient btn-block m-0">Get Ticket</a>
										</div>
									</div>
								</div>

							</div>
						</div>

						<div class="dotted-bg" style={{background: "url('demos/conference/images/dotted-bg.svg')"}} repeat center center></div>
					</div>

					<div class="container topmargin-lg">
						<div class="mx-auto dark center" style={{maxWidth: "850px"}}>
							<h3 class="display-4 gradient-text">Still Getting Confused?</h3>
							<p class="lead">Silahkan Hubungi kami jika ada kesulitan dalam melakukan registrasi dan pembelian tiket Sriwijaya Digital Festival 2020. Kami dengan senang hati akan memberikan informasi yang Anda perlukan</p>
							<a href="https://wa.me/+6285100404890" class="button button-xxlarge button-white button-light button-gradient-hover mt-4">Contact Us</a>
						</div>
					</div>
				</div>{/* <!-- #section-tickets end --> */}

				<div class="clear"></div>

				{/* <!-- Section Sponsors
				============================================= --> */}
				<div id="section-sponsors" class="section page-section bg-transparent pt-0 topmargin-lg clearfix">
					<div class="container">
						<div class="mb-5 dark d-flex justify-content-between align-items-center">
							<span class="display-4 font-weight-bold gradient-underline mb-0">Partners & Sponsors</span>
						</div>

						<div class="mx-auto schedule-wrap center dark rounded shadow-lg" style={{maxWidth: "1050px"}} style={{backgroundColor: "#000"}}>
							<h4 class="font-body mb-5">Media Partners</h4>
							<div class="d-flex flex-wrap align-items-center">
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/mediapartner/kotakode.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/mediapartner/sripoku.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/mediapartner/tribun.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/mediapartner/manaberita.png" alt="Brands"/></a></div>
							</div>
							<div class="line"></div>
							<h4 class="font-body mb-5">Community Partners</h4>
							<div class="d-flex flex-wrap align-items-center">
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/communitypartner/community-1.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/communitypartner/community-2.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/communitypartner/community-3.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/communitypartner/community-4.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/communitypartner/community-5.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/communitypartner/community-6.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/communitypartner/community-7.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/communitypartner/community-8.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/communitypartner/community-9.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/communitypartner/community-10.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/communitypartner/community-11.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/communitypartner/community-12.png" alt="Brands"/></a></div>
							</div>
							<div class="line"></div>
							<h4 class="font-body mb-5">Startup Partners</h4>
							<div class="d-flex flex-wrap align-items-center">
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/startuplocal/startup-01.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/startuplocal/startup-02.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/startuplocal/startup-03.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/startuplocal/startup-04.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/startuplocal/startup-05.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/startuplocal/startup-06.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/startuplocal/startup-07.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/startuplocal/startup-08.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/startuplocal/startup-09.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/startuplocal/startup-10.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/startuplocal/startup-11.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/startuplocal/startup-12.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/startuplocal/startup-13.png" alt="Brands"/></a></div>
							</div>
							<div class="line"></div>
							<h4 class="font-body mb-5">In Collaboration With</h4>
							<div class="d-flex flex-wrap align-items-center">
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/collab/kolab-01.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/collab/kolab-02.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/collab/kolab-03.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/collab/kolab-04.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/collab/kolab-05.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/collab/kolab-06.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/collab/kolab-07.png" alt="Brands"/></a></div>
								<div class="flex-fill p-3"><a href="#"><img src="demos/conference/images/collab/kolab-08.png" alt="Brands"/></a></div>
							</div>
						</div>
					</div>
					<div class="dotted-bg" style={{background: "url('demos/conference/images/dotted-bg.svg')"}} repeat center center></div>
				</div>{/* <!-- #section-Sponsors end --> */}

				<div class="clear"></div>



				<div class="clear"></div>

			</div>
		</section>{/* <!-- #content end -->

		<!-- Footer
		============================================= --> */}
		<footer id="footer" class="dark" style={{background: "linear-gradient(to bottom, rgba(255,255,255,.1), rgba(255,255,255,.03))"}} >
			
			{/* <!-- Copyrights
			============================================= --> */}
			<div id="copyrights" class="bg-transparent pt-0">
				<div class="container clearfix">

					<div class="w-100 text-center text-md-left">
						Copyrights &copy; 2020 Made by AGT<br/>
						
					</div>

				</div>
			</div>{/* <!-- #copyrights end --> */}
		</footer>{/* <!-- #footer end --> */}

	</div>{/* {<!-- #wrapper end -->
}
	<!-- Go To Top
	============================================= --> */}
	<div id="gotoTop" class="icon-angle-up"></div>
            </div>
        )
    }
}
export default Home;