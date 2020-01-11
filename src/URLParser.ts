
export interface IURLParams {
    [key: string]: string;
}

export class URLParser {
    private _allowPartialMatch: boolean;
    private _pattern: string;

    public constructor(pattern: string, allowPartialMatch: boolean = false) {
        this._allowPartialMatch = allowPartialMatch;
        this._pattern = this._stripURL(pattern);
    }

    public parse(url: string): IURLParams {
        url = this._stripURL(url);
        let parts: Array<string> = this._getParts(url);
        let patternParts: Array<string> = this._getParts(this._pattern);

        if ((!this._allowPartialMatch && parts.length !== patternParts.length) || url === '') {
            return null;
        }

        let params: IURLParams = {};

        for (let i: number = 0; i < patternParts.length; i++) {
            let pPart: string = patternParts[i];
            let uPart: string = parts[i];
            if (uPart) {
                if (pPart.charAt(0) === ':') {
                    params[pPart.slice(1)] = uPart;
                }
                else {
                    if (pPart !== uPart) {
                        return null;
                    }
                }
            }
            else {
                break;
            }
        }
        
        return params;
    }

    private _stripURL(url: string): string {
        while (url.charAt(0) === '/') {
            url = url.slice(1);
        }

        while (url.charAt(url.length - 1) === '/') {
            url = url.slice(0, url.length -1);
        }

        return url;
    }

    private _getParts(url: string): Array<string> {
        url = this._stripURL(url);
        return url.split('/');
    }
}
