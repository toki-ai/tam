import { themes } from '../../../themes';

const initialRoomInfo = {
    code: '',
    openTime: '',
    closeTime: '',
    type: '',
    isPrivate: '',
    duration: 0,
};

const BEInitQuestion = [
    {
        maxSubmitTimes: 0,
        questionImage: '',
        codeTemplate: '',
        testcases: [
            { input: '', output: '' },
            // May have a lot of testcase { input, output }
        ],
    },
    // May have a lot of question { maxSubmitTimes, questionImage, testcases }]
];

const FEInitQuestion = [
    {
        maxSubmitTimes: 0,
        questionImage: '',
        colors: themes.colors.primary,
        codeTemplate: '',
    },
    // May have a lot of question { maxSubmitTimes, questionImage, colors, codeTemplate }
];

export { initialRoomInfo, BEInitQuestion, FEInitQuestion };
