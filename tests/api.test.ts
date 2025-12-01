import { test, expect, request } from '@playwright/test';

test('API test example: GET & POST', async ({ }) => {
    const api = await request.newContext({
        baseURL: "https://jsonplaceholder.typicode.com"
    });

    // GET
    const getRes = await api.get('/posts/1');
    expect(getRes.status()).toBe(200);

    const getData = await getRes.json();
    expect(getData.id).toBe(1);

    // POST
    const postRes = await api.post('/posts', {
        data: {
            title: "playwright test",
            body: "sample body",
            userId: 1
        }
    });
    expect(postRes.status()).toBe(201);

    const postData = await postRes.json();
    expect(postData.title).toBe("playwright test");
});
