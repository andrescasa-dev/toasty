import foo from './foo.js';
import {version} from '../package.json'

export default function () {
	console.log(`the version is: ${version}`);
}
