import React from 'react'

import './profilePhotoPage.css'

import HeaderBlock from '../components/HeaderBlock/HeaderBlock'

import {Link} from 'react-router-dom'

function ProfilePhotoPage() {

    function handleChangeProfilePhotoClick() {
        document.querySelector('input[type=file]').click()
    }

    function handleChangeProfilePhoto(e) {
        let img = e.target.files[0]

        if(img.type && ['image/jpeg', 'image/jpg', 'image/png'].indexOf(img.type) != -1) {
            let reader = new FileReader()

            reader.onload = () => {
                document.querySelector('#profile-photo-preview img').src = reader.result
            }

            reader.onerror = e => {
                throw new Error(e)
            }

            reader.readAsDataURL(img)
        }
    }

    return (
        <main id='profile-photo-page'>
            <HeaderBlock />
            <section id='profile-photo-page-content'>
                <h1 id='profile-photo-page-content-title'>Sinta-se em casa, somos todos cornos :)</h1>

                <div>
                    <div id='profile-photo-page-info-field'>
                        <div id='profile-photo-page-info'>
                            <h2>Adicione uma foto de perfil</h2>
                            <p>Para que seus amigos possam te encontrar facilmente, você pode adicionar uma foto de perfil.</p>
                        </div>
                        <button id='add-profile-photo-button' onClick={handleChangeProfilePhotoClick}>Adicionar foto</button>
                        <input type='file' style={{display: 'none'}} onChange={handleChangeProfilePhoto} multiple={false} />
                    </div>
                    <div id='profile-photo-page-preview-field'>
                        <div id='profile-photo-preview'>
                            <img src='' />
                        </div>
                    </div>
                </div>

                <button id='profile-photo-page-skip-page-button'>
                    <Link to='/home'><h3>Prosseguir para a home</h3></Link>
                    <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 23L11.7929 13.2071C12.1834 12.8166 12.1834 12.1834 11.7929 11.7929L2 2" stroke="#2D2D2D" stroke-width="5"/>
                    </svg>
                </button>
            </section>
        </main>
    )
}

export default ProfilePhotoPage