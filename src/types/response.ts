export interface IResponse<ResData> {
  success: boolean;
  data?: ResData | any;
  message?: string;
}
