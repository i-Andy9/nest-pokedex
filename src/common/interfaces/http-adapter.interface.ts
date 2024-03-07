export interface HttpAdapter {
    fetch(url: string, options?: RequestInit): Promise<Response>;
}
