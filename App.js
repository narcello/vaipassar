import {registerUser} from './src/db/soa';
import {createAppContainer} from 'react-navigation';
import {Root} from './src/routes';

registerUser();

export default createAppContainer(Root);
