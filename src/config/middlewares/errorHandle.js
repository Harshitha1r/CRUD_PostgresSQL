export const errorHnadling=(err,req,res,next)=>{
    res.status(500).json({
        status:500,
        message:'Something went wrong',
        error:err.message
    })
}