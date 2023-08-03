import * as React from 'react';
import { useRef } from 'react';

import {IInputs, IOutputs} from "../generated/ManifestTypes";

interface IHTML2PDFComponentProps {
    appContext: ComponentFramework.Context<IInputs>
} 

const ViacepComponent: React.FC<IHTML2PDFComponentProps> = ({ appContext }) => {

    return (
        <>
            <div style={{ display: "none" }}>
                
            </div>
            <button>Imprimir!</button>
        </>
    );
};

export default ViacepComponent;