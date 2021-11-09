import { Box, makeStyles, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem';
import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import { post } from '../../utils/paytm';
import { checkoutCart, payUsingPaytm } from '../../service/api';
import axios from 'axios'
const useStyle = makeStyles(theme => ({

    
    component: {
        // marginTop: 55,
        padding: '30px 135px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 0'
        }
    },
    leftComponent: {
        // width: '67%',
        paddingRight: 15,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 15
        }
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    },
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        borderTop: '1px solid #f0f0f0'
    },
    checkoutbtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    placeOrder: {
        display: 'flex',
        marginLeft: 'auto',
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 51
    }
}));

const Cart = ({ match, history }) => {
    const classes = useStyle();
    const [data, setData] = React.useState([]);

    React.useEffect(()=>{
        const id = localStorage.getItem('userId');
        axios.get(`http://localhost:7000/cart/${id}`).then(res=>{
            setData(res.data[0].products) 
            // console.log(res.data[0].products, "{{}}")
        });
    }, [])

    const checkout = async() => {
        let response = await checkoutCart(localStorage.getItem('userId'));
        // if(!response) return;
        // handleClose();
        console.log(response);
        // setAccount(signup.firstname);
    }
    

    return (
        <>
        {
            data.length > 0 ? 
            <div>
                {
                data.map(d=>(
                <>
                <h2>{d.productId.name} and {d.quantity}</h2>
                
                {/* <h2>{}</h2> */}
                </>
            )) 
                }
             <Button className={classes.checkoutbtn} onClick={() => checkout()} >Checkout</Button>
            </div>
            : <EmptyCart />
        }
        
        </>

    )
}

export default Cart;