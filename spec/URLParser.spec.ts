import { URLParser } from "../src/URLParser";

describe('URLParser', () => {
    it('$stripURL', () => {
        let parser: URLParser = new URLParser('asd');
        expect((<any>parser).$stripURL('/login/')).toBe('login');
    });

    describe('$getParts', () => {
        let parser: URLParser = new URLParser('asd');

        it('/login/', () => {
            expect((<any>parser).$getParts('/login/')).toEqual([ 'login' ]);
        });

        it('/login', () => {
            expect((<any>parser).$getParts('/login')).toEqual([ 'login' ]);
        });

        it('login', () => {
            expect((<any>parser).$getParts('login')).toEqual([ 'login' ]);
        });

        it('/login/test', () => {
            expect((<any>parser).$getParts('/login/test')).toEqual([ 'login', 'test' ]);
        });

        it('/login/:var', () => {
            expect((<any>parser).$getParts('/login/:var')).toEqual([ 'login', ':var' ]);
        });
    });

    describe('/login/', () => {
        let parser: URLParser = null;

        beforeEach(() => {
            parser = new URLParser('/login/');
        });

        it('/login', () => {
            expect(parser.parse('/login')).toEqual({});
        });

        it('empty string', () => {
            expect(parser.parse('')).toBe(null);
        });

        it('/', () => {
            expect(parser.parse('/')).toBe(null);
        });

        it('/test123', () => {
            expect(parser.parse('/test123')).toBe(null);
        });
    });

    describe('/fname/:fname/', () => {
        let parser: URLParser = null;

        beforeEach(() => {
            parser = new URLParser('/fname/:fname/');
        });

        it('/fname/norman', () => {
            expect(parser.parse('/fname/norman')).toEqual({
                fname: 'norman'
            });
        });

        it('empty string', () => {
            expect(parser.parse('')).toBe(null);
        });

        it('/', () => {
            expect(parser.parse('/')).toBe(null);
        });

        it('/fname', () => {
            expect(parser.parse('/fname')).toBe(null);
        });

        it('/login', () => {
            expect(parser.parse('/login')).toBe(null);
        });

        it('/test123', () => {
            expect(parser.parse('/test123')).toBe(null);
        });
    });

    describe('/name/:fname/:lname', () => {
        let parser: URLParser = new URLParser('/name/:fname/:lname');

        it('empty string', () => {
            expect(parser.parse('')).toBe(null);
        });

        it('/', () => {
            expect(parser.parse('/')).toBe(null);
        });

        it('/name', () => {
            expect(parser.parse('/name')).toBe(null);
        });

        it('/name/', () => {
            expect(parser.parse('/name/')).toBe(null);
        });

        it('/name/john', () => {
            expect(parser.parse('/name/john')).toBe(null);
        });

        it('/name/john/', () => {
            expect(parser.parse('/name/john/')).toBe(null);
        });

        it('/name/john/smith', () => {
            expect(parser.parse('/name/john/smith')).toEqual({
                fname: 'john',
                lname: 'smith'
            });
        });

        it('/name/john/smith/', () => {
            expect(parser.parse('/name/john/smith/')).toEqual({
                fname: 'john',
                lname: 'smith'
            });
        });
    });
});
