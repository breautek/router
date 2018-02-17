"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const DefaultStrategy_1 = require("./DefaultStrategy");
class Router extends react_1.Component {
    constructor(props) {
        super(props);
        var Strategy;
        if (!props.strategy) {
            Strategy = DefaultStrategy_1.default;
        }
        else {
            Strategy = props.strategy;
        }
        this.state = {
            strategy: new Strategy(this),
            url: window.location.href
        };
        this._onURLChange = this._onURLChange.bind(this);
    }
    _onURLChange(url) {
        this.setState({
            url: url
        });
    }
    componentWillMount() {
        this.state.strategy.addURLChangeCallback(this._onURLChange);
    }
    componentWillUnmount() {
        this.state.strategy.removeURLChangeCallback(this._onURLChange);
    }
    ;
    componentWillReceiveProps(nextProps) {
        if (nextProps.strategy && (this.state.strategy instanceof nextProps.strategy)) {
            this.state.strategy.removeURLChangeCallback(this._onURLChange);
            var strat = new nextProps.strategy(this);
            strat.addURLChangeCallback(this._onURLChange);
            this.setState({
                strategy: strat
            });
        }
    }
    render() {
        var url = this.state.url;
        console.log(url);
        return <div></div>;
    }
    getHistoryLength() {
        return this.state.strategy.getHistoryLength();
    }
    getScrollRestoration() {
        return this.state.strategy.getScrollRestoration();
    }
    go(to) {
        this.state.strategy.go(to);
    }
    back() {
        this.state.strategy.go(-1);
    }
    forward() {
        this.state.strategy.go(1);
    }
}
exports.Router = Router;
exports.default = Router;
