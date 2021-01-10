import styled from 'styled-components'

export default styled.div`
    #profile-photo-page {
        background: #E5E5E5;

        min-height: 100vh;
        
        padding-top: 12vh;

        display: flex;

        justify-content: center;
        align-items: center;
    }

        #profile-photo-page-content * {
            color: #131313;
        }

        #profile-photo-page-content h2 {
            font-size: 2rem;
        }

        #profile-photo-page-content p {
            font-size: 1.3rem;

            padding: 20px 0;
        }

        #profile-photo-page-content h3 {
            font-size: 1.1rem;

            font-weight: 900;
        }


    #profile-photo-page-content {
        display: flex;
        flex-direction: column;

        width: 50%;
    }
        #profile-photo-page-content-title {
            display: block;

            font-size: 3rem;

            margin-bottom: 30px;
        }

        #profile-photo-page-content * {
            display: flex;

            align-items: center;
        }

        #profile-photo-page-info-field, #profile-photo-page-info {
            flex-direction: column;

            align-items: flex-start;
        }

        #profile-photo-page-info-field {
            min-height: 200px;

            justify-content: space-between;
        }

            #profile-photo-page-info {
                width: 90%;
            }

        #profile-photo-page-content > div > div {
            height: 100%;
        }

        #add-profile-photo-button {
            background: #5CC35A;

            border: 5px solid #5CC35A;

            box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);

            border-radius: 15px;

            height: 50px;
            width: 180px;

            font-size: 1.2rem;
            color: #F2F2F2;

            padding: 0px 10px;
        }

        #profile-photo-page-preview-field {
            display: flex;
        }

        #profile-photo-preview {
            border-radius: 100%;

            min-height: 200px;
            min-width: 200px;

            border: 5px solid #5A5A5A;
        }

        #profile-photo-preview img {
            max-width: 200px;
            max-height: 200px;

            min-width: 200px;
            min-height: 200px;

            border-radius: 100%;
        }

        #profile-photo-page-skip-page-button {
            margin-top: 10%;

            justify-content: flex-end;
        }

        #profile-photo-page-skip-page-button svg {
            margin-left: 10px;
        }


    @media screen and (max-width: 800px) {
        #profile-photo-page {
            padding-top: 20vh;
        }
        
        #profile-photo-page-content {
            width: 100%;

            padding: 5%;
        }

            #profile-photo-page-content-title {
                display: block;

                text-align: center;

                font-size: 2rem;

                margin-bottom: 20px;
            }

            #profile-photo-page-content h2 {
                font-size: 1.5rem;
            }

            #profile-photo-page-content p {
                font-size: 1rem;
            }

            #profile-photo-page-content h3 {
                font-size: 1.1rem;

                font-weight: 900;
            }

                #profile-photo-page-content > div {
                    flex-direction: column-reverse;
                }

                    #profile-photo-page-info-field, #profile-photo-page-info {
                        align-items: center;

                        align-items: flex-start;
                    }

                    #profile-photo-page-info-field {
                        justify-content: space-around;
                        align-items: center;
                    }

                    #profile-photo-page-info {
                        width: 100%;

                        align-items: center;
                        text-align: justify;
                    }
    }
`
