import styled from 'styled-components'

const FriendStyle = styled.div`
    #friend-item {
        position: relative;

        display: flex; /*  */
        justify-content: flex-start;

        width: 100%;

        min-height: 100px;

        overflow: hidden;

        border-radius: 15px;
    }

    #friend-item:hover {
        background: #2c2c2ca4; 
    }

        #friend-item img {
            /* min-width: 200px;
            min-height: 200px; */

            min-height: 100%;
            width: 100%;
            max-height: 100px;
            max-width: 120px;

            border-radius: 0;

            border-radius: 15px;

            /* position: absolute;

            top: -9999px;
            bottom: -9999px;
            left: -9999px;
            right: -9999px;
            margin: auto; */
        }

        #friend-item h3 {
            /* position: absolute;

            bottom: 0px;
 
            min-height: 30%; */
            width: 100%;

            font-weight: 500;

            /* line-height: 15px; */

            padding: 15px;

            /* text-align: center;

            background: #2c2c2ca4; */

            display: flex;

            align-items: center;
            justify-content: center;

            /* border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px; */
        }
`

export default FriendStyle