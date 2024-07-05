import React from 'react';
import EventForm from '../components/EventForm';
// 컴포넌트 외부에서 navi 대신 사용할 훅
import { redirect } from 'react-router-dom';

const NewEvent = () => {

    return <EventForm method="post" />;
};

export default NewEvent;

// 서버에 갱신요청을 보내는 트리거함수
// App.js에서 router에 설정
export const action = async ({ request, params }) => {

    // action 함수를 트리거하는 방법
    // 1. form이 있는 EventForm으로 이동
    // console.log('action함수 call!');

    const formData = await request.formData();
    // console.log(formData);

    const payload = {
        title: formData.get('title'),
        desc: formData.get('description'),
        imageUrl: formData.get('image'),
        beginDate: formData.get('date'),
    };

    // console.log(payload);

    // post, put을 구분하기 위해
    let url = `http://localhost:8282/events`;
    if (request.method === 'PATCH') {
        url += `/${params.eventId}` // 수정할때는 id가 필요하기에
    }

    console.log('info: ' , {url, method: request.method})


    const response = await fetch(url, {
        method: request.method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    return redirect('/events');

};
