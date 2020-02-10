import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()});

var context = require.context('./spec', true, /\.spec\.+(ts|tsx)$/);
context.keys().forEach(context);
