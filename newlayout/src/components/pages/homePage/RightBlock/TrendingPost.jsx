import React from 'react'

import UserIcon from '../../../UserIcon/UserIcon'

function TrendingPost({top}) {
    return (
    <div id={`trending-field-post${top ? '-1' : ''}`}>
        <div id={`trending-field-post${top ? '-1' : ''}-data`}>
            <UserIcon />

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium dignissimos dicta aperiam, esse?</p>
            <div id={`trending-field-post${top ? '-1' : ''}-like-field`}>
                <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.0131 7.47908C39.3802 6.01551 38.4676 4.68924 37.3265 3.57451C36.1845 2.45645 34.838 1.56795 33.3603 0.957314C31.8281 0.321609 30.1846 -0.00378096 28.5254 3.31458e-05C26.1977 3.31458e-05 23.9266 0.636648 21.9529 1.83914C21.4808 2.1268 21.0322 2.44275 20.6073 2.78699C20.1823 2.44275 19.7338 2.1268 19.2616 1.83914C17.288 0.636648 15.0169 3.31458e-05 12.6892 3.31458e-05C11.013 3.31458e-05 9.38876 0.320699 7.85424 0.957314C6.37165 1.57035 5.03544 2.45218 3.88809 3.57451C2.74545 4.68798 1.83267 6.01457 1.2015 7.47908C0.545195 9.00224 0.209961 10.6197 0.209961 12.2843C0.209961 13.8547 0.53103 15.491 1.16845 17.1556C1.70199 18.5467 2.46689 19.9897 3.44426 21.4469C4.99295 23.7528 7.12239 26.1578 9.76649 28.5958C14.1481 32.6372 18.4873 35.4288 18.6714 35.542L19.7905 36.2588C20.2862 36.5747 20.9236 36.5747 21.4194 36.2588L22.5384 35.542C22.7226 35.4241 27.057 32.6372 31.4434 28.5958C34.0875 26.1578 36.2169 23.7528 37.7656 21.4469C38.743 19.9897 39.5126 18.5467 40.0414 17.1556C40.6788 15.491 40.9999 13.8547 40.9999 12.2843C41.0046 10.6197 40.6694 9.00224 40.0131 7.47908ZM20.6073 32.5287C20.6073 32.5287 3.79838 21.7723 3.79838 12.2843C3.79838 7.47908 7.77869 3.58394 12.6892 3.58394C16.1407 3.58394 19.1342 5.50793 20.6073 8.31847C22.0804 5.50793 25.0739 3.58394 28.5254 3.58394C33.4359 3.58394 37.4162 7.47908 37.4162 12.2843C37.4162 21.7723 20.6073 32.5287 20.6073 32.5287Z" fill="#F2F2F2" fill-opacity="0.8"/>
                    <path d="M28.5254 3.58395C25.0739 3.58395 22.0804 5.50795 20.6072 8.31848C19.1341 5.50795 16.1406 3.58395 12.6891 3.58395C7.77865 3.58395 3.79834 7.47909 3.79834 12.2844C3.79834 21.7723 20.6072 32.5287 20.6072 32.5287C20.6072 32.5287 37.4161 21.7723 37.4161 12.2844C37.4161 7.47909 33.4358 3.58395 28.5254 3.58395Z" fill="black" fill-opacity="0.1"/>
                </svg>
                18
            </div>
        </div>
    </div>
    )
}

export default TrendingPost