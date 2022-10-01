

const getProductById="SELECT * FROM products where id=$1";
const getProductsAll="SELECT * FROM products";
const checkNameExists="SELECT * FROM products where name=$1";
const addProduct="INSERT INTO products(name,description,weight) values ($1,$2,$3)";
const updateProduct="UPDATE products SET name=$1, description=$2, weight=$3 where id=$4";
const removeProduct="DELETE FROM products where id=$1";


export default {
    getProductById,
    getProductsAll,
    checkNameExists,
    addProduct,
    updateProduct,
    removeProduct,
}