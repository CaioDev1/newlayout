import React, {useState} from 'react'

import Style from './profilePageStyle'

import HeaderBlock from '../components/HeaderBlock/HeaderBlock'
import UserIcon from '../components/UserIcon/UserIcon'

import Post from '../components/Post/Post'
import Friend from '../components/pages/profilePage/Friend/Friend'

function ProfilePage() {
    const [whichContentBar, setWhichContentBar] = useState('posts')

    function resizeObserver() {
        let friendsBox = document.querySelector('#profile-user-friends')

        new ResizeObserver(() => {
            friendsBox.offsetWidth <= 500 
                ? friendsBox.style.gridTemplateColumns = '1fr' 
                : friendsBox.style.gridTemplateColumns = '1fr 1fr'
        }).observe(friendsBox)
    } 

    function handleChangeContent(e) {
        const button = e.target.closest('.change-content-bar-button')

        if(!button.classList.contains('selected')) {
            button.classList.add('selected')

            const isTopButton = button.classList.contains('top')

            button.parentElement.querySelector(`.change-content-bar-button${isTopButton ? '.bottom' : '.top'}`)
                .classList.remove('selected')

            setWhichContentBar(isTopButton ? 'posts' : 'friends')
        }
    }

    return (
        <Style>
            <HeaderBlock />
            <main>
                <section className='secLeft'>
                    <div id='profile-user-header'>
                        <UserIcon />
                        <div id='profile-user-header-info'>
                            <div id='profile-user-header-info-name'>
                                <h1>O brabo do baile</h1>
                                <button id='edit-profile-button'>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.045 5C15.423 4.622 15.631 4.12 15.631 3.586C15.631 3.052 15.423 2.55 15.045 2.172L13.459 0.586C13.081 0.208 12.579 0 12.045 0C11.511 0 11.009 0.208 10.632 0.585L0 11.184V15.599H4.413L15.045 5ZM12.045 2L13.632 3.585L12.042 5.169L10.456 3.584L12.045 2ZM2 13.599V12.014L9.04 4.996L10.626 6.582L3.587 13.599H2ZM0 17.599H16V19.599H0V17.599Z" fill="#2E2E2E"/>
                                    </svg>
                                </button>
                            </div>
                            <div id='profile-user-header-info-historic'>
                                <span>5 publicações</span>
                                <span>14 amigos</span>
                            </div>
                        </div>
                    </div>
                    <span id='profile-user-about-title'>
                        <h2>Sobre</h2>
                        <button id='edit-profile-button'>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.045 5C15.423 4.622 15.631 4.12 15.631 3.586C15.631 3.052 15.423 2.55 15.045 2.172L13.459 0.586C13.081 0.208 12.579 0 12.045 0C11.511 0 11.009 0.208 10.632 0.585L0 11.184V15.599H4.413L15.045 5ZM12.045 2L13.632 3.585L12.042 5.169L10.456 3.584L12.045 2ZM2 13.599V12.014L9.04 4.996L10.626 6.582L3.587 13.599H2ZM0 17.599H16V19.599H0V17.599Z" fill="#2E2E2E"/>
                            </svg>   
                        </button> 
                    </span>
                    <div id='profile-user-about'>
                        <ul>
                            <li>
                                <svg width="40" height="40" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M41.4629 12.7399C40.8608 11.3457 39.9925 10.0822 38.9068 9.02034C37.8203 7.95527 36.5393 7.10888 35.1334 6.52718C33.6756 5.9216 32.112 5.61163 30.5334 5.61527C28.3188 5.61527 26.158 6.22171 24.2803 7.36722C23.8311 7.64124 23.4043 7.94222 23 8.27015C22.5957 7.94222 22.1689 7.64124 21.7197 7.36722C19.842 6.22171 17.6813 5.61527 15.4666 5.61527C13.8719 5.61527 12.3266 5.92073 10.8666 6.52718C9.45605 7.11116 8.18477 7.9512 7.09316 9.02034C6.00604 10.081 5.13762 11.3448 4.53711 12.7399C3.9127 14.1909 3.59375 15.7317 3.59375 17.3174C3.59375 18.8133 3.89922 20.3721 4.50566 21.9578C5.01328 23.283 5.74102 24.6576 6.6709 26.0457C8.14434 28.2424 10.1703 30.5334 12.6859 32.8559C16.8547 36.7057 20.983 39.3651 21.1582 39.4729L22.2229 40.1557C22.6945 40.4567 23.301 40.4567 23.7727 40.1557L24.8373 39.4729C25.0125 39.3606 29.1363 36.7057 33.3096 32.8559C35.8252 30.5334 37.8512 28.2424 39.3246 26.0457C40.2545 24.6576 40.9867 23.283 41.4898 21.9578C42.0963 20.3721 42.4018 18.8133 42.4018 17.3174C42.4063 15.7317 42.0873 14.1909 41.4629 12.7399Z" fill="#2E2E2E"/>
                                </svg>
                                Atualmente em um relacionamento
                            </li>
                            <li>
                                <svg width="40" height="40" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0001 0C24.4623 0 31.3216 6.85929 31.3216 15.3214C31.3216 21.7957 26.7723 28.8514 17.7916 36.564C17.2922 36.993 16.6555 37.2286 15.9972 37.228C15.3389 37.2274 14.7026 36.9907 14.204 36.5609L13.61 36.0454C5.02685 28.534 0.678711 21.6511 0.678711 15.3214C0.678711 6.85929 7.538 0 16.0001 0ZM16.0001 9.42857C14.4373 9.42857 12.9384 10.0494 11.8333 11.1545C10.7281 12.2597 10.1073 13.7585 10.1073 15.3214C10.1073 16.8843 10.7281 18.3832 11.8333 19.4883C12.9384 20.5934 14.4373 21.2143 16.0001 21.2143C17.563 21.2143 19.0619 20.5934 20.167 19.4883C21.2721 18.3832 21.893 16.8843 21.893 15.3214C21.893 13.7585 21.2721 12.2597 20.167 11.1545C19.0619 10.0494 17.563 9.42857 16.0001 9.42857Z" fill="#2E2E2E"/>
                                </svg>
                                Mora em <strong>São Paulo</strong>
                            </li>
                            <li>
                                <svg width="40" height="40" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 36C8.05982 36 0 27.9402 0 18C0 8.05982 8.05982 0 18 0C27.9402 0 36 8.05982 36 18C36 27.9402 27.9402 36 18 36ZM19.2857 9.32143C19.2857 9.14464 19.1411 9 18.9643 9H17.0357C16.8589 9 16.7143 9.14464 16.7143 9.32143V20.25C16.7143 20.4268 16.8589 20.5714 17.0357 20.5714H18.9643C19.1411 20.5714 19.2857 20.4268 19.2857 20.25V9.32143ZM18 23.1429C17.4953 23.1532 17.0148 23.3609 16.6615 23.7214C16.3083 24.082 16.1104 24.5667 16.1104 25.0714C16.1104 25.5762 16.3083 26.0609 16.6615 26.4214C17.0148 26.782 17.4953 26.9897 18 27C18.5047 26.9897 18.9852 26.782 19.3385 26.4214C19.6917 26.0609 19.8896 25.5762 19.8896 25.0714C19.8896 24.5667 19.6917 24.082 19.3385 23.7214C18.9852 23.3609 18.5047 23.1532 18 23.1429Z" fill="#2E2E2E"/>
                                </svg>
                                Corno(a) por <strong>4 vezes</strong>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='secRight'>
                    <div id='content'>
                        <div id='change-content-bar'>
                            <button className='change-content-bar-button top selected' onClick={handleChangeContent}>
                                <svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.75H28C29.4587 0.75 30.8576 1.32946 31.8891 2.36091C32.9205 3.39236 33.5 4.79131 33.5 6.25V33.75C33.5 35.2087 32.9205 36.6076 31.8891 37.6391C30.8576 38.6705 29.4587 39.25 28 39.25H6C4.54131 39.25 3.14236 38.6705 2.11091 37.6391C1.07946 36.6076 0.5 35.2087 0.5 33.75V6.25C0.5 4.79131 1.07946 3.39236 2.11091 2.36091C3.14236 1.32946 4.54131 0.75 6 0.75ZM6 3.5C5.27065 3.5 4.57118 3.78973 4.05546 4.30546C3.53973 4.82118 3.25 5.52065 3.25 6.25V33.75C3.25 34.4793 3.53973 35.1788 4.05546 35.6945C4.57118 36.2103 5.27065 36.5 6 36.5H28C28.7293 36.5 29.4288 36.2103 29.9445 35.6945C30.4603 35.1788 30.75 34.4793 30.75 33.75V6.25C30.75 5.52065 30.4603 4.82118 29.9445 4.30546C29.4288 3.78973 28.7293 3.5 28 3.5H6Z" fill="#1E1E1E"/>
                                    <path d="M6 13.125C6 12.7603 6.14487 12.4106 6.40273 12.1527C6.66059 11.8949 7.01033 11.75 7.375 11.75H26.625C26.9897 11.75 27.3394 11.8949 27.5973 12.1527C27.8551 12.4106 28 12.7603 28 13.125V32.375C28 32.7397 27.8551 33.0894 27.5973 33.3473C27.3394 33.6051 26.9897 33.75 26.625 33.75H7.375C7.01033 33.75 6.66059 33.6051 6.40273 33.3473C6.14487 33.0894 6 32.7397 6 32.375V13.125Z" fill="#1E1E1E"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.625C6 7.26033 6.14487 6.91059 6.40273 6.65273C6.66059 6.39487 7.01033 6.25 7.375 6.25H21.125C21.4897 6.25 21.8394 6.39487 22.0973 6.65273C22.3551 6.91059 22.5 7.26033 22.5 7.625C22.5 7.98967 22.3551 8.33941 22.0973 8.59727C21.8394 8.85513 21.4897 9 21.125 9H7.375C7.01033 9 6.66059 8.85513 6.40273 8.59727C6.14487 8.33941 6 7.98967 6 7.625Z" fill="#1E1E1E"/>
                                </svg>
                                <span>Publicações</span>
                            </button>
                            <button className='change-content-bar-button bottom' onClick={handleChangeContent}>
                                <svg width="41" height="28" viewBox="0 0 41 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3 14C16.2655 14 19.475 10.8687 19.475 7C19.475 3.13125 16.2655 0 12.3 0C8.33453 0 5.125 3.13125 5.125 7C5.125 10.8687 8.33453 14 12.3 14ZM17.22 16H16.6883C15.3558 16.625 13.8759 17 12.3 17C10.7241 17 9.25062 16.625 7.91172 16H7.38C3.30562 16 0 19.225 0 23.2V25C0 26.6562 1.37734 28 3.075 28H21.525C23.2227 28 24.6 26.6562 24.6 25V23.2C24.6 19.225 21.2944 16 17.22 16ZM30.75 14C34.1453 14 36.9 11.3125 36.9 8C36.9 4.6875 34.1453 2 30.75 2C27.3547 2 24.6 4.6875 24.6 8C24.6 11.3125 27.3547 14 30.75 14ZM33.825 16H33.5816C32.6911 16.3 31.7494 16.5 30.75 16.5C29.7506 16.5 28.8089 16.3 27.9184 16H27.675C26.3681 16 25.1637 16.3687 24.1067 16.9625C25.6698 18.6062 26.65 20.7875 26.65 23.2V25.6C26.65 25.7375 26.618 25.8687 26.6116 26H37.925C39.6227 26 41 24.6562 41 23C41 19.1313 37.7905 16 33.825 16Z" fill="#1E1E1E"/>
                                </svg>
                                <span>Amigos</span>
                            </button>
                        </div>
                        <h1 id='content-title'>
                            {
                                whichContentBar == 'posts' ? 'Publicações (25)' : 'Amigos(12)'
                            }
                        </h1>
                        <div id='content-items'>
                            {
                                whichContentBar == 'posts' ? (
                                    <div id='profile-user-posts'>
                                        <Post />
                                        <Post hasImage />
                                        <Post />
                                        <Post />
                                    </div>
                                ) :
                                <div id='profile-user-friends' onLoad={resizeObserver}>
                                    {
                                        [...Array(12)].map(() => {
                                            return (
                                                <Friend />
                                            )
                                        })
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </section>
            </main>
        </Style>
    )
}

export default ProfilePage