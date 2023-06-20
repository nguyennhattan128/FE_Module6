import {useAsyncValue} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCategories} from "../../service/users/productService";


export default function Category(){
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            getCategories()
                .then((data) => {
                    setCategories(data);
                    setLoading(false);
                })
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }, [])

    if (loading) {
        return <div>Loading categories ...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    console.log(categories)

    return(
        <>
            <section className="container py-5">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Categories of The Month</h1>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {categories.map((category) => {
                        return (
                        <div className="col-12 col-md-3 p-5 mt-3" key={category.id}>
                            <a href="#"><img src={category.image} className="rounded-circle img-fluid border" /></a>
                            <h5 className="text-center mt-3 mb-3">{category.name}</h5>
                            <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                        </div>
                        )
                    })}
                    {/*<div className="col-12 col-md-3 p-5 mt-3">*/}
                    {/*    <a href="#"><img src="./assets/img/category_img_02.jpg" className="rounded-circle img-fluid border" /></a>*/}
                    {/*    <h2 className="h5 text-center mt-3 mb-3">Shoes</h2>*/}
                    {/*    <p className="text-center"><a className="btn btn-success">Go Shop</a></p>*/}
                    {/*</div>*/}
                    {/*<div className="col-12 col-md-3 p-5 mt-3">*/}
                    {/*    <a href="#"><img src="./assets/img/category_img_03.jpg" className="rounded-circle img-fluid border" /></a>*/}
                    {/*    <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>*/}
                    {/*    <p className="text-center"><a className="btn btn-success">Go Shop</a></p>*/}
                    {/*</div>*/}
                    {/*<div className="col-12 col-md-3 p-5 mt-3">*/}
                    {/*    <a href="#"><img src="./assets/img/category_img_03.jpg" className="rounded-circle img-fluid border" /></a>*/}
                    {/*    <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>*/}
                    {/*    <p className="text-center"><a className="btn btn-success">Go Shop</a></p>*/}
                    {/*</div>*/}
                </div>
            </section>
        </>
    )
}