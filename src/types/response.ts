export interface ISuccessResponse<T> {
  data: T;
}

export interface IFieldError {
  field: string;
  message: string;
}

export interface IErrorResponse {
  message: string;
  errors?: IFieldError[];
}

export interface IResponsePagination<T> {
  data: T[];
  meta: {
    totalItems: number;
    nextCursor: string | null;
    prevCursor: string | null;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}
