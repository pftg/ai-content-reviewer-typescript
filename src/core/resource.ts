// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { AIContentReviewer } from '../client';

export abstract class APIResource {
  protected _client: AIContentReviewer;

  constructor(client: AIContentReviewer) {
    this._client = client;
  }
}
