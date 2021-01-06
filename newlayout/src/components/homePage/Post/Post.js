import React, {useState} from 'react'

import UserIcon from '../UserIcon'
import PostFooter from './PostFooter/PostFooter'

function Post({hasImage}) {
    const [isImageClicked, setIsImageClicked] = useState(false)

    return (
    <div id='post'>
        <div id='post-header'>
            <div id='post-header-user-info'>
                <UserIcon />
                <h3 id='post-header-username'>Cornivaldo Carneiro</h3>
            </div>
            <span>Postado há 3h atrás</span>
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
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7937 3.03113C16.5266 2.4907 16.1416 2.00097 15.6601 1.58935C15.1783 1.1765 14.6102 0.848414 13.9867 0.622933C13.3403 0.388196 12.6469 0.268044 11.9468 0.269452C10.9647 0.269452 10.0065 0.504526 9.17376 0.948554C8.97455 1.05477 8.7853 1.17144 8.606 1.29855C8.42671 1.17144 8.23746 1.05477 8.03825 0.948554C7.20554 0.504526 6.24732 0.269452 5.2652 0.269452C4.55799 0.269452 3.8727 0.387859 3.22526 0.622933C2.59973 0.8493 2.03596 1.17492 1.55187 1.58935C1.06977 2.0005 0.684651 2.49035 0.418347 3.03113C0.141441 3.59357 0 4.19083 0 4.8055C0 5.38535 0.135465 5.98958 0.404403 6.60425C0.629513 7.11793 0.952238 7.65077 1.36461 8.18882C2.01803 9.04031 2.91648 9.92837 4.03207 10.8286C5.88077 12.3209 7.71154 13.3517 7.78923 13.3935L8.26137 13.6582C8.47054 13.7749 8.73948 13.7749 8.94865 13.6582L9.42079 13.3935C9.49848 13.35 11.3273 12.3209 13.1779 10.8286C14.2935 9.92837 15.192 9.04031 15.8454 8.18882C16.2578 7.65077 16.5825 7.11793 16.8056 6.60425C17.0746 5.98958 17.21 5.38535 17.21 4.8055C17.212 4.19083 17.0706 3.59357 16.7937 3.03113ZM8.606 12.2808C8.606 12.2808 1.51402 8.30897 1.51402 4.8055C1.51402 3.03113 3.19339 1.59283 5.2652 1.59283C6.72145 1.59283 7.98446 2.30327 8.606 3.34108C9.22755 2.30327 10.4906 1.59283 11.9468 1.59283C14.0186 1.59283 15.698 3.03113 15.698 4.8055C15.698 8.30897 8.606 12.2808 8.606 12.2808Z" fill="#E36666" fill-opacity="0.8"/>
                        <path d="M11.9464 1.59286C10.4902 1.59286 9.22719 2.3033 8.60565 3.34111C7.9841 2.3033 6.72109 1.59286 5.26485 1.59286C3.19304 1.59286 1.51367 3.03116 1.51367 4.80553C1.51367 8.30899 8.60565 12.2809 8.60565 12.2809C8.60565 12.2809 15.6976 8.30899 15.6976 4.80553C15.6976 3.03116 14.0183 1.59286 11.9464 1.59286Z" fill="#CC8080" fill-opacity="0.1"/>
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
    )
}

export default Post