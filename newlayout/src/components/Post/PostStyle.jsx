import styled from 'styled-components'

const PostStyle = styled.div`
    #post {
        width: 95%;

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
                    margin-right: 10px;

                    height: 45px;
                    width: 45px;
                }

                #post-header-username {
                    font-weight: 400;
                    font-size: 1.1rem;
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

            border-radius: 15px;
        }
            
            #post-body > svg {
                height: 15px;
                width: 15px;

                position: absolute;

                left: 30px;

                top: -12px;
            }

        #post-content {
            padding: 3% 0;

            font-size: 0.9rem;

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

            #post-comments-value {
                color: lightgray;
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

                font-weight: 600;
            }
            
            #post-footer button svg {
                height: 20px;

                margin-right: 5px;
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

                border-radius: 10px;

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

            padding: 0px 0px 10px;
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
                        margin-right: 10px;

                        height: 30px;
                        width: 30px;

                        position: relative;

                        top: -10px;
                    }


                    #comment-body p {
                        font-size: 0.8rem;

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

                    #comment #increase-like-button {
                        height: 25px;
                        width: 25px;
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

@media screen and (min-width: 1367px) {
    #post-header-username {
        font-size: 1.2rem;
    }
    #post-header span {
        font-size: 0.7rem;
    }
    #post-content {
        font-size: 1rem;
    }
}

@media screen and (max-width: 800px) {
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

@media screen and (max-width: 500px) {
    #post-header {
        flex-direction: column;
        align-items: flex-start;
    }

        #post-header span {
            margin-left: 50px;

            position: relative;
            top: -5px;
        }
}
`

export default PostStyle