const handleAuthentication = (req,res,next) => {
    const token = ""
    const authUser = token ?? false
    if(!authUser)
        res.status(401).send('Unauthorized user')
    else
        next()
}

module.exports ={
    handleAuthentication
}

