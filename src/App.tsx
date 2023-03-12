import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Home from './pages/home';
// import Pricing from './pages/pricing';
// import Register from './pages/register';
// import Login from './pages/login';
// import ForgetPassword from './pages/forgetPassword';
// import ClientDashboard from './pages/clientDashboard';
// import ProjectBrief from './pages/projectBrief';
// import RespondentDashboard from './pages/respondentDashboard';
// import AdminDashboard from './pages/adminDashboard';
// import AdminPricing from './pages/adminPricing';
// import Header from './components/header';
// import Footer from './components/footer';

const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_API_ENDPOINT',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forget-password" component={ForgetPassword} />
          <Route exact path="/client-dashboard" component={ClientDashboard} />
          <Route exact path="/project-brief" component={ProjectBrief} />
          <Route exact path="/respondent-dashboard" component={RespondentDashboard} />
          <Route exact path="/admin-dashboard" component={AdminDashboard} />
          <Route exact path="/admin-pricing" component={AdminPricing} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
