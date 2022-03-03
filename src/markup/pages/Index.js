import React from 'react';
import Button from '@mui/material/Button';


// react router dom
 /*import { Link } from 'react-router-dom';*/

// sliders
import TestimonialSlider from '../components/TestimonialSlider';
import HeroSlider2 from '../components/HeroSlider2';
import YoutubeEmbed from '../components/YoutubeEmbed';



// Images //
import testimonial_img_1 from '../../assets/images/testimonial-bg-1.jpg';
import intro_bg from '../../assets/images/intro-bg.jpg';
import donateImage from '../../assets/images/donateimg.png';
import classic from '../../assets/images/classic.jpg';
import emir from '../../assets/images/emir.jpg';
import morris from '../../assets/images/morris.JPG';



const Index = () => {


    const testimonials = [
        {
            testimony: ' Morris is a powerful speaker who connected with the entire audience who were made up of the diversity of London. From students, city professionals, career changers and those looking for employment. His powerful message of resilience, purpose and action inspired us all to take action. He is a person that I would recommend for speaking engagements and one who we would like to have back again at Generation Success',
            name: 'James Adeleke FRSA - CEO Generation Success'
        }, 
        {
            testimony: 'Morris "The Connector" Lothian has presented at a number of our events and he has never disappointed with his valuable messages and insights around business and leadership. Mesmerising, inspirational and incredibly motivational are some of the words our audience used in feedback. He has a fascinating personal story and an exceptional business outlook, making him the perfect fit for our audiences.',
            name: 'Sonia Brown MBE - Founder National Black Women Network'
        },
        {
            testimony: 'We run motivational workshops in Schools and Universities all over the UK. It was my pleasure to invite Morris "The Connector" Lothian into several of my Schools. From the very start of his workshop he has the ability to capture their imaginations. He has met some of the worlds most famous celebrities and yet has kept his feet on solid ground. His life journey is filled with life skills and he weaves his personality in to the story telling',
            name: 'Andrew Muhammad - Director Reel Talk Action LTD'
        }
    ];

    return (
        <>
            {/* Hero Slider 2 - start */}
            <HeroSlider2/>
            {/* Hero Slider 2 - end */}

                    {/* intro section - start */}
        <div className="intro">
        <div className="intro-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="intro-content">
                            <h2>Introduction</h2>
                            <p className="paragraph-lg c-grey">Hello everyone my name is Morris The Connector I am the founder of
                                                                Morris The Connector CIC. The reason for this was because of my back
                                                                ground. I just wanted to be able to give back to the Children of this
                                                                world as they are the future. I came from a disadvantaged
                                                                background, a broken home, failed in school, turned to crime and
                                                                started selling drugs, I then ended up in prison along with many
                                                                personal trials along the way. Like losing my 18 Month old son Dwayne
                                                                and many more adversity .</p>

                            <p className="paragraph-lg c-grey">They say Adversity introduces a man or Women to themselves it
                                                                certainly did that for me. Against all odds I navigated my way through
                                                                the obstacles in life to become a successful business man working with
                                                                some of the biggest pop stars in the world like Justin Bieber, Beyonce
                                                                Whitney Houston, and many more. I have also have been invited to 10
                                                                Downing Street once to talk about Knife Crime .</p>
                      
                       
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="vertical-txt-wrapper right-align">
                            <h6 className="vertical-txt">#WearYourOwnCrown</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image intro-bg">
                <img src={intro_bg} alt="intro-bg" />
            </div>
        </div>
    </div>
    {/* intro section - end */}

            {/* icon text section - start */}
            <div className="icon-text">
                <div className="icon-text-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="icon-text-box icon-text-box-large txt-center">
                           
                                <h3 className="f-w-400 c-dark-2">My journey has been inspiring to others which has lead me to
                                                                becoming a inspirational speaker and transformational Coach.</h3>
                                <h4 className="f-w-400 c-grey">" Morris The Connector "</h4>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            {/* icon text section - end */}

            {/* tab section - start */}
   
            {/* tab section - end */}

            {/* testimonial slider section - start */}
            <div className="testimonial testimonial-1">
                <div className='testimonial-wrapper'>
                    <div className="container">
                        <div className="row">
                            <div className="testimonial-heading-content">
                                <h2 className="f-w-400 heading-40">Testimonials</h2>
                            </div>
                        </div>
                        <div className="row">
                            <TestimonialSlider testimonials={testimonials} />
                        </div>
                    </div>
                    <div className="background-img" style={{backgroundImage: `url(${testimonial_img_1})`}}></div>
                </div>
            </div>
            {/* testimonial slider section - end */}

            {/* Our Team Section Starts*/}
            <div className="intro">
        <div className="intro-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="intro-content">
                            <h2 style={{paddingBottom:50}}>Our Team</h2>
                            <br></br>
                            
                            <h3 className="right-align">Morris The Connector</h3>
                            <p className="paragraph-lg c-grey">I wanted to take this time to let you know more about me, how I got to this point in my life and, more importantly, how I can use the skills I have learned to help you.</p>

                            <p className="paragraph-lg c-grey">Like almost every single one of you reading this, my life has had its fair share of good times and bad. I’ve been blessed to have been able to revel in some incredible highlights, but they have also been interspersed with tragedy that would have broken many others. Trust me, it came close to breaking me too, but here I am.</p>

                            <p className="paragraph-lg c-grey">From growing up in the harsh inner city, I’ve known what it’s like to be down there looking up. From times when I’ve had absolutely nothing, I’ve worked hard. Eventually leading me to start up my own Executive Chaffeur business working with clients that have included Floyd Mayweather, Beyoncé, Justin Bieber and the late great Whitney Houston to name a few.</p>
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="hero-2-image">
                      {/*<img style={{marginTop:100}} className="main" src={sliderImage1} alt="slider" />*/ }
                         <div className="circle">
                             <img className="responsive-image" src={morris} alt="pattern" />
                        </div>
                     </div>
                    </div>
                </div>
                {/* Eric's Section */}
                <div className="row">
                    <div className="col-lg-6">
                        <div className="intro-content">
                   
                            <h3 style={{marginTop:100}} className="right-align">Eric Appiah-Agyemang</h3>
                            <p className="paragraph-lg c-grey">I wanted to take this time to let you know more about me, how I got to this point in my life and, more importantly, how I can use the skills I have learned to help you.</p>

                            <p className="paragraph-lg c-grey">Like almost every single one of you reading this, my life has had its fair share of good times and bad. I’ve been blessed to have been able to revel in some incredible highlights, but they have also been interspersed with tragedy that would have broken many others. Trust me, it came close to breaking me too, but here I am.</p>

                            <p className="paragraph-lg c-grey">Like almost every single one of you reading this, my life has had its fair share of good times and bad. I’ve been blessed to have been able to revel in some incredible highlights, but they have also been interspersed with tragedy that would have broken many others. Trust me, it came close to breaking me too, but here I am.</p>
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="hero-2-image">
                      {/*<img style={{marginTop:100}} className="main" src={sliderImage1} alt="slider" /> */ }
                         <div style={{marginTop:100}}  className="circle">
                             <img className="responsive-image" src={classic} alt="pattern" />
                        </div>
                     </div>
                    </div>
                </div>
                 {/* Eric Section Ends */}

        {/* Emir Section */}
        <div style={{marginBottom:100}} className="row">
                    <div className="col-lg-6">
                        <div className="intro-content">
                   
                            <h3 style={{marginTop:100}} className="right-align">Emir</h3>
                            <p className="paragraph-lg c-grey">His deepest passion lies in helping people to achieve their goals and
                                                                improve. An excellent leader and communicator with first class people
                                                                management and interpersonal skills, he is conscientious, diligent and
                                                                hardworking and continually looking for ways to build on the
                                                                experience and skills that have developed to date.</p>

                            <p className="paragraph-lg c-grey">He takes on new challenges with determination and approaches them
                                                                with confidence, setting high personal standards and always giving
                                                                100% to achieve targets and deliver results.
                                                                </p>

                            <p className="paragraph-lg c-grey">Emir always work tirelessly to implement improved performance and
                                                                develop strong customer and colleague relationships.
                                                                His greatest satisfaction comes from knowing his impact on people
                                                                has enriched their life and made them better in as many ways as they
                                                                are willing to take on to change.</p>
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="hero-2-image">
                      {/*<img style={{marginTop:100}} className="main" src={sliderImage1} alt="slider" /> */ }
                         <div style={{marginTop:100}}  className="circle">
                             <img className="responsive-image" src={emir} alt="pattern" />
                        </div>
                     </div>
                    </div>
                </div>
                 {/* Emir Section Ends */}
         </div>
                </div>
                    </div>
             {/* Our Team Section Ends*/}
          
             <YoutubeEmbed embedId="-5D3r3DO1x8" />

                  {/* Our Team Section Starts*/}
            <div className="intro">
        <div className="intro-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="intro-content">
                            <h2 style={{paddingBottom:50}}>Donate For Our Project</h2>
                            <br></br>
                    
                            <p className="paragraph-lg c-grey">We are Raising funds to provide youth with the life skills (Like taxes, cooking, accounting,
                                                                survival, emotional intelligence) that mainstream schooling does not
                                                                provide. Our target is £10,000.
                                                                </p>

                            <p style={{marginBottom:50}} className="paragraph-lg c-grey">Providing this from industry experts who give a means to cut
                                                                through the difference between what is in the textbook and what life
                                                                will throw at them. We aim to provide youth with the means to
                                                                improve their ability to navigate in today's fast-paced work.</p>
                                                                <div style= {{align: 'center'}} className="button-group">
                                             
                                                                <Button size='large' color='success'  href="https://gofund.me/94251c6b" variant="contained">Donate Now</Button>
                                           
                                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                         <div className="hero-2-image">-
                  <img style={{}} className="main" src={donateImage} alt="slider" /> 
                        </div>
                    </div>
                </div>
         </div>
                </div>
                    </div>
             {/* Our Team Section Ends*/}

            
             

        </>
        
    );
};

export default Index;
