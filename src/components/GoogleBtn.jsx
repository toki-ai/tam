import { useState, useEffect, useRef, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { UserContext } from '../Context/User.context';
import Localstorage from '../utils/Localstorage';
import authApi from '../utils/api/authApi';

function GoogleSignInButton() {
    const [gapiLoaded, setGapiLoaded] = useState(false);
    const { setCredential } = useContext(UserContext);
    const refBtn = useRef();
    const navigate = useNavigate();
    const handleCredentialResponse = (response) => {
        console.log(`Encoded JWT ID token: ${response.credential}`);
        authApi.login(response.credential).then((response) => {
            Localstorage.setItem('token', response.data.data);
            navigate('/');
        });
        authApi.getInfoFromGG(response.credential).then((response) => {
            if (response.data.status === 200) {
                console.log(response.data.data);
                setCredential(response.data.data);
            }
        });
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        setGapiLoaded(true);
        script.onload = () => {
            google.accounts.id.initialize({
                client_id:
                    '970833900937-v2ssoqdoticb9em0hl48fdpe2ebg2n81.apps.googleusercontent.com',
                callback: handleCredentialResponse,
            });
            google.accounts.id.renderButton(
                refBtn.current,
                { theme: 'outline', size: 'large' } // customization attributes
            );
            google.accounts.id.prompt();
            // google.accounts.id.disableAutoSelect();
        };

        document.body.appendChild(script);
        return () => {
            setGapiLoaded(false);
            document.body.removeChild(script);
        };
    }, []);

    return gapiLoaded ? <div type="button" ref={refBtn} /> : null;
}

export default GoogleSignInButton;
