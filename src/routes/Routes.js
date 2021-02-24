import { Switch, Route } from 'react-router-dom';

import {
  Home, About,
  Articles, ArticleDetails
} from './';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About} />
      <Route exact path='/articles' component={Articles} />
      <Route exact path='/articles/:slug' component={ArticleDetails} />
    </Switch>
  );
}

export default Routes;
