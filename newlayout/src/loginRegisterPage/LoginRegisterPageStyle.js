import styled, { css } from 'styled-components'

const LoginRegisterStyle = styled.main`
    main, article {
        min-width: 300px;

        min-height: 550px;
    }

    * {
        font-family: 'Roboto Slab', sans-serif;
    }

    article {
        display: flex;

        justify-content: center;

        height: calc(100vh - 140px);

        padding: 5%;
    }

    .bar {
        height: 70px;

        background: #1F1E1E;

        z-index: 1;
    }

    header {
        display: flex;

        align-items: center;

        padding: 0 15px;

        top: 0;
    }

    section.secLeft {
        display: flex;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        width: 50%;
    }

    .title {
        display: flex;

        flex-direction: column;

        text-align: left;

        /* padding-right: 10%; */

        width: 80%;
    }

    section h1, section h5 {
        color: #202020;
    }

    section h1 {
        font-size: 2.6rem;

        font-weight: 400;
    }

    section h5 {
        font-size: 1.5rem;
    }

    hr#divisor {
        width: 5px;

        background: #2A2A2A;

        border-radius: 50px;

        border: none;
    }

    section.secRight {
        display: flex;

        flex-direction: column;

        align-items: center;

        justify-content: center;

        width: 50%;
    }

    section.secRight hr {
        width: 100%;
        
        height: 0px;

        border: 1px solid rgba(0, 0, 0, 0.2);
    }

    #alternative-transition {
        display: flex;

        width: 100%;

        align-items: center;

        color: #2D2D2D;

        font-size: 20px;

        margin-top: 5%;
    }

        #alternative-transition hr {
            margin: 0 20px;
        }

    section.secRight form {
        display: flex;
        flex-direction: column;

        height: 100%;
        width: 80%;

        padding: 5% 0;

        align-items: center;
        justify-content: center;
    }

    form input, form select {
        background-color: transparent;

        line-height: 25px;

        min-height: 50px;

        width: 100%;

        font-size: 20px;

        color: #000000;

        outline: 0;

        margin: 10px 0 0;
    }

    form input::placeholder {
        color: #000000;

        opacity: 0.7;

        font-family: 'Roboto Slab', sans-serif;
    }

    button, a {
        display: flex;
        align-items: center;
        justify-content: center;

        border: 3px solid #1F1E1E;

        border-radius: 15px;

        padding: 7px;

        cursor: pointer;

        background: transparent;

        width: 100%;

        min-height: 60px;

        outline: 0;

        color: #000000;

        font-size: 1rem;
    }

    #fbButton {
        border-color: #1241A3;

        display: flex;

        position: relative;
    }

    #fbButton svg {
        margin: 0 5px;

        height: 25px;

        position: absolute;

        left: 2%;
    }

    .buttonArea {
        width: 100%;
    }

    #createButton {
        position: relative;
    }

    footer {
        bottom: 0;
    }




    ${props => props.page == 'login' ? css`
        section.secRight form {
            justify-content: space-around;

            width: 70%;
        }

            form input::placeholder {
                text-align: center;
            }

            form input {
                border-bottom: 3px solid #1F1E1E;

                text-align: center;

                margin-bottom: 10px;
            }


        .buttonArea hr {
            margin: 20px 0px;
        }

        #enterButton {
            background: #1F1E1E;

            color: white;
        }

        #createButton * {
            color: #F2F2F2;
        }

            #createButton svg {
                position: absolute;

                left: 3%;
            }
    ` :
    css`
        .title {
            text-align: center;
        }
        
        select option {
            color: #000000;
        }

        form h1 {
            font-size: 2rem;

            margin: 15px 0;

            font-weight: 500;
        }

        form input::placeholder {
            text-align: left;
        }

        form input, form select {
            border: 3px solid #1F1E1E;
            
            border-radius: 15px;
            
            padding-left: 20px;
        }

        #nameField, #ageSexField {
            display: flex;

            width: 100%;

            justify-content: space-between;
        }

        .buttonArea {
            display: flex;

            justify-content: space-between;

            margin-top: 7%;
        }

            #createButton {
                background: #1F1E1E;

                color: #FFFFFF;
            }

            #backButton {
                text-decoration: underline;

                font-size: 18px;

                border: none;
            }


        .half {
            width: 100%;
        }

        .left {
            margin-right: 5px;
        }

        .right {
            margin-left: 5px;
        }
    `
    }

@media screen and (max-width: 800px) {
    .bar {
        height: 30px;
    }

    article {
        justify-content: space-around;
        flex-direction: column;

        min-height: calc(100vh - 60px);
        height: 100%;
    }

        article > section {
            min-width: 100%;

            min-height: 100%;
        }

            .title {
                justify-content: center;
                align-items: center;

                text-align: center;
            }

            section h1 {
                font-size: 2rem;
                
                line-height: 30px;
                
                text-align: center;
            }

            section.secRight form {
                width: 100%;
            }
}
`

export default LoginRegisterStyle