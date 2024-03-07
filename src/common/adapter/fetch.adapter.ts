import { HttpAdapter } from "../interfaces/http-adapter.interface";

export class FetchAdapter implements HttpAdapter{
    async fetch(url: string, options?: RequestInit): Promise<Response> {
        return fetch(url, options);
      }

}