import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react'
import { Home, NotFound } from './Components/default';
import Header from './Components/Header/Header';
import DetailView from './Components/ItemDetails/DetailView';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import Cart from './Components/Cart/Cart';
import Products from './Components/Home/Products';
import ItemDetail  from './Components/ItemDetails/ItemDetail';
import UploadProduct  from './Components/ItemDetails/UploadProduct';
import { Box } from '@material-ui/core'
import CartView from './Components/Cart/CartView'
import Checkout from './Components/Cart/Checkout';
import OrderFailure from './Components/Cart/OrderFailure';

function App() {
  const [ text, setText ] = React.useState();

  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header text={text} setText={setText} />
          <Box style={{marginTop: 54}}>
            <Switch>
              <Route exact path= '/' component={Home} />
              <Route exact path= '/cart' component={Cart} />
              {/* <Route exact path= '/product' render={()=<Products  />} /> */}
              <Route path='/product' component={()=>(
                       <Products text={text} setText={setText} />
                       )}/>
              <Route exact path= '/upload/product' component={UploadProduct} />
              <Route exact path= '/product/:id' component={ItemDetail} />
              <Route exact path= '/checkout' component={Checkout} />
              <Route exact path= '/orderfailure' component={OrderFailure} />
              
              
              {/* <UploadProduct /> */}
              <Route component={NotFound} />
            </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
