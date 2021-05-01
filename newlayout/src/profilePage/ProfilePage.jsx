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
                    <div id='profile-user-container'>
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
                                    <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M38.4629 7.73988C37.8608 6.34567 36.9925 5.08225 35.9068 4.02034C34.8203 2.95527 33.5393 2.10888 32.1334 1.52718C30.6756 0.921602 29.112 0.611633 27.5334 0.615266C25.3188 0.615266 23.158 1.22171 21.2803 2.36722C20.8311 2.64124 20.4043 2.94222 20 3.27015C19.5957 2.94222 19.1689 2.64124 18.7197 2.36722C16.842 1.22171 14.6813 0.615266 12.4666 0.615266C10.8719 0.615266 9.32656 0.920735 7.8666 1.52718C6.45605 2.11116 5.18477 2.9512 4.09316 4.02034C3.00604 5.08105 2.13762 6.34477 1.53711 7.73988C0.912695 9.19085 0.59375 10.7317 0.59375 12.3174C0.59375 13.8133 0.899219 15.3721 1.50566 16.9578C2.01328 18.283 2.74102 19.6576 3.6709 21.0457C5.14434 23.2424 7.17031 25.5334 9.68594 27.8559C13.8547 31.7057 17.983 34.3651 18.1582 34.4729L19.2229 35.1557C19.6945 35.4567 20.301 35.4567 20.7727 35.1557L21.8373 34.4729C22.0125 34.3606 26.1363 31.7057 30.3096 27.8559C32.8252 25.5334 34.8512 23.2424 36.3246 21.0457C37.2545 19.6576 37.9867 18.283 38.4898 16.9578C39.0963 15.3721 39.4018 13.8133 39.4018 12.3174C39.4063 10.7317 39.0873 9.19085 38.4629 7.73988Z" fill="#2E2E2E"/>
                                    </svg>
                                    Atualmente em um relacionamento
                                </li>
                                <li>
                                    <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.0001 0C24.4623 0 31.3216 6.44877 31.3216 14.4045C31.3216 20.4913 26.7723 27.1247 17.7916 34.3757C17.2922 34.779 16.6555 35.0005 15.9972 35C15.3389 34.9995 14.7026 34.7769 14.204 34.3728L13.61 33.8882C5.02685 26.8263 0.678711 20.3554 0.678711 14.4045C0.678711 6.44877 7.538 0 16.0001 0ZM16.0001 8.86429C14.4373 8.86429 12.9384 9.44799 11.8333 10.487C10.7281 11.526 10.1073 12.9351 10.1073 14.4045C10.1073 15.8738 10.7281 17.283 11.8333 18.322C12.9384 19.361 14.4373 19.9447 16.0001 19.9447C17.563 19.9447 19.0619 19.361 20.167 18.322C21.2721 17.283 21.893 15.8738 21.893 14.4045C21.893 12.9351 21.2721 11.526 20.167 10.487C19.0619 9.44799 17.563 8.86429 16.0001 8.86429Z" fill="#2E2E2E"/>
                                    </svg>
                                    Mora em <strong>São Paulo</strong>
                                </li>
                                <li>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 36C8.05982 36 0 27.9402 0 18C0 8.05982 8.05982 0 18 0C27.9402 0 36 8.05982 36 18C36 27.9402 27.9402 36 18 36ZM19.2857 9.32143C19.2857 9.14464 19.1411 9 18.9643 9H17.0357C16.8589 9 16.7143 9.14464 16.7143 9.32143V20.25C16.7143 20.4268 16.8589 20.5714 17.0357 20.5714H18.9643C19.1411 20.5714 19.2857 20.4268 19.2857 20.25V9.32143ZM18 23.1429C17.4953 23.1532 17.0148 23.3609 16.6615 23.7214C16.3083 24.082 16.1104 24.5667 16.1104 25.0714C16.1104 25.5762 16.3083 26.0609 16.6615 26.4214C17.0148 26.782 17.4953 26.9897 18 27C18.5047 26.9897 18.9852 26.782 19.3385 26.4214C19.6917 26.0609 19.8896 25.5762 19.8896 25.0714C19.8896 24.5667 19.6917 24.082 19.3385 23.7214C18.9852 23.3609 18.5047 23.1532 18 23.1429Z" fill="#2E2E2E"/>
                                    </svg>
                                    Corno(a) por <strong>4 vezes</strong>
                                </li>
                            </ul>
                        </div>
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