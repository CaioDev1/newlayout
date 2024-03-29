import styled from 'styled-components'

export default styled.div`
    #header-block {
        display: grid;

        grid-template-columns: 1fr 1.8fr 1.1fr;
        grid-template-rows: 75px;

        gap: 40px;

        position: fixed;

        top: 0;
        left: 0;

        width: 100%;
        min-width: 350px;

        padding: 0 1%;

        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);

        background: #E5E5E5;

        z-index: 1;
    }

        #header-left, #header-main, #header-right {
            display: flex;

            align-items: center;

            height: 100%;
            width: 100%;
        }

        #header-left svg {
            width: 80px;
            height: 20px;
        }

            #header-main-button-field, #header-main-input-field {
                display: flex;

                align-items: center;

                height: 100%;
                width: 50%;
            }

            #header-main-button-field {
                justify-content: space-around;

                position: relative;
            }
            
                #header-main-button-field a {
                    display: flex;

                    align-items: center;
                    justify-content: center;

                    padding: 3% 3% 1.5%;

                    position: relative;
                }

                #header-main-button-field a.selected {
                    border-bottom: 3px solid #03A800;
                }

                    #header-main-button-field a svg {
                        min-height: 20px;
                        min-width: 20px;

                        height: 30px;
                        width: 30px;

                        transition: transform .2s ease-out;
                    }

                    #header-main-button-field a svg.rotated {
                        transform: rotate(25deg);
                    }

                        #notification-value-pop-up {
                            position: absolute;

                            font-size: 0.9rem;
                            font-weight: bold;

                            left: 50%;
                            top: 50%;

                            display: flex;

                            justify-content: center;
                            align-items: center;

                            background: #DE3D3D;

                            border-radius: 100%;

                            height: 10px;
                            width: 10px;

                            padding: 12px;

                            transition: all .2s ease-out;
                        }

                            #notification-value-pop-up.open {
                                opacity: 1
                            }

                            #notification-value-pop-up.closed {
                                opacity: 0;
                            }

                                #notification-value-pop-up b {
                                    position: relative;
                                    right: 0;

                                    transition: right .2s ease-in;
                                }

                                    #notification-value-pop-up.open b {
                                        right: 0px;
                                    }

                                    #notification-value-pop-up.closed b {
                                        right: -10px;
                                    }


            #header-main-input-field-body {
                display: flex;

                background: #1F1E1E;

                border-radius: 100px;

                min-height: 30px;
                height: 40%;

                width: 80%;

                padding: 5px 15px;
            }

                #header-main-input-field-body svg {
                    min-height: 15px;
                    min-width: 15px;

                    height: 100%;

                    margin-right: 15px;
                }

                #header-main-input-field-body input::placeholder {
                    font-size: 0.8rem;

                    color: #F2F2F2;

                    opacity: 0.7;
                }

                .button-expansion-block {
                    position: absolute;

                    padding: 15px;

                    display: flex;
                    flex-direction: column;

                    background: #F2F2F2;
                    
                    box-shadow: 4px 4px 65px rgba(0, 0, 0, 0.3);

                    border: 2px solid aliceblue;
                    border-radius: 15px;

                    z-index: 2;

                    overflow-y: scroll;

                    font-size: 0.8rem;
                }

                    .button-expansion-block::-webkit-scrollbar {
                        display: none;
                    }

                        .button-expansion-block * {
                            color: #404040;
                        }

                        .button-expansion-block > * {
                            display: flex;

                            align-items: center;

                            width: 100%;
                        }

                        .header-main-side {
                            height: 400px;
                            width: 300px;

                            top: 100%;

                        }

                            .header-main-side #user-icon {
                                margin-right: 15px;
                            }

                            #friend-requests-field {
                                display: flex;

                                flex-direction: column;
                            }

                                #friend-requests-field-header {
                                    display: flex;

                                    width: 100%;

                                    justify-content: space-between;
                                    align-items: center;

                                    padding: 10px 0 5px;
                                }

                                    #friend-requests-field-header a {
                                        color: #5A86C8;

                                        white-space: nowrap;
                                    }

                                #friend-requests {
                                    padding: 10px 0;

                                    width: 100%;
                                }

                                #notification {
                                    display: flex;

                                    flex-direction: column;

                                    margin-bottom: 20px;

                                    width: 100%;
                                }

                                    #notification-header {
                                        display: flex;

                                        width: 100%;

                                        /* align-items: center; */

                                        text-align: left;
                                    }

                                        #notification-header strong {
                                            margin-right: 5px;
                                        }

                                    #notification-date {
                                        color: #959595;

                                        font-size: 0.7rem;

                                        text-align: left;
                                    }

                                    #friend-request-buttons {
                                        display: flex;

                                        justify-content: left;

                                        margin-top: 10px;
                                    }

                                        #friend-request-buttons button {
                                            padding: 5px 10px;

                                            min-width: 80px;

                                            margin-right: 5%;

                                            height: 100%;
                                        }

                                        #friend-request-button-accept {
                                            background: #5CC35A;

                                            color: #F2F2F2;

                                            border-radius: 10px;
                                        }

                                        #friend-request-button-denied {
                                            text-decoration: underline;
                                            color: #2E2E2E;
                                        }
                            
                            #button-expansion-block-title {
                                justify-content: space-between;

                                margin-bottom: 15px;
                            }

                            #expand-messages-button {
                                background: #F2F2F2;

                                display: flex;

                                align-items: center;
                                justify-content: center;

                                box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);

                                border-radius: 10px;

                                width: 30px;
                                height: 30px;
                            }

                            #generic-notifications-field {
                                display: flex;

                                flex-direction: column;
                            }
                        .header-right-side {
                            height: 150px;
                            width: 150px;

                            top: 110%;
                            right: -10%;

                            justify-content: flex-end;
                        }

                    #header-right {
                        justify-content: flex-end;
                    }

                    #header-right-options {
                        background: #2A2A2A;

                        border-radius: 100%;

                        height: 30px;
                        width: 30px;

                        position: relative;
                    }

                        #header-right-options > svg {
                            height: 10px;
                            width: 10px;
                        }

                        /* DENTRO DO BUTTONEXPANSIONBLOCK */
                        
                        #header-right-options-exit {
                            font-weight: 700;

                            justify-content: space-between;
                        }

                            #header-right-options-exit svg {
                                height: 30px;
                                width: 20px;
                            }

@media screen and (min-width: 1367px) {
    #header-block {
        grid-template-rows: 115px;
    }
        #header-left svg {
            width: 110px;
            height: 20px;
        }
        #header-main-button-field a svg {
            height: 40px;
            width: 40px;
        }
        #header-right-options {
            height: 40px;
            width: 40px;
        }
            #header-right-options svg {
                height: 15px;
                width: 15px;
            }
}

@media screen and (min-width: 500px) and (max-width: 800px) {
    .button-expansion-block {
        width: initial;
        max-width: 500px;

        margin: 0 auto;
    }

        #notification-header p {
            font-size: 1rem;
        }

        #notification-header img {
            height: 50px;
            width: 50px;
        }
}

@media screen and (min-width: 800px) and (max-width: 1100px) {
    #header-block {
        grid-template-columns: 1fr 2fr;
        grid-template-areas: 'b a';
    }

        #header-main-input-field-body {
            width: 100%;
        }

    #header-right {
        display: none;
    }
}

@media screen and (max-width: 800px) {
    #header-block {
        grid-template-columns: 1fr;
        grid-template-areas: 'a';

        gap: 0;
    }

    #header-block {
        height: 120px;

        grid-template-rows: 1fr 1fr;

        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    #header-right {
        display: none;
    }

    #header-left {
        justify-content: center;
    }

        #header-main-button-field {
            position: initial;
        }

        .button-expansion-block {
            left: 10%;
            right: 10%;

            top: 130px;

            width: 80%;
        }
}
`