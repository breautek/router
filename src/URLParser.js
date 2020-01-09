
export class URLParser {
    constructor(pattern, allowPartialMatch) {
        this._allowPartialMatch = allowPartialMatch;
        this._pattern = this._stripURL(pattern);
    }

    /**
     * 
     * @param {string} url 
     */
    parse(url) {
        url = this._stripURL(url);
        let parts = this._getParts(url);
        let patternParts = this._getParts(this._pattern);

        if ((!this._allowPartialMatch && parts.length !== patternParts.length) || url === '') {
            return null;
        }

        let params = {};

        for (let i = 0; i < patternParts.length; i++) {
            let pPart = patternParts[i];
            let uPart = parts[i];
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

    /**
     * 
     * @param {string} url 
     */
    _stripURL(url) {
        while (url.charAt(0) === '/') {
            url = url.slice(1);
        }

        while (url.charAt(url.length - 1) === '/') {
            url = url.slice(0, url.length -1);
        }

        return url;
    }

    /**
     * 
     * @param {string} url 
     */
    _getParts(url) {
        url = this._stripURL(url);
        return url.split('/');
    }
}