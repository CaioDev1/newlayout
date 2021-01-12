import styled from 'styled-components'

const profilePageStyle = styled.main`
    main {
        min-height: 100vh;
        max-height: 100vh;

        padding: calc(12vh + 2%) 2% 2%;

        display: flex;

        background: #F2F2F2;
    }

        section.secLeft, section.secRight {
            display: flex;
            flex-direction: column;

            width: 100%;

            padding: 0 5%;

           /*  position: relative; */
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
                }

                #profile-user-header-info {
                    width: 100%;
                }

                    #profile-user-header-info > div {
                        justify-content: space-between;
                    }

                    #profile-user-header-info-name, #profile-user-about-title {
                        font-size: 1.6rem;
                    }

        section.secRight {
            padding-right: 0;
        }
        
        #profile-user-about-title {
            display: flex;

            margin: 5% 0;
        }

            #profile-user-about-title h2 {
                margin: 0 20px;
            }

            #edit-profile-button {
                position: relative;

                bottom: -5px;
            }

        #profile-user-about {
            box-shadow: 4px 4px 35px rgba(0, 0, 0, 0.15);
            border-radius: 15px;

            background: #F2F2F2;

            /* height: 100%; */

            padding: 5%;
        }

            #profile-user-about ul {
                list-style: none;
            }

                #profile-user-about li {
                    display: flex;

                    align-items: center;

                    margin: 5% 0;

                    font-size: 1.3rem;
                }

                    #profile-user-about svg {
                        margin-right: 20px;

                        height: 40px;
                        width: 40px;
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
                }

                .change-content-bar-button.selected {
                    background: #1F1E1E;
                }

                .change-content-bar-button.selected * {
                    fill: #F2F2F2;
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

                padding: 5% 10%;
            }
            
                #content-title {
                    font-size: 2rem;

                    padding-bottom: 10px;
                }

                #content-items {
                    height: 95%;

                    overflow-y: scroll;
                }

                #content-items::-webkit-scrollbar-thumb {
                    background: white;
                }

                    #post {
                        width: 100%;
                    }
`

export default profilePageStyle