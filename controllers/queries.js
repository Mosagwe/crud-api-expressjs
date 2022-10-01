

const getProductById="SELECT * FROM students where id=$1";
const getProductsAll="SELECT * FROM students";
const checkNameExists="SELECT * FROM students where name=$1";
const addProduct="INSERT INTO students(name,age) values ($1,$2)";
const updateProduct="UPDATE students SET name=$1, age=$2 where id=$3";
const removeProduct="DELETE FROM students where id=$1";


export default {
    getProductById,
    getProductsAll,
    checkNameExists,
    addProduct,
    updateProduct,
    removeProduct,
}