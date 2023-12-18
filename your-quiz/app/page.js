import InputTeamName from '../components/InputTeamName'
import Parse from 'parse/dist/parse.min.js';

const HomePage = () => {
  var Parse = require('parse/node');

  Parse.initialize(process.env.BACK4APP_ID,process.env.BACK4APP_KEY); //Back4App APPLICATION ID AND YOUR JavaScript KEY
  Parse.serverURL = process.env.PARSE_HOST_URL
  Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
  Parse.serverURL = PARSE_HOST_URL;

  return (
  <>
  <InputTeamName/>
  {/* </> */}
  </>
    
  );
};
export default HomePage;
