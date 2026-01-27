// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Reviews extends APIResource {
  /**
   * Get review details
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<Review> {
    return this._client.get(path`/reviews/${id}`, options);
  }

  /**
   * Update and rerun a review
   */
  update(id: number, body: ReviewUpdateParams, options?: RequestOptions): APIPromise<ReviewResponse> {
    return this._client.patch(
      path`/reviews/${id}`,
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * List reviews
   */
  list(
    query: ReviewListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReviewListResponse> {
    return this._client.get('/reviews', { query, ...options });
  }

  /**
   * Submit a new review
   */
  submit(body: ReviewSubmitParams, options?: RequestOptions): APIPromise<ReviewResponse> {
    return this._client.post(
      '/reviews',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface Review {
  id?: number;

  acceptance_criteria?: string;

  ai_instructions?: string | null;

  comment?: string | null;

  content?: string | null;

  created_at?: string;

  decision?: 'ACCEPTED' | 'REJECTED' | null;

  error_message?: string | null;

  job_id?: string;

  media_url?: string | null;

  score?: number | null;

  status?: 'pending' | 'analyzing' | 'completed' | 'failed';

  updated_at?: string;

  user_id?: number;
}

export interface ReviewCreate {
  review: ReviewCreate.Review;
}

export namespace ReviewCreate {
  export interface Review {
    /**
     * Criteria to evaluate the media against.
     */
    acceptance_criteria: string;

    /**
     * Optional custom instructions for the AI model.
     */
    ai_instructions?: string;

    /**
     * Text content to analyze or additional context.
     */
    content?: string;

    /**
     * Media file to upload.
     */
    media_file?: Uploadable;

    /**
     * URL of the media to analyze.
     */
    media_url?: string;
  }
}

export interface ReviewResponse {
  id?: number;

  job_id?: string;

  status?: string;
}

export interface ReviewListResponse {
  pagination?: ReviewListResponse.Pagination;

  reviews?: Array<Review>;
}

export namespace ReviewListResponse {
  export interface Pagination {
    limit?: number;

    next?: number | null;

    page?: number;

    previous?: number | null;
  }
}

export interface ReviewUpdateParams {
  review: ReviewUpdateParams.Review;
}

export namespace ReviewUpdateParams {
  export interface Review {
    /**
     * Criteria to evaluate the media against.
     */
    acceptance_criteria: string;

    /**
     * Optional custom instructions for the AI model.
     */
    ai_instructions?: string;

    /**
     * Text content to analyze or additional context.
     */
    content?: string;

    /**
     * Media file to upload.
     */
    media_file?: Uploadable;

    /**
     * URL of the media to analyze.
     */
    media_url?: string;
  }
}

export interface ReviewListParams {
  /**
   * Page number for pagination
   */
  page?: number;
}

export interface ReviewSubmitParams {
  review: ReviewSubmitParams.Review;
}

export namespace ReviewSubmitParams {
  export interface Review {
    /**
     * Criteria to evaluate the media against.
     */
    acceptance_criteria: string;

    /**
     * Optional custom instructions for the AI model.
     */
    ai_instructions?: string;

    /**
     * Text content to analyze or additional context.
     */
    content?: string;

    /**
     * Media file to upload.
     */
    media_file?: Uploadable;

    /**
     * URL of the media to analyze.
     */
    media_url?: string;
  }
}

export declare namespace Reviews {
  export {
    type Review as Review,
    type ReviewCreate as ReviewCreate,
    type ReviewResponse as ReviewResponse,
    type ReviewListResponse as ReviewListResponse,
    type ReviewUpdateParams as ReviewUpdateParams,
    type ReviewListParams as ReviewListParams,
    type ReviewSubmitParams as ReviewSubmitParams,
  };
}
