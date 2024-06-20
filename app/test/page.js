import Image from 'next/image'
import React from 'react'

import './test.css'

export default function page() {
    return (
        <div className='bg-primary-blue'>

            <div className='container '>
                <div className='personal'>
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
                <div className='personal personal--small'>
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
                <div className='personal'>
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
            </div>
        </div>
    )
}
