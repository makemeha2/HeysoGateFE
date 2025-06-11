export async function fetchPortfolios({ keyword = '', page = 0, size = 100 } = {}) {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // if (!res.ok) throw new Error('Network response was not ok');
    // return res.json();

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const params = new URLSearchParams();

    if (keyword) params.append('keyword', keyword);
    params.append('page', page);
    params.append('size', size);

    const url = `${API_BASE_URL}/portfolio?${params.toString()}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`API 호출 실패: ${response.status}`);
        }

        const result = await response.json();

        // 서버 success 플래그 체크 & content만 반환
        if (result.success && result.data && Array.isArray(result.data.content)) {
            return result.data.content;
        } else {
            // 서버가 에러 메시지 줄 수도 있으니 친절하게!
            throw new Error(result.message || 'API 응답이 올바르지 않습니다.');
        }
    } catch (error) {
        // 개발 단계에선 에러를 그냥 콘솔에!
        console.error('포트폴리오 목록 fetch 실패:', error);
        // 필요하면 빈 배열 혹은 에러 throw
        return [];
    }
}