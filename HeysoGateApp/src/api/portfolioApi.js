export async function fetchPortfolios() {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // if (!res.ok) throw new Error('Network response was not ok');
    // return res.json();

    const dataList =
        [
            {
                'title': 'AI MockData Generator',
                'desc': 'AI를 통해 운영DB의 데이터 형태 및 구조를 파악, 안전하고 빠른 대량의 Mock데이터 세트를 구성합니다.',
                'date': '2025-05-08',
            },
            {
                'title': 'Routine Alarm',
                'desc': '규칙적으로 해야 하는 일을 등록하면 주어진 시간에 그 일을 진행합니다.',
                'date': '2025-05-08',
            },
            {
                'title': '쇼호스트 살사 홈페이지',
                'desc': '쇼호스트 살사의 홍보 및 일정관리 사이트 입니다.',
                'date': '2025-05-08',
            },
            {
                'title': '명언 API',
                'desc': '키워드를 설정하면 해당 주제에 관련한 명언을 랜덤하게 API를 통해 알려줍니다.',
                'date': '2025-05-08',
            },
            {
                'title': 'AI 강화학습',
                'desc': 'AI 강화를 통해 나만의 AI를 만들어봅시다.',
                'date': '2025-05-08',
            },
        ];

    return dataList;
}