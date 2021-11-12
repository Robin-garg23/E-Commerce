import { Box, makeStyles } from '@material-ui/core';
// import NavBar from './Home/NarBar';

// import Slide from './Home/Slide';
import React,  { useEffect } from 'react';
import Products from './Home/Products';

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }
})

const Home = () => {
    const classes = useStyle();

    // const getProducts = useSelector(state => state.getProducts);

    // const { products, error } = getProducts;

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     // dispatch(listProducts())
    //     console.log("opop")
    //     // console.log(products)
    // }, [])

    return (
        <>
            {/* <NavBar /> */}
            <Products />
            <Box className={classes.component}>
                {/* <Banner /> */}
                {/* <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='All products'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                /> */}
            </Box>
        </>
    )
}

export default Home;