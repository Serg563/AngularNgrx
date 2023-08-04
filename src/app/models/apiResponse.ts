export default interface apiResponse {
  statusCode?: number;
  isSuccess: boolean;
  errorMessage?: Array<string>;
  result: {
    [key: string]: string;
  };
}
