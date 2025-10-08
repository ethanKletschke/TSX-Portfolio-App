type ResponseCode = `ResCode${100 | 200 | 404 | 500}`;

// The response object used for the hash map page's output.
export default class ResponseObject {
  private code: ResponseCode;

  constructor(responseCode: ResponseCode) {
    this.code = responseCode;
  }
}
