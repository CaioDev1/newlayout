import React, {useState, useEffect, useRef} from 'react'

import Style from './HeaderBlockStyle'

import ButtonExpansionBlock from './ButtonExpansionBlock/ButtonExpansionBlock'
import Notification from './ButtonExpansionBlock/Notification/Notification'
import FriendRequest from './ButtonExpansionBlock/FriendRequest/FriendRequest'

import {Link} from 'react-router-dom'

function HeaderBlock() {
    const [isHeaderOptionsClicked, setIsHeaderOptionsClicked] = useState(false)
    const [isHeaderNotificationsClicked, setIsHeaderNotificationsClicked] = useState(false)
    const [isHeaderMessagesClicked, setIsHeaderMessagesClicked] = useState(false)

    const isMounted = useRef(false)

    function toggleNotificationPopUpIcon(e, show, isNotificationButton=false) {
        const element = e.target.closest('a')
        
        const icon = element.querySelector('#notification-value-pop-up')

        if(!show) {
            icon.classList.remove('open')
            icon.classList.add('closed')
        } else {
            icon.classList.remove('closed')
            icon.classList.add('open')
        }
   
    }

    useEffect(() => {
        if(isMounted.current) {
            document.querySelector('#notification-button svg').classList.toggle('rotated')
        } else {
            isMounted.current = true
        }
    }, [isHeaderNotificationsClicked])

    return (
    <Style>
        <header id='header-block'>
            <div id='header-left'>
                <svg width="170" height="36" viewBox="0 0 219 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M91 26.1548V15.8452C91 15.4705 91.3038 15.1667 91.6786 15.1667H91.7738C92.096 15.1667 92.3571 14.9055 92.3571 14.5833C92.3571 14.2612 92.6183 14 92.9405 14H127.06C127.382 14 127.643 14.2612 127.643 14.5833C127.643 14.9055 127.904 15.1667 128.226 15.1667H128.321C128.696 15.1667 129 15.4705 129 15.8452V26.1548C129 26.5295 128.696 26.8333 128.321 26.8333H128.226C127.904 26.8333 127.643 27.0945 127.643 27.4167C127.643 27.7388 127.382 28 127.06 28H92.9405C92.6183 28 92.3571 27.7388 92.3571 27.4167C92.3571 27.0945 92.096 26.8333 91.7738 26.8333H91.6786C91.3038 26.8333 91 26.5295 91 26.1548Z" fill="#191919" stroke="#191919"/>
                    <path d="M22.1963 35H43.3925L53.5981 33.8667L63.8037 32.1667L74.7944 29.9L85 27.6333V16.3L65.3738 19.7L43.3925 23.6667H19.8411L13.5607 21.4L5.71028 14.0333L2.57009 8.36667L1 1V17.4333L7.28037 27.0667L22.1963 35Z" fill="#191919" stroke="#191919"/>
                    <path d="M196.804 35H175.607L165.402 33.8667L155.196 32.1667L144.206 29.9L134 27.6333V16.3L153.626 19.7L175.607 23.6667H199.159L205.439 21.4L213.29 14.0333L216.43 8.36667L218 1V17.4333L211.72 27.0667L196.804 35Z" fill="#191919" stroke="#191919"/>
                </svg>
            </div> 
            <div id='header-main'>
                <div id='header-main-input-field'>
                    <div id='header-main-input-field-body'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8617 15.1406L11.0771 10.25C12.031 9.09375 12.5079 7.76042 12.5079 6.25C12.5079 5.11458 12.2335 4.06771 11.6848 3.10938C11.1361 2.15104 10.3874 1.39323 9.43866 0.835938C8.48994 0.278646 7.45917 0 6.34635 0C5.23353 0 4.20532 0.278646 3.26173 0.835938C2.31814 1.39323 1.57199 2.15104 1.02327 3.10938C0.474554 4.06771 0.200195 5.11458 0.200195 6.25C0.200195 7.38542 0.474554 8.43229 1.02327 9.39062C1.57199 10.349 2.31814 11.1068 3.26173 11.6641C4.20532 12.2214 5.23609 12.5 6.35404 12.5C7.88225 12.5 9.22584 11.9896 10.3848 10.9688L15.154 15.8438C15.2566 15.9479 15.3746 16 15.5079 16C15.6412 16 15.7566 15.9505 15.854 15.8516C15.9515 15.7526 16.0002 15.6328 16.0002 15.4922C16.0002 15.3516 15.954 15.2344 15.8617 15.1406ZM6.35404 11.5156C5.41045 11.5156 4.54122 11.2786 3.74635 10.8047C2.95148 10.3307 2.32327 9.6901 1.86173 8.88281C1.4002 8.07552 1.16943 7.19792 1.16943 6.25C1.16943 5.30208 1.4002 4.42448 1.86173 3.61719C2.32327 2.8099 2.95148 2.16927 3.74635 1.69531C4.54122 1.22135 5.40789 0.984375 6.34635 0.984375C7.28481 0.984375 8.15148 1.22135 8.94635 1.69531C9.74122 2.16927 10.3694 2.8099 10.831 3.61719C11.2925 4.42448 11.5233 5.30208 11.5233 6.25C11.5233 6.65625 11.4771 7.05729 11.3848 7.45312C11.2925 7.84896 11.1617 8.21875 10.9925 8.5625C10.8233 8.90625 10.6207 9.23177 10.3848 9.53906C10.1489 9.84635 9.88225 10.1198 9.58481 10.3594C9.28737 10.599 8.96943 10.8047 8.63096 10.9766C8.2925 11.1484 7.9284 11.2812 7.53866 11.375C7.14891 11.4688 6.75404 11.5156 6.35404 11.5156Z" fill="#F2F2F2"/>
                        </svg>
                        <input type='text' name='' id='' placeholder='Search profile' />
                    </div>
                </div>
                <div id='header-main-button-field'>
                    <Link to='/' className='selected'>
                        <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.7197 1.02488C20.9724 0.365026 20.0033 0 18.9986 0C17.994 0 17.0249 0.365026 16.2776 1.02488L1.349 14.2051C0.924207 14.5805 0.584563 15.0396 0.352148 15.5525C0.119733 16.0654 -0.000249618 16.6206 3.89904e-07 17.182V35.9987C3.89904e-07 37.0599 0.428953 38.0777 1.19249 38.8281C1.95604 39.5784 2.99162 40 4.07143 40H9.5C10.5798 40 11.6154 39.5784 12.3789 38.8281C13.1425 38.0777 13.5714 37.0599 13.5714 35.9987V25.3286C13.5714 24.9749 13.7144 24.6357 13.9689 24.3855C14.2234 24.1354 14.5686 23.9949 14.9286 23.9949H23.0714C23.4314 23.9949 23.7766 24.1354 24.0311 24.3855C24.2856 24.6357 24.4286 24.9749 24.4286 25.3286V35.9987C24.4286 37.0599 24.8575 38.0777 25.6211 38.8281C26.3846 39.5784 27.4202 40 28.5 40H33.9286C35.0084 40 36.044 39.5784 36.8075 38.8281C37.571 38.0777 38 37.0599 38 35.9987V17.182C38.0002 16.6206 37.8803 16.0654 37.6479 15.5525C37.4154 15.0396 37.0758 14.5805 36.651 14.2051L21.7224 1.02488H21.7197Z" fill="#131313"/>
                        </svg>
                    </Link>
                    <Link onClick={e => {setIsHeaderMessagesClicked(preValue => {
                        setIsHeaderNotificationsClicked(false)

                        toggleNotificationPopUpIcon(e, false)

                        return !preValue
                    })}}>
                        <svg width="47" height="39" viewBox="0 0 47 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5916 38.4749C8.25419 38.742 7.84008 38.916 7.39788 38.9764C6.95569 39.0367 6.50376 38.9809 6.09517 38.8156C5.68657 38.6502 5.33826 38.3821 5.09114 38.0428C4.84401 37.7034 4.70832 37.3069 4.7 36.8998V32.0998C3.45348 32.0998 2.25802 31.6489 1.3766 30.8463C0.495177 30.0436 0 28.955 0 27.8199V12.8399C0 11.7048 0.495177 10.6162 1.3766 9.81353C2.25802 9.01088 3.45348 8.55996 4.7 8.55996H30.55C31.7965 8.55996 32.992 9.01088 33.8734 9.81353C34.7548 10.6162 35.25 11.7048 35.25 12.8399V27.8199C35.25 28.955 34.7548 30.0436 33.8734 30.8463C32.992 31.6489 31.7965 32.0998 30.55 32.0998H18.8071L8.5916 38.4749ZM37.6 21.4363C37.5925 21.6994 37.5925 21.9628 37.6 22.2259V21.4341C37.6117 21.2052 37.6141 18.3376 37.6094 12.8335C37.6075 11.1319 36.8639 9.50065 35.542 8.29806C34.2201 7.09547 32.428 6.41997 30.5594 6.41997H11.75V4.27998C11.75 3.14486 12.2452 2.05623 13.1266 1.25358C14.008 0.450925 15.2035 0 16.45 0H42.3C43.5465 0 44.742 0.450925 45.6234 1.25358C46.5048 2.05623 47 3.14486 47 4.27998V19.2599C47 20.395 46.5048 21.4837 45.6234 22.2863C44.742 23.089 43.5465 23.5399 42.3 23.5399V28.3399C42.2917 28.747 42.156 29.1435 41.9089 29.4828C41.6617 29.8221 41.3134 30.0902 40.9048 30.2556C40.4962 30.421 40.0443 30.4768 39.6021 30.4164C39.1599 30.3561 38.7458 30.1821 38.4084 29.9149L37.6 29.4099V21.4363Z" fill="#131313"/>
                        </svg>
                        <div id='notification-value-pop-up'>
                            <b>3</b>
                        </div>
                    </Link>
                    <Link id='notification-button' onClick={e => {setIsHeaderNotificationsClicked(preValue => {
                            setIsHeaderMessagesClicked(false)

                            toggleNotificationPopUpIcon(e, false)
                        
                            return !preValue
                    })}}>
                        <svg width="38" height="42" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0005 42C20.3079 42.0016 21.5833 41.598 22.6495 40.8453C23.7157 40.0926 24.5196 39.0282 24.9496 37.8H13.0514C13.4813 39.0282 14.2853 40.0926 15.3515 40.8453C16.4176 41.598 17.6931 42.0016 19.0005 42ZM33.7783 26.4306V16.8C33.7783 10.0443 29.1655 4.3533 22.9166 2.6418C22.298 1.092 20.7865 0 19.0005 0C17.2145 0 15.7029 1.092 15.0844 2.6418C8.83549 4.3554 4.22271 10.0443 4.22271 16.8V26.4306L0.619046 30.0153C0.422623 30.21 0.266849 30.4414 0.160691 30.6962C0.054533 30.951 8.83333e-05 31.2242 0.000490493 31.5L0.000490493 33.6C0.000490493 34.157 0.22291 34.6911 0.61882 35.0849C1.01473 35.4787 1.5517 35.7 2.1116 35.7H35.8894C36.4493 35.7 36.9863 35.4787 37.3822 35.0849C37.7781 34.6911 38.0005 34.157 38.0005 33.6V31.5C38.0009 31.2242 37.9464 30.951 37.8403 30.6962C37.7341 30.4414 37.5784 30.21 37.3819 30.0153L33.7783 26.4306Z" fill="#131313"/>
                        </svg>
                        <div id='notification-value-pop-up'>
                            <b>3</b>
                        </div>
                    </Link>
                    {
                        isHeaderMessagesClicked && (
                            <ButtonExpansionBlock side='header-main-side'>
                                <div id='button-expansion-block-title'>
                                    <h1>Mensagens</h1>
                                    <div id='expand-messages-button'>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.8215 0.00145671L10.0587 0.468833C9.92739 0.484744 9.8737 0.643851 9.96518 0.737326L11.0531 1.82522L8.00021 4.87808C7.9706 4.90799 7.95399 4.94837 7.95399 4.99045C7.95399 5.03254 7.9706 5.07292 8.00021 5.10282L8.89718 5.99979C8.95883 6.06144 9.06026 6.06144 9.12192 5.99979L12.1768 2.94493L13.2647 4.03283C13.2857 4.05381 13.3121 4.06845 13.3411 4.07507C13.37 4.08169 13.4002 4.08003 13.4282 4.07027C13.4562 4.06051 13.481 4.04306 13.4995 4.0199C13.5181 3.99675 13.5297 3.96883 13.5332 3.93935L13.9985 0.178463C14.0018 0.154445 13.9995 0.129991 13.9918 0.107014C13.9841 0.0840372 13.9711 0.063161 13.954 0.0460189C13.9368 0.0288768 13.916 0.0159337 13.893 0.0082029C13.87 0.000472097 13.8456 -0.00183672 13.8215 0.00145671ZM5.10248 8.00056C5.07258 7.97094 5.03219 7.95433 4.99011 7.95433C4.94803 7.95433 4.90764 7.97094 4.87774 8.00056L1.82488 11.0554L0.736984 9.96751C0.715995 9.94654 0.689519 9.9319 0.660591 9.92527C0.631664 9.91865 0.601456 9.92031 0.57343 9.93007C0.545404 9.93983 0.520695 9.95728 0.502135 9.98044C0.483574 10.0036 0.471914 10.0315 0.468491 10.061L0.00111487 13.8219C-0.0108181 13.9253 0.0747017 14.0108 0.178121 13.9989L3.941 13.5315C4.07226 13.5156 4.12596 13.3565 4.03447 13.263L2.94658 12.1751L6.00143 9.12027C6.06309 9.05862 6.06309 8.95718 6.00143 8.89553L5.10248 8.00056Z" fill="#1B1B1B"/>
                                        </svg>
                                    </div>
                                </div>
                                <div id='generic-notifications-field'>
                                    <Notification message content='Tô precisando de uma sugestão para meu texto, vais tá livre essa semana?' />
                                    <Notification message content='Oii!!'/>
                                </div>
                            </ButtonExpansionBlock>
                        )
                    }
                    {
                        isHeaderNotificationsClicked && (
                            <ButtonExpansionBlock side='header-main-side'>
                                <h1>Notificações</h1>
                                <div id='friend-requests-field'>
                                    <div id='friend-requests-field-header'>
                                        Solicitações de amizade
                                        <Link to='/home'>Ver todas</Link>
                                    </div>
                                    <div id='friend-requests'>
                                        <FriendRequest />
                                        <FriendRequest />
                                        <FriendRequest />
                                        <FriendRequest />
                                        <FriendRequest />
                                    </div>
                                </div>
                                <div id='generic-notifications-field'>
                                    <Notification content='amou seu comentário' />
                                </div>
                            </ButtonExpansionBlock>
                        )
                    }
                </div>
            </div>
            <div id='header-right'>
                <button id='header-right-options' onClick={() => {
                    setIsHeaderOptionsClicked(preValue => {
                        return !preValue
                    })
                }}>
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 9L0.138786 -5.20717e-07L14.8612 -1.80779e-06L7.5 9Z" fill="#F2F2F2"/>
                    </svg>
                    {
                        isHeaderOptionsClicked && (
                            <ButtonExpansionBlock side='header-right-side'>
                                <button id='header-right-options-exit'>
                                    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.666504 2.99998C0.666504 2.29274 0.947455 1.61446 1.44755 1.11436C1.94765 0.614264 2.62593 0.333313 3.33317 0.333313H15.3332C16.0404 0.333313 16.7187 0.614264 17.2188 1.11436C17.7189 1.61446 17.9998 2.29274 17.9998 2.99998V5.66665C17.9998 6.02027 17.8594 6.35941 17.6093 6.60945C17.3593 6.8595 17.0201 6.99998 16.6665 6.99998C16.3129 6.99998 15.9737 6.8595 15.7237 6.60945C15.4736 6.35941 15.3332 6.02027 15.3332 5.66665V2.99998H3.33317V19H15.3332V16.3333C15.3332 15.9797 15.4736 15.6406 15.7237 15.3905C15.9737 15.1405 16.3129 15 16.6665 15C17.0201 15 17.3593 15.1405 17.6093 15.3905C17.8594 15.6406 17.9998 15.9797 17.9998 16.3333V19C17.9998 19.7072 17.7189 20.3855 17.2188 20.8856C16.7187 21.3857 16.0404 21.6666 15.3332 21.6666H3.33317C2.62593 21.6666 1.94765 21.3857 1.44755 20.8856C0.947455 20.3855 0.666504 19.7072 0.666504 19V2.99998ZM21.0572 6.05731C21.3072 5.80735 21.6463 5.66693 21.9998 5.66693C22.3534 5.66693 22.6925 5.80735 22.9425 6.05731L26.9425 10.0573C27.1925 10.3073 27.3329 10.6464 27.3329 11C27.3329 11.3535 27.1925 11.6926 26.9425 11.9426L22.9425 15.9426C22.691 16.1855 22.3542 16.3199 22.0046 16.3169C21.655 16.3138 21.3206 16.1736 21.0734 15.9264C20.8262 15.6792 20.686 15.3448 20.6829 14.9952C20.6799 14.6456 20.8143 14.3088 21.0572 14.0573L22.7812 12.3333H9.99984C9.64622 12.3333 9.30708 12.1928 9.05703 11.9428C8.80698 11.6927 8.6665 11.3536 8.6665 11C8.6665 10.6464 8.80698 10.3072 9.05703 10.0572C9.30708 9.80712 9.64622 9.66665 9.99984 9.66665H22.7812L21.0572 7.94265C20.8072 7.69261 20.6668 7.35353 20.6668 6.99998C20.6668 6.64643 20.8072 6.30735 21.0572 6.05731Z" fill="#404040"/>
                                    </svg>
                                    Log out
                                </button>
                            </ButtonExpansionBlock>
                        )
                    }
                </button>
            </div>
        </header>
    </Style>
    )
}

export default HeaderBlock