import styled from 'styled-components'

export default styled.div`
    background: #E5E5E5;

    #home {
        display: grid;

        grid-template-columns: 0.9fr 1.65fr 1fr;
        grid-template-rows: 1fr;

        grid-template-areas: 'b a c';

        column-gap: 60px;
        
        min-height: 100vh;
        min-width: 350px;

        max-width: 1920px;

        margin: 0 auto;

        padding: 120px 10px 40px;
    }

        #user-bar, #friends-field, #newpost-field, #feed, #trending-field, #trending-field-post-1, #trending-field-post {
            border-radius: 12px;

            box-shadow: 0px 0px 40px rgb(0 0 0 / 25%);
        }


        #trending-field, #user-field {
            position: sticky;

            top: 100px;
            left: 0;
            /* max-height: 80vh; */
            max-height: calc(100vh - 120px - 15px);
        }

        #left-block {
            grid-area: b;
        }

                #user-bar, #friends-field {
                    width: 100%;
                }

                #user-bar {
                    display: flex;

                    align-items: center;

                    background: #1F1E1E;

                    height: 80px;

                    padding: 20px;
                }

                    #user-bar h3 {
                        font-weight: 400;
                    }

                    #user-bar #user-icon {
                        margin-right: 15px;

                        height: 50px;
                        width: 50px;
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

                            font-size: 1.2rem;
                        }

                        #friends-field-header svg {
                            height: 1.3rem;
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

                            #friends-content:last-child {
                                margin-bottom: 0;
                            }

                            #friends-content-info {
                                display: flex;

                                align-items: center;

                                font-size: 0.9rem;
                                font-weight: lighter; 
                            }

                                #friends-content-info #user-icon {
                                    margin-right: 20px;

                                    height: 30px;
                                    width: 30px;
                                }

                            #friends-content-online-status {
                                height: 7px;
                                width: 7px;

                                background-color: rgb(0, 253, 0);

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
                    margin-right: 10px;

                    position: relative;

                    top: 0;

                    transition: top .3s ease-out;
                }

                #newpost-field.clicked #user-icon {
                    top: -50px;
                }

                #newpost-field textarea {
                    width: 90%;
                    height: 40px;

                    border-radius: 100px;

                    resize: none;

                    padding: 12px 20px 0;

                    background: #2D2D2D;

                    box-shadow: 0px 0px 40px rgb(0 0 0 / 35%);

                    transition: all .3s ease;
                }

                #newpost-field.clicked textarea {
                    border-radius: 20px;

                    font-size: 15px;

                    height: 10rem;
                }

                    #newpost-field textarea::placeholder {
                        font-size: 14px;

                        font-weight: lighter;
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

        #right-block {
            grid-area: c; 
        }

            #trending-field {
                height: fit-content;
                
                overflow-y: auto;

                background: #1F1E1E;
            }

            #trending-field::-webkit-scrollbar {
                display: none;
            }

                #trending-field-title {
                    text-align: center;

                    font-size: 1.7rem;

                    font-weight: bold;

                    padding: 30px 0 15px;
                }

                #trending-field-posts {
                    display: flex;

                    flex-direction: column;
                    
                    height: 100%;
                    width: 100%;

                    padding: 0 15px;
                }

                    #trending-field-post, #trending-field-post-1 {
                        background: #2A2A2A;

                        margin-bottom: 5%;

                        display: flex;
                    }

                    #trending-field-post-1 {
                        flex-direction: row;

                        padding: 3% 17%;

                        height: 160px;

                        position: relative;
                    }

                        #trending-field-post-1-data, #trending-field-post-data {
                            height: 100%;
                        }

                        #trending-field-post-1-data {
                            display: flex;

                            flex-direction: column;
                        }

                            #trending-field-post-1 #user-icon {
                                margin: 0 auto 10px;
                            }

                            #trending-field-post-1 p, #trending-field-post p {
                                text-align: justify;

                                word-break: break-all;

                                line-height: 1.3;
                            }

                            #trending-field-post-1 p {
                                font-size: 0.9rem;

                                font-weight: 500;

                                line-height: 140%;

                                overflow: hidden;
                            }

                            #trending-field-post-1-like-field {
                                position: absolute;

                                top: 50%;
                                right: 4%;
                                
                                font-size: 0.9rem;
                            }

                            #trending-field-post-1-like-field, #trending-field-post-like-field {
                                display: flex;
                                flex-direction: column;

                                justify-content: center;
                                align-items: center;

                                min-height: 40px;
                                min-width: 30px;
                            }

                    #trending-field-post {
                        height: 85px;

                        padding: 5px;
                    }

                    #trending-field-post-data {
                        display: flex;

                        align-items: center;
                        justify-content: space-around;

                    }

                        #trending-field-post p {
                            width: 60%;

                            font-size: 0.8rem;
                        }

                        #trending-field-post-like-field {    
                            font-size: 0.8rem;
                        }

                        #trending-field-post-like-field svg, #trending-field-post-1-like-field svg {
                            height: 20px;
                            width: 20px;

                            margin-bottom: 3px;
                        }

    @media screen and (min-width: 1367px) {
        #home {
            column-gap: 80px;
            padding: 210px 30px 40px;
        }
            #user-icon {
                height: 60px;
                width: 60px;
            }
            #newpost-field, #user-bar {
                min-height: 115px;
            }
            #user-bar {
                font-size: 1.2rem;
            }
                #user-bar #user-icon {
                    height: 75px;
                    width: 75px;
                }
            #friends-field-header-title {
                font-size: 1.5rem;
            }
            #friends-field-header svg {
                height: 30px;
                width: 30px;
            }
            #friends-content-info #user-icon {
                height: 40px;
                width: 40px;
            }
            #friends-content-info p {
                font-size: 1.1rem;
            }
            #friends-content-online-status {
                height: 10px;
                width: 10px;
            }
            #newpost-field textarea {
                height: 60px;
                padding-top: 1rem;
                font-size: 1.2rem;
            }
                #newpost-field textarea::placeholder {
                    font-size: 1.1rem;
                }
            #trending-field, #user-field {
                max-height: calc(100vh - 210px - 15px);
            }
                
            #trending-field-title {
                font-size: 2rem;
            }
            #trending-field-post-1 #user-icon,
            #trending-field-post #user-icon {
                height: 50px;
                width: 50px;
            }
            #trending-field-post-1 {
                height: 190px;
            }
                #trending-field-post-1 p {
                    font-size: 1.1rem;
                }
                #trending-field-post-1-like-field,
                #trending-field-post-like-field {
                    font-size: 1rem;
                }
                    #trending-field-post-1-like-field svg,
                    #trending-field-post-like-field svg {
                        height: 30px;
                        width: 30px;
                    }
            #trending-field-post {
                height: 100px;
            }
                #trending-field-post p {
                    font-size: 1rem;
                }
        
    }


    @media screen and (min-width: 800px) and (max-width: 1100px) {
        #home {
            grid-template-columns: 1fr 2fr;
            grid-template-areas: 'b a';
        }

        #right-block {
            display: none;
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