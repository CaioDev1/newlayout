import React, {useState} from 'react'

import Style from './PostStyle'

import UserIcon from '../UserIcon/UserIcon'
import PostFooter from './PostFooter/PostFooter'

function Post({hasImage}) {
    const [isImageClicked, setIsImageClicked] = useState(false)

    return (
    <Style>
        <div id='post'>
            <div id='post-header'>
                <div id='post-header-user-info'>
                    <UserIcon />
                    <h3 id='post-header-username'>Fernando Carneiro</h3>
                </div>
                <span>Postado 3h atrás</span>
            </div>
            <div id='post-body'>
                <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1342 0.499999C13.5191 -0.166668 14.4814 -0.166667 14.8663 0.5L26.9906 21.5C27.3755 22.1667 26.8944 23 26.1246 23H1.87589C1.10609 23 0.624963 22.1667 1.00986 21.5L13.1342 0.499999Z" fill="#2A2A2A"/>
                </svg>
                <div id='post-content'>
                    {hasImage && <img src={process.env.PUBLIC_URL + '/Foto_Boi.png'} onClick={() => setIsImageClicked(true)} />}
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium dignissimos dicta aperiam, esse?</p>
                </div>
                <div id='post-metadata'>
                    <div id='post-likes-value'>
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.842 3.03113C14.6061 2.4907 14.2658 2.00097 13.8403 1.58935C13.4144 1.1765 12.9123 0.848414 12.3613 0.622933C11.79 0.388196 11.1772 0.268044 10.5585 0.269452C9.69047 0.269452 8.84361 0.504526 8.10767 0.948554C7.93161 1.05477 7.76435 1.17144 7.60589 1.29855C7.44743 1.17144 7.28017 1.05477 7.10411 0.948554C6.36817 0.504526 5.52131 0.269452 4.65333 0.269452C4.0283 0.269452 3.42265 0.387859 2.85045 0.622933C2.29761 0.8493 1.79936 1.17492 1.37152 1.58935C0.945448 2.0005 0.605087 2.49035 0.369731 3.03113C0.125004 3.59357 0 4.19083 0 4.8055C0 5.38535 0.119722 5.98958 0.357406 6.60425C0.556357 7.11793 0.841578 7.65077 1.20603 8.18882C1.78351 9.04031 2.57755 9.92837 3.5635 10.8286C5.19736 12.3209 6.81537 13.3517 6.88403 13.3935L7.3013 13.6582C7.48617 13.7749 7.72385 13.7749 7.90872 13.6582L8.32598 13.3935C8.39465 13.35 10.0109 12.3209 11.6465 10.8286C12.6325 9.92837 13.4265 9.04031 14.004 8.18882C14.3684 7.65077 14.6554 7.11793 14.8526 6.60425C15.0903 5.98958 15.21 5.38535 15.21 4.8055C15.2118 4.19083 15.0868 3.59357 14.842 3.03113ZM7.60589 12.2808C7.60589 12.2808 1.33807 8.30897 1.33807 4.8055C1.33807 3.03113 2.82228 1.59283 4.65333 1.59283C5.94034 1.59283 7.05658 2.30327 7.60589 3.34108C8.1552 2.30327 9.27144 1.59283 10.5585 1.59283C12.3895 1.59283 13.8737 3.03113 13.8737 4.8055C13.8737 8.30897 7.60589 12.2808 7.60589 12.2808Z" fill="#E36666" fill-opacity="0.8"/>
                            <path d="M10.558 1.59286C9.271 1.59286 8.15477 2.3033 7.60545 3.34111C7.05614 2.3033 5.93991 1.59286 4.65289 1.59286C2.82185 1.59286 1.33765 3.03116 1.33765 4.80553C1.33765 8.30899 7.60545 12.2809 7.60545 12.2809C7.60545 12.2809 13.8733 8.30899 13.8733 4.80553C13.8733 3.03116 12.3891 1.59286 10.558 1.59286Z" fill="#CC8080" fill-opacity="0.1"/>
                        </svg>
                        21
                    </div>
                    <div id='post-comments-value'>
                        12 comentários
                    </div>
                </div>
                <PostFooter />
            </div>
            {
                isImageClicked && (
                    <div id='post-image-screen' onClick={() => setIsImageClicked(false)} >
                        <img src={process.env.PUBLIC_URL + '/Foto_Boi.png'} onClick={e => {e.stopPropagation()}} />
                    </div>
                )
            }
        </div>
    </Style>
    )
}

export default Post