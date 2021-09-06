import React, {useState} from 'react'

import HomePageContainerStyle from './homePageStyle.js'

import TrendingPost from '../components/pages/homePage/RightBlock/TrendingPost'
import UserIcon from '../components/UserIcon/UserIcon'
import Friend from '../components/pages/homePage/LeftBlock/Friends'
import Post from '../components/Post/Post'

import HeaderBlock from '../components/HeaderBlock/HeaderBlock'

function App() {
    // new-post-field
    const [isNewPostFieldClicked, setIsNewPostFieldClicked] = useState(false)
    const [isMouseOverOnOptions, setIsMouseOverOnOptions] = useState(false)

    return (
        <HomePageContainerStyle>
            <main id='home'>
                <HeaderBlock />
                <aside id='left-block'>
                    <div id='user-field'>
                        <div id='user-bar' className='top-bar'>
                            <UserIcon />
                            <h3>Fernando Carneiro</h3>
                        </div>
                        <div id='friends-field'>
                            <div id='friends-field-header'>
                                <h2 id='friends-field-header-title'>Friends</h2>
                                <button id=''>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="28" height="28" rx="10" fill="#C4C4C4"/>
                                        <path d="M10 18L17 11M17 11H14.0385M17 11V13.4231" stroke="black"/>
                                    </svg>
                                </button>
                            </div>
                            <div id='friends-field-data'>
                                <Friend />
                                <Friend />
                                <Friend />
                                <Friend />
                            </div>
                        </div>
                    </div>
                </aside>
                <section id='main-block'>
                    <div id='newpost-field' 
                        className={`top-bar ${isNewPostFieldClicked ? 'clicked' : ''}`}
                        onBlur={() => {
                                //zerar valor do textarea quando sair de foco
                                if(isMouseOverOnOptions) {
                                    setIsMouseOverOnOptions(false)
                                } else {
                                    setIsNewPostFieldClicked(false)
                                }
                        }}
                    >
                        <UserIcon />
                        <textarea 
                            cols='10'
                            rows='10' 
                            placeholder="Username, What's going on?" 
                            onFocus={() => setIsNewPostFieldClicked(true)}
                        >
                        </textarea>
                        {
                            isNewPostFieldClicked && (
                                <div id='newpost-field-options' onMouseOver={() => {setIsMouseOverOnOptions(true)}} onMouseOut={() => {setIsMouseOverOnOptions(false)}}>
                                    <button id='newpost-field-options-add-photo'>
                                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.6667 31.6667H3.33333V8.33333H18.3333V5H3.33333C1.5 5 0 6.5 0 8.33333V31.6667C0 33.5 1.5 35 3.33333 35H26.6667C28.5 35 30 33.5 30 31.6667V16.6667H26.6667V31.6667ZM13.6833 26.3833L10.4167 22.45L5.83333 28.3333H24.1667L18.2667 20.4833L13.6833 26.3833ZM30 5V0H26.6667V5H21.6667C21.6833 5.01667 21.6667 8.33333 21.6667 8.33333H26.6667V13.3167C26.6833 13.3333 30 13.3167 30 13.3167V8.33333H35V5H30Z" fill="#F2F2F2"/>
                                        </svg>
                                    </button>
                                    <button id='newpost-field-options-send-button'>
                                        Publicar
                                    </button>
                                </div>
                            )
                        }
                    </div>
                    <div id='feed'>
                       <Post />
                       <Post hasImage />
                       <Post />
                    </div>
                </section>
                <aside id='right-block'>
                    <div id='trending-field'>
                        <h4 id='trending-field-title'>Usuários mais famosos</h4>
    
                        <div id='trending-field-posts'>
                            <TrendingPost top={true}/>
                            <TrendingPost top={false}/>
                            <TrendingPost top={false}/>
                            <TrendingPost top={false}/>
                            <TrendingPost top={false}/>
                        </div>
                    </div>
                </aside>
            </main>
        </HomePageContainerStyle>
    )
}

export default App