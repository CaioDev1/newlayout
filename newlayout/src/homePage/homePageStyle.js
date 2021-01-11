import styled from 'styled-components'

export default styled.div`
    #home {
        display: grid;

        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr;

        grid-template-areas: 'b a c';

        gap: 40px;
        
        min-height: 100vh;

        padding: 20vh 2% 20px;

        background: #E5E5E5;
    }

        #user-bar, #friends-field, #newpost-field, #feed, #post-body, #trending-field, #trending-field-post-1, #trending-field-post {
            border-radius: 15px;
        }


        #left-block, #right-block {
            /* height: 100%;
            width: 100%; */

            position: relative;
        }

        #left-block {
            grid-area: b;
        }

            #user-field {
                position: fixed;

                min-width: calc(25% - 30px);
                max-height: calc(80% - 30px);
            }

                #user-bar, #friends-field {
                    width: 100%;
                }

                #user-bar {
                    display: flex;

                    align-items: center;

                    background: #1F1E1E;

                    height: 90px;

                    padding: 20px;
                }

                    #user-bar #user-icon {
                        margin-right: 10%;
                    }

                #friends-field {
                    background: #1F1E1E;;
                    
                    max-height: 50vh;

                    overflow-y: scroll;
                }

                #friends-field::-webkit-scrollbar {
                    display: none;
                }

                    #friends-field-header {
                        display: flex;

                        justify-content: space-between;

                        padding: 20px 20px 10px;
                    }

                        #friends-field-header-title {
                            font-weight: 400;
                        }

                    #friends-field-data {
                        padding: 15px 20px;
                        padding-right: 30px
                    }

                        #friends-content {
                            display: flex;

                            align-items: center;

                            justify-content: space-between;

                            margin-bottom: 20px;
                        }

                            #friends-content-info {
                                display: flex;

                                align-items: center;
                            }

                                #friends-content-info #user-icon {
                                    margin-right: 20px;
                                }

                            #friends-content-online-status {
                                height: 10px;
                                width: 10px;

                                background-color: green;

                                border-radius: 100px;
                            }

        .top-bar {
            margin-bottom: 40px;
        }

        #main-block {
            grid-area: a;

            width: 100%;
            height: 100%;
        }

            #newpost-field {
                display: flex;

                align-items: center;

                width: 100%;
                min-height: 80px;

                background: #1F1E1E;

                padding: 20px;

                position: relative;
            }

                #newpost-field #user-icon {
                    margin-right: 30px;

                    position: relative;

                    top: 0;

                    transition: top .3s ease-out;
                }

                #newpost-field.clicked #user-icon {
                    
                    top: -50px;
                }

                #newpost-field textarea {
                    width: 80%;
                    min-height: 50px;
                    height: 3rem;

                    border-radius: 100px;

                    resize: none;

                    padding: 15px 20px 0;

                    background: #2D2D2D;

                    transition: height .3s ease-out;
                }

                #newpost-field.clicked textarea {
                    border-radius: 30px;

                    height: 10rem;
                }

                    #newpost-field textarea::placeholder {
                        font-size: 15px;
                    }

                    #newpost-field-options {
                        display: flex;

                        min-width: 150px;

                        position: absolute;

                        right: 15%;
                        bottom: 15%;
                    }

                        #newpost-field-options-add-photo {
                            display: flex;

                            align-items: center;
                        }

                        #newpost-field-options-add-photo svg {
                            margin-right: 15px;

                            height: 25px;
                            width: 25px;
                        }

                        #newpost-field-options-send-button {
                            background: #5DC45B;
                            border-radius: 10px;

                            font-weight: 700;

                            width: 70%;

                            padding: 5px;

                            display: flex;

                            align-items: center;
                            justify-content: center;
                        }

            #feed {
                padding: 30px 15px;

                background: #1F1E1E;
            }

                #post {
                    width: 90%;

                    padding: 10px;
                }

                    #post-header {
                        display: flex;

                        align-items: center;

                        margin-bottom: 20px;
                    }

                        #post-header-user-info {
                            display: flex;

                            align-items: center;

                            margin-right: auto;
                        }

                            #post-header #user-icon {
                                margin-right: 15px;
                            }

                            #post-header-username {
                                font-weight: 400;
                            }

                    #post-header span {
                        font-size: 10px;
                    }

                    #post-body {
                        width: 90%;

                        padding: 10px 20px;

                        background: #2A2A2A;

                        margin-left: auto;

                        position: relative;
                    }
                        
                        #post-body > svg {
                            height: 15px;
                            width: 15px;

                            position: absolute;

                            left: 30px;

                            top: -12px;
                        }

                    #post-content {
                        padding: 5% 5%;

                        font-size: 15px;

                        word-break: break-all;
                    }

                        #post-content img {
                            width: 100%;
                        }

                    #post-metadata {
                        display: flex;

                        justify-content: space-between;

                        font-size: 0.8rem;

                        padding: 5px 0;
                    }

                        #post-likes-value {
                            display: flex;

                            align-items: center;
                        }
                        #post-likes-value svg {
                            margin-right: 5px;
                        }

                    #post-footer {
                        display: flex;

                        padding-top: 10px;

                        justify-content: space-around;

                        border-top: 1px solid rgba(242, 242, 242, 0.2);
                    }

                        #post-footer button {
                            display: flex;

                            justify-content: space-between;

                            align-items: center;
                        }
                        
                        #post-footer button svg {
                            height: 25px;

                            margin-right: 10px;
                        }

                    .post-heart-icon:hover * {
                        fill: #FF0000;
                    }
                    
                    #comment-field {
                        display: flex;

                        align-items: center;

                        width: 100%;
                    }

                        #comment-field > * {
                            height: 100%;
                        }

                    #comment-field-back-button {
                        margin-right: 15px;
                    }

                        #comment-field-input-body {
                            width: 100%;

                            min-height: 30px;
                            height: 100%;

                            display: flex;

                            align-items: center;

                            background: #F2F2F2;

                            border-radius: 25px;

                            padding: 0 10px;
                        }

                        #comment-field-input-body input {
                            width: 100%;
                            height: 100%;

                            padding-left: 10px;
                        }

                        #comment-field-input-body input, #comment-field-input-body input::placeholder {
                            color: #404040;
                            
                        }

                    #public-comments-field {
                        display: flex;
                        flex-direction: column;

                        align-items: center;

                        padding: 0px 20px 10px;
                    }

                        #public-comments-field hr {
                            width: 50%;

                            margin-bottom: 10px;
                        }

                            #comment {
                                display: flex;

                                align-items: center;

                                margin-bottom: 20px;
                            }
                                #comment #user-icon {
                                    margin-right: 15px;

                                    height: 30px;
                                    width: 30px;

                                    position: relative;

                                    top: -20px;
                                }


                                #comment-body p {
                                    font-size: 14px;

                                    width: 95%;
                                }

                                #comment-body-info {
                                    display: flex;
                                }

                                    #comment-body-info * {
                                        font-size: 0.7rem;
                                        font-weight: bold;
                                    }

                                    #comment-body-info > *{
                                        margin-right: 10px;

                                        display: flex;

                                        align-items: center;
                                    }
                    
                    #post-image-screen {
                        display: flex;

                        position: fixed;

                        top: 0;
                        left: 0;

                        z-index: 100;

                        padding: 5%;

                        align-items: center;
                        justify-content: center;

                        height: 100vh;
                        width: 100vw;

                        backdrop-filter: blur(5px);

                        background-color: rgba(0, 0, 0, 0.644);
                    }

                        #post-image-screen img {
                            height: 50vh;
                        }


                        

        #right-block {
            grid-area: c;
        }

            #trending-field {
                position: fixed;

                max-width: calc(25% - 30px);
                max-height: calc(80% - 20px);

                overflow-y: scroll;

                background: #1F1E1E;
            }

            #trending-field::-webkit-scrollbar {
                display: none;
            }

                #trending-field-title {
                    text-align: center;

                    font-size: 1.5rem;

                    font-weight: bold;

                    padding: 15px 0;
                }

                #trending-field-posts {
                    display: flex;

                    flex-direction: column;
                    
                    height: 100%;
                    width: 100%;

                    padding: 0 10px;
                }

                    #trending-field-post, #trending-field-post-1 {
                        background: #2A2A2A;

                        margin-bottom: 5%;

                        display: flex;
                    }

                    #trending-field-post-1 {
                        flex-direction: row;

                        padding: 5% 15%;

                        height: 170px;

                        position: relative;
                    }

                        #trending-field-post-1-data, #trending-field-post-data {
                            height: 100%;
                        }

                        #trending-field-post-1-data {
                            display: flex;

                            align-items: center;
                            justify-content: space-between;

                            flex-direction: column;
                        }

                            #trending-field-post-1-user-icon, #trending-field-post-user-icon, #user-icon {
                                height: 40px;
                                width: 40px;

                                border-radius: 100%;
                                background-color: darkgray;
                            }

                            #trending-field-post-1-user-icon {
                                margin: 0 auto;
                            }

                            #trending-field-post-1 p, #trending-field-post p {
                                text-align: justify;

                                word-break: break-all;

                                line-height: 1.3;

                                font-size: 13px;
                            }

                            #trending-field-post-1 p {
                                font-size: 0.9rem;

                                overflow: hidden;
                            }

                            #trending-field-post-1-like-field {
                                position: absolute;

                                top: 50%;
                                right: 4%;
                                

                                font-size: 1rem;
                            }

                            #trending-field-post-1-like-field, #trending-field-post-like-field {
                                display: flex;
                                flex-direction: column;

                                justify-content: center;
                                align-items: center;

                                height: 40px;
                                width: 30px;
                            }

                    #trending-field-post {
                        height: 100px;

                        padding: 5px;
                    }

                    #trending-field-post-data {
                        display: flex;

                        align-items: center;
                        justify-content: space-around;

                    }

                        #trending-field-post p {
                            width: 60%;
                        }

                        #trending-field-post-like-field {    
                            font-size: 0.8rem;
                        }

                        #trending-field-post-like-field svg, #trending-field-post-1-like-field svg {
                            height: 20px;
                            width: 20px;
                        }


    @media screen and (min-width: 800px) and (max-width: 1100px) {
        #home {
            grid-template-columns: 1fr 2fr;
            grid-template-areas: 'b a';
        }

        #right-block {
            display: none;
        }

        #user-field {
            min-width: calc(31%);
        }

        #post {
            width: 100%;
        }
    }

    @media screen and (max-width: 800px) {
        #home {
            grid-template-columns: 1fr;
            grid-template-areas: 'a';

            gap: 0;
        }

        #home {
            padding-top: 25vh;
        }

        #right-block, #left-block {
            display: none;
        }

        #post {
            width: 100%;
        }

            #post-body {
                width: 100%;
            }

                #public-comments-field {
                    padding-left: 0;
                    padding-right: 0;
                }
    }


    @media screen and (max-width: 400px) {
        #post-header {
            flex-direction: column;
            align-items: flex-start;
        }

            #post-header span {
                margin-left: 55px;
            }

        #newpost-field #user-icon {
            margin-right: 20px;
        }
    }
`