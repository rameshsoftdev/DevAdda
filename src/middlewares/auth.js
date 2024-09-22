const adminAuth = (req,res,next)=>{
    const token='abcd';
    const isAdminAuth = token==='abcd';
    if(!isAdminAuth){
     res.status(401).send('Unauthorized access');
    }else{
        next();
    }
    
}

const userAuth = (req,res,next)=>{
    const token='abcde';
    const isAdminAuth = token==='abcd';
    if(!isAdminAuth){
     res.status(401).send('Unauthorized access');
    }else{
        next();
    }
    
}

module.exports = {
    adminAuth, userAuth
}