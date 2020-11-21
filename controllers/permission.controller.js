const config = require('../env.config');

const Master = config.permissionLevels.Master;
const Member = config.permissionLevels.Member;
const Surfer = config.permissionLevels.Surfer;

exports.minimumPermissionLevelRequired = (requiredPermissionLevel) => {
    return (req, res, next) => {
        let userPermissionLevel = req.user.permissionLevel;
        if (userPermissionLevel & requiredPermissionLevel){
            return next();
        }else {
            return res.status(403).send({});
        }
    };
};

exports.onlySameUserOrAdminCanDoThisAction = (req, res, next) =>{
    let userPermissionLevel = req.user.permissionLevel;
    let username = req.user.username;
    if (req.params && req.params.username && username === req.params.username){
        return next();
    }else if (userPermissionLevel & Master){
        return next();
    }else{
        return res.status(403).send({});
    }
};

exports.sameUserCantDoThisAction = (req, res, next)=>{
    let username = req.user.username;
    if (user.params.username !== username){
        return next();
    }else {
        return res.status(400).send({});
    }
};
