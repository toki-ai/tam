import { Table } from 'react-bootstrap';

import { RoomDetailData } from '../RoomDetailData';

const titles = [
    { id: 1, name: 'Rank' },
    { id: 2, name: 'Name' },
    { id: 3, name: 'Score' },
    { id: 4, name: 'Execution Time' },
    { id: 5, name: 'Finish at' },
];
const questions = [
    {
        id: 1,
        data: [
            {
                id: 1,
                rank: 1,
                name: 'Lee Jung Suk',
                score: '90',
                execution: '100ms',
                time: '2023-03-19T14:56:36.673Z',
            },
        ],
    },
    {
        id: 2,
        data: [
            {
                id: 1,
                rank: 1,
                name: 'Lee Jung Suk',
                score: '90',
                execution: '100ms',
                time: '2023-03-19T14:56:36.673Z',
            },
            {
                id: 2,
                rank: 2,
                name: 'IU',
                score: '97',
                execution: '110ms',
                time: '2023-03-19T13:46:36.673Z',
            },
        ],
    },
    {
        id: 3,
        data: [
            {
                id: 1,
                rank: 1,
                name: 'Lee Jung Suk',
                score: '90',
                execution: '100ms',
                time: '2023-03-19T14:56:36.673Z',
            },
            {
                id: 2,
                rank: 2,
                name: 'IU',
                score: '97',
                execution: '110ms',
                time: '2023-03-19T13:46:36.673Z',
            },
            {
                id: 3,
                rank: 3,
                name: 'Lee Jung Suk',
                score: '90',
                execution: '100ms',
                time: '2023-03-19T14:56:36.673Z',
            },
            {
                id: 4,
                rank: 4,
                name: 'IU',
                score: '97',
                execution: '110ms',
                time: '2023-03-19T13:46:36.673Z',
            },
        ],
    },
];
const data = [
    {
        id: 1,
        rank: 1,
        name: 'Lee Thành Long',
        score: '100',
        execution: '120ms',
        time: '2023-03-19T13:46:36.673Z',
    },
    {
        id: 2,
        rank: 2,
        name: 'Lee Thành Long',
        score: '100',
        execution: '120ms',
        time: '2023-03-19T13:46:36.673Z',
    },
];
function TableQues({ ques }) {
    let i = ques;
    return (
        <Table striped className="w-98 border-top">
            <thead>
                <tr>
                    {titles.map((titles) => {
                        return <th key={titles.id}>{titles.name}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                <RoomDetailData data={questions[i - 1].data} />
            </tbody>
        </Table>
    );
}
export default TableQues;