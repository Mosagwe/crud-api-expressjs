import pool from '../db/db.js'
import queries from './queries.js'

export const getProducts= async (req,res)=>{  
    await pool.query(queries.getProductsAll,(err,results)=>{
       if(err) throw err;
        res.status(200).json(results.rows);
    });     
}

export const createProduct=async (req,res)=>{
    try { 
           const {name,age}=req.body;
            //Check if record exists
            pool.query(queries.checkNameExists,[name],(error,results)=>{
                if(error) throw error;
                if(results.rows.length){
                    res.send('Exists!');
                    console.log('Record already exists!')
                    return;
                }                
                //Add record to the database
                pool.query(queries.addProduct,[name,age],(err,results)=>{          
                    if(err){
                        console.log(err)
                    }
                    console.log("Success.")
                    res.status(201).send("Record created successfully.");         
                });             
            });                   
    } catch (err) {
        console.log(err.message);
    }    
}

export const getProduct=(req,res)=>{
    const {id}=req.params;    
    pool.query(queries.getProductById,[id],(err,results)=>{
        if(err) throw err;
        if(!results.rows.length){
            res.send('No record found with this id');
            return;
        }
        res.status(200).json(results.rows);
                
     });     
}

export const deleteProduct=(req,res)=>{
    const {id}=req.params;
    pool.query(queries.getProductById,[id],(err,results)=>{
        if(err) throw err;
        const noRecordFound = !results.rows.length;
        if(noRecordFound){
            res.send('Record not found in the database.')
            return
        }
        pool.query(queries.removeProduct,[id],(err,results)=>{
            if(err) throw err;
            res.status(200).send(`Record deleted successfully.`);
         });                 
     });      
}

export const updateProduct=(req,res)=>{
    const id=parseInt(req.params.id);
    const { name, age } = req.body;
    pool.query(queries.getProductById,[id],(err,results)=>{
        if(err) throw err;
        const noRecordFound = !results.rows.length;
        if(noRecordFound){
            res.send('Record not found in the database.')
            return
        }
        pool.query(queries.updateProduct,[name, age, id],(err,results)=>{
            if(err) throw err;
            res.status(200).send(`Record updated successfully.`);
            console.log('Record updated successfully.')
         });                 
     });    
}