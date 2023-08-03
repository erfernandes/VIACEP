import { useRef, useState, useEffect } from 'react';

function App({ appContext }) {
    const [cepValue, setCepValue] = useState("");
    const [cepInfo, setCepInfo] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
            .then(async response => {
                const json = await response.json();
                setCepInfo(json);
                console.log(json);
            })
    }, [cepValue]);

    const handleClick = () => {
        setCepValue(inputRef.current.value);
    };

    const doNothing = () => {
    }

    return(
        <>
            <label htmlFor="cep">CEP:</label>
            <input type="text" name="cep" id="pcf_cep" ref={inputRef} onChange={doNothing} />

            <button onClick={handleClick}>Pesquisar</button>
            <div>
                <span>{ cepInfo.cep }</span><br />
                <span>{ cepInfo.logradouro }</span><br />
                <span>{ cepInfo.complemento }</span><br />
                <span>{ cepInfo.bairro }</span><br />
                <span>{ cepInfo.localidade }</span><br />
                <span>{ cepInfo.uf }</span><br />
            </div>
        </>
    );
}

export default App;