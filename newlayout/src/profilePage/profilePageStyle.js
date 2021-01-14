import styled from 'styled-components'

const profilePageStyle = styled.main`
    main {
        min-height: 600px;
        height: 100vh;
        
        min-width: 350px;

        padding: calc(12vh + 2%) 2% 2%;

        display: flex;

        background: #F2F2F2;
    }

        section.secLeft, section.secRight {
            display: flex;
            flex-direction: column;

            width: 100%;
            

            padding: 0 5%;
        }

        section.secLeft * {
            color: #1E1E1E;
        }

            #profile-user-header, #profile-user-header-info-name, #profile-user-header-info-historic {
                display: flex;

                align-items: center;
            }
                
                #profile-user-header {
                    padding: 0 0 5%;
                }

                #profile-user-header #user-icon {
                    height: 120px;
                    width: 120px;

                    margin-right: 30px;

                    border: 5px solid #1E1E1E;
                }

                #profile-user-header-info {
                    width: 100%;
                }

                    #profile-user-header-info > div {
                        justify-content: space-between;
                    }

                    #profile-user-header-info-name {
                        font-size: 2.3rem;

                        min-width: 200px;
                    }

                    #profile-user-header-info-historic span {
                        margin: 0 10px;
                    }
                    
                    #profile-user-about-title {
                        display: flex;

                        margin: 2% 0;

                        font-size: 1.6rem;
                    }

                    #profile-user-about-title h2 {
                        margin: 0 20px;
                    }

                    #edit-profile-button {
                        position: relative;

                        bottom: -5px;
                    }


        section.secRight {
            padding-right: 0;
        }

        #profile-user-about {
            box-shadow: 4px 4px 35px rgba(0, 0, 0, 0.15);
            border-radius: 15px;

            background: #F2F2F2;

            padding: 5%;
        }

            #profile-user-about ul {
                list-style: none;
            }

                #profile-user-about li {
                    display: flex;

                    align-items: center;

                    margin: 5% 0;

                    font-size: 1.6rem;
                }

                    #profile-user-about svg {
                        margin-right: 20px;

                        min-height: 50px;
                        min-width: 50px;

                        display: flex;
                    }

                    #profile-user-about strong {
                        margin: 0 1%;
                    }

            #change-content-bar {
                position: absolute;

                left: -60px;
                top: 0;
            }
                .change-content-bar-button {
                    background: white;

                    width: 60px;
                    height: 60px;

                    border-radius: 0px;

                    padding: 10px 0;

                    transition: all .3s ease-out;

                    position: relative;
                    left: 0;
                }
                    .change-content-bar-button svg {
                        min-width: 35px;
                    }

                    .change-content-bar-button:hover {
                        justify-content: flex-start;

                        padding: 15px;

                        border-top-left-radius: 15px;
                        border-bottom-left-radius: 15px;

                        width: 200px;
                        
                        left: -140px;
                    }

                    .change-content-bar-button span {
                        opacity: 0;
                        width: 0;
                        

                        font-size: 1rem;

                        color: black;

                        font-weight: 500;

                        transition: all .3s ease-out ;
                    }

                        .change-content-bar-button:hover span {
                            opacity: 1;
                            width: initial;
                        }

                    .change-content-bar-button:hover svg {
                        margin-right: 10px;
                    }

                .change-content-bar-button.selected {
                    background: #1F1E1E;
                }

                .change-content-bar-button.selected * {
                    fill: #F2F2F2;

                    color: #F2F2F2;
                }

                    .change-content-bar-button.top {
                        border-top-left-radius: 15px;
                    }

                    .change-content-bar-button.bottom {
                        border-bottom-left-radius: 15px;
                    }

            #content {
                background: #1F1E1E;

                height: 100%;

                border-radius: 15px;

                border-top-left-radius: 0;

                position: relative;

                padding: 5% 1%;
            }
            
                #content-title {
                    font-size: 2rem;

                    padding-bottom: 10px;
                    padding-left: 10px;
                }

                #content-items {
                    height: 90%;

                    overflow-y: scroll;
                }

                #content-items::-webkit-scrollbar-thumb {
                    background: white;
                }
                    #profile-user-posts, #profile-user-friends {
                        padding: 0 4%;
                    }

                    #post {
                        width: 100%;
                    }

                #profile-user-friends {
                    display: grid;

                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: repeat(5, 1fr);

                    height: 95%;

                    gap: 5%;
                }

@media screen and (max-width: 1000px) {
    #profile-user-header-info-name {
        font-size: 2rem;
    }

    #profile-user-about li {
        font-size: 1.3rem;
    }

    #profile-user-friends {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 800px) {
    main {
        flex-direction: column;

        height: 100%;

        padding: 18vh 5% 5%;
    }

        section.secLeft, section.secRight {
            padding: 5% 0;
        }

        section.secLeft {
            margin-bottom: 30px;
        }
        
        section.secRight {
            margin-top: 30px;
        }

            #profile-user-header {
                flex-direction: column;
            }

                #profile-user-header #user-icon {
                    margin: 0;

                    height: 170px;
                    width: 170px;
                }

                #profile-user-header-info > div {
                    justify-content: center;

                    text-align: center;
                }

                    #profile-user-header-info > div h1 {
                        margin: 0 5%;
                    }

                    #profile-user-header-info-name {
                        font-size: 2rem;

                        position: relative;
                    }

                        #profile-user-header-info-name #edit-profile-button {
                            position: absolute;

                            height: 40%;

                            right: 0;
                            bottom: 20%;
                        }

            #profile-user-about-title {
                justify-content: center;
            }

            #profile-user-about li {
                font-size: 1.5rem;
            }

            #content {
                border-radius: 15px
            }

                #change-content-bar {
                    display: flex;

                    top: -60px;
                    
                    left: 0;
                    right: 0;

                    margin: 0 auto;

                    justify-content: center;
                }

                    .change-content-bar-button:hover {
                        border-bottom-left-radius: 0;
                        border-bottom-right-radius: 0;

                        left: initial;
                        right: initial;
                    }

                        .change-content-bar-button.bottom {
                            border-radius: 0;
                            border-top-right-radius: 15px;

                            display: flex;
                            flex-direction: row-reverse;
                        }

                            .change-content-bar-button.bottom:hover svg {
                                margin: 0;
                                margin-left: 10px;
                            }

                #content-items {
                    overflow: initial;
                }

                    #profile-user-friends {
                        gap: 25px;
                    }
}
`

export default profilePageStyle