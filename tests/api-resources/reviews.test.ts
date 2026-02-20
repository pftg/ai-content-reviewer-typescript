// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AIContentReviewer, { toFile } from 'ai-content-reviewer';

const client = new AIContentReviewer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reviews', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.reviews.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.reviews.update(0, {
      review: { acceptance_criteria: 'acceptance_criteria' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.reviews.update(0, {
      review: {
        acceptance_criteria: 'acceptance_criteria',
        ai_instructions: 'ai_instructions',
        content: 'content',
        media_file: await toFile(Buffer.from('# my file contents'), 'README.md'),
        media_url: 'https://example.com',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.reviews.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.reviews.list({ page: 0 }, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      AIContentReviewer.NotFoundError,
    );
  });

  // Mock server tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.reviews.submit({ review: { acceptance_criteria: 'acceptance_criteria' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submit: required and optional params', async () => {
    const response = await client.reviews.submit({
      review: {
        acceptance_criteria: 'acceptance_criteria',
        ai_instructions: 'ai_instructions',
        content: 'content',
        media_file: await toFile(Buffer.from('# my file contents'), 'README.md'),
        media_url: 'https://example.com',
      },
    });
  });
});
