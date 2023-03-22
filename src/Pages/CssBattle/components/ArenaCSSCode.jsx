import { useState } from 'react';

import ButtonStyled from '../../../components/Button';
import OffCanvasComponents from '../../../components/OffCanvas/OffCanvas';
import { BoxEditor, TextStyled, TextSmall } from '../styled';
import MySolution from './MySolution';

import { htmlLanguage } from '@codemirror/lang-html';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror from '@uiw/react-codemirror';
import Stack from 'react-bootstrap/Stack';

const LIST_SOLUTION = [
    {
        id: 1,
        record: 'Score: 100.35 {564}, 99% match',
        code: '<div></div> <style> div { width: 100%; height: 100%; border-radius: 5px; background: #F5D6B4; } </style> <!-- OBJECTIVE --> <!-- Write HTML/CSS in this editor and replicate the given target image in the least code possible. What you write here, renders as it is --> <!-- SCORING --> <!-- The score is calculated based on the number of characters you use (this comment included :P) and how close you replicate the image. Read the FAQS (https://cssbattle.dev/faqs) for more info. --> <!-- IMPORTANT: remove the comments before submitting -->',
    },
    {
        id: 2,
        record: 'Score: 100.35 {564}, 99% match',
        code: '<div></div> <style> div { width: 100%; height: 100%; border-radius: 5px; background: #F5D6B4; } </style> <!-- OBJECTIVE --> <!-- Write HTML/CSS in this editor and replicate the given target image in the least code possible. What you write here, renders as it is --> <!-- SCORING --> <!-- The score is calculated based on the number of characters you use (this comment included :P) and how close you replicate the image. Read the FAQS (https://cssbattle.dev/faqs) for more info. --> <!-- IMPORTANT: remove the comments before submitting -->',
    },
    {
        id: 3,
        record: 'Score: 100.35 {564}, 99% match',
        code: '<div></div> <style> div { width: 100%; height: 100%; border-radius: 5px; background: #F5D6B4; } </style> <!-- OBJECTIVE --> <!-- Write HTML/CSS in this editor and replicate the given target image in the least code possible. What you write here, renders as it is --> <!-- SCORING --> <!-- The score is calculated based on the number of characters you use (this comment included :P) and how close you replicate the image. Read the FAQS (https://cssbattle.dev/faqs) for more info. --> <!-- IMPORTANT: remove the comments before submitting -->',
    },
    {
        id: 4,
        record: 'Score: 100.35 {564}, 99% match',
        code: '<div></div> <style> div { width: 100%; height: 100%; border-radius: 5px; background: #F5D6B4; } </style> <!-- OBJECTIVE --> <!-- Write HTML/CSS in this editor and replicate the given target image in the least code possible. What you write here, renders as it is --> <!-- SCORING --> <!-- The score is calculated based on the number of characters you use (this comment included :P) and how close you replicate the image. Read the FAQS (https://cssbattle.dev/faqs) for more info. --> <!-- IMPORTANT: remove the comments before submitting -->',
    },
];
const ArenaCSSCode = ({ setCode, setCount, count, code }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <OffCanvasComponents title="My Solution" show={show} setShow={setShow}>
                <MySolution data={LIST_SOLUTION} />
            </OffCanvasComponents>
            <Stack direction="horizontal" className="justify-content-between mb-3">
                <TextStyled>EDITOR</TextStyled>
                <TextSmall>{count} characters</TextSmall>
            </Stack>
            <BoxEditor>
                <CodeMirror
                    className="editor"
                    value={code}
                    width="100%"
                    theme={tokyoNight}
                    height="calc(100vh - 200px);"
                    extensions={[htmlLanguage]}
                    options={{ lineWrapping: 'true', lineNumbers: 'true', autoCloseBrackets: true }}
                    onChange={(e) => {
                        setCode(e);
                        setCount(e.length);
                    }}
                />
            </BoxEditor>
            <Stack
                direction="horizontal"
                className="align-items-center mt-3 justify-content-center"
                gap={3}
            >
                <ButtonStyled buttonType="base" onClick={handleShow}>
                    My SOLUTION
                </ButtonStyled>
                <ButtonStyled buttonType="base">SUBMIT</ButtonStyled>
            </Stack>
        </>
    );
};

export default ArenaCSSCode;
