
export class URLParser {
    constructor(pattern) {
        this._pattern = this._stripURL(pattern);
    }

    parse(url) {
        url = this._stripURL(url);
        let parts = this._getParts(url);
        let patternParts = this._getParts(this._pattern);

        if (parts.length !== patternParts.length) {
            return null;
        }

        let params = {};

        for (let i = 0; i < patternParts.length; i++) {
            let pPart = patternParts[i];
            let uPart = parts[i];
            if (pPart.charAt(0) === ':') {
                params[pPart.slice(1)] = uPart;
            }
            else {
                if (pPart !== uPart) {
                    return null;
                }
            }
        }
        
        return params;
    }

    _stripURL(url) {
        while (url.charAt(0) === '/') {
            url = url.slice(1);
        }

        while (url.charAt(url.length - 1) === '/') {
            url = url.slice(0, url.length -1);
        }

        return url;
    }

    _getParts(url) {
        url = this._stripURL(url);
        return url.split('/');
    }
}