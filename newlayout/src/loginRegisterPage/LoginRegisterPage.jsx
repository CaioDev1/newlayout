import React from 'react'

import BaseStyle from './LoginRegisterPageStyle'

import {Link} from 'react-router-dom'

function LoginRegisterPageBase({page}) {
    return (
    <BaseStyle page={page}>
        <header className="bar"></header>
        <article>
            <section className="secLeft">
                <div className="title">
                    {
                        page == 'login' ? (
                            <>
                                <svg width="170" height="36" viewBox="0 0 219 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M91 26.1548V15.8452C91 15.4705 91.3038 15.1667 91.6786 15.1667H91.7738C92.096 15.1667 92.3571 14.9055 92.3571 14.5833C92.3571 14.2612 92.6183 14 92.9405 14H127.06C127.382 14 127.643 14.2612 127.643 14.5833C127.643 14.9055 127.904 15.1667 128.226 15.1667H128.321C128.696 15.1667 129 15.4705 129 15.8452V26.1548C129 26.5295 128.696 26.8333 128.321 26.8333H128.226C127.904 26.8333 127.643 27.0945 127.643 27.4167C127.643 27.7388 127.382 28 127.06 28H92.9405C92.6183 28 92.3571 27.7388 92.3571 27.4167C92.3571 27.0945 92.096 26.8333 91.7738 26.8333H91.6786C91.3038 26.8333 91 26.5295 91 26.1548Z" fill="#191919" stroke="#191919"/>
                                    <path d="M22.1963 35H43.3925L53.5981 33.8667L63.8037 32.1667L74.7944 29.9L85 27.6333V16.3L65.3738 19.7L43.3925 23.6667H19.8411L13.5607 21.4L5.71028 14.0333L2.57009 8.36667L1 1V17.4333L7.28037 27.0667L22.1963 35Z" fill="#191919" stroke="#191919"/>
                                    <path d="M196.804 35H175.607L165.402 33.8667L155.196 32.1667L144.206 29.9L134 27.6333V16.3L153.626 19.7L175.607 23.6667H199.159L205.439 21.4L213.29 14.0333L216.43 8.36667L218 1V17.4333L211.72 27.0667L196.804 35Z" fill="#191919" stroke="#191919"/>
                                </svg>    
                                <h1>IDEABOOK</h1>
                                <h5>The social media to share your ideas</h5>
                            </>
                        ) :
                        <h1>Share your ideas and create a whole new world!</h1>
                    }
                </div>
            </section>
            <hr id='divisor' />
            <section className="secRight">
                <form>
                    <button id='fbButton'>
                        <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4987 0.006242L12.6084 0C8.23783 0 5.41336 2.89785 5.41336 7.38304V10.7871H1.50185C1.16385 10.7871 0.890137 11.0611 0.890137 11.3991V16.3313C0.890137 16.6693 1.16416 16.943 1.50185 16.943H5.41336V29.3883C5.41336 29.7263 5.68707 30 6.02507 30H11.1285C11.4665 30 11.7402 29.726 11.7402 29.3883V16.943H16.3137C16.6517 16.943 16.9254 16.6693 16.9254 16.3313L16.9272 11.3991C16.9272 11.2369 16.8626 11.0814 16.7481 10.9666C16.6336 10.8517 16.4775 10.7871 16.3152 10.7871H11.7402V7.90144C11.7402 6.51447 12.0707 5.81037 13.8774 5.81037L16.4981 5.80943C16.8358 5.80943 17.1095 5.53541 17.1095 5.19772V0.617958C17.1095 0.280578 16.8361 0.0068662 16.4987 0.006242Z" fill="black"/>
                        </svg>
                        Entrar com o Facebook
                    </button>

                    <div id='alternative-transition'><hr /> ou <hr /></div>
                    {
                        page == 'register' && (
                            <>
                                <h1>Cadastro</h1>
        
                                <div id="nameField">
                                    <input type="text" name="" id="" placeholder="Nome" className="half left" />
                                    <input type="text" name="" id="" placeholder="Sobrenome" className="half right" />
                                </div>
                            </>
                        )
                    }

                    <input type="email" name="" id="" placeholder="Seu e-mail" />
                    <input type="password" name="" id="" placeholder="Sua senha" style={{marginTop: page == 'login' ? '30px;' : '0px;'}} />

                    {
                        page == 'register' && (
                            <div id='ageSexField'>
                                <select name="" id="">
                                    <option value="" hidden selected>Idade</option>
                                    {
                                        [...Array(100)].map((v, i) => {
                                            return <option value={i + 1}>{i + 1}</option>
                                        })
                                    }
                                </select>
                                <select name="" id="" className="half right">
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                    <option value="U">Prefiro não responder</option>
                                </select>
                            </div>
                        )
                    }
        
                    <div className="buttonArea">
                        {
                            page == 'login' ? (
                                <>
                                    <button id='enterButton'>Entrar</button>
                                    <hr />
                                    <Link to='/register' id='createButton'>
                                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.53906 19.4336V12.6484H0.597656V7.41016H6.53906V0.800781H12.2871V7.41016H18.1406V12.6484H12.2871V19.4336H6.53906Z" fill="#1241A3"/>
                                        </svg>   
                                        Criar nova conta            
                                    </Link>
                                </>
                            ) :
                            <>
                                <Link to='/login' id='backButton' className="half left">Voltar</Link>
                                <button id='createButton' className="half right">Cadastre-se</button>
                            </>
                        }
                    </div>
                </form>
            </section>
        </article>
        <footer className="bar"></footer>
    </BaseStyle>
    )
}

export default LoginRegisterPageBase