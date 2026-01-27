// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Status extends APIResource {
  /**
   * Check job status
   */
  check(jobID: string, options?: RequestOptions): APIPromise<StatusCheckResponse> {
    return this._client.get(path`/status/${jobID}`, options);
  }
}

export interface StatusCheckResponse {
  job_id?: string;

  status?: string;
}

export declare namespace Status {
  export { type StatusCheckResponse as StatusCheckResponse };
}
