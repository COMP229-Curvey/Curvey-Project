const User = require('mongoose').model('User');
const argon2 = require('argon2');

exports.create = async function(req, res, next) {
    const user = new User(req.body);

    try {
        user.password = await argon2.hash(user.password, {
            type: argon2.argon2id,
            memoryCost: 2 ** 16,
            hashLength: 64,
            saltLength: 32,
            parallelism: 2
        });

        user.permissionLevel = 1;

        user.save((err) => {
            if (err) {
                return next(err);
            } else {
                res.status(201).json({_id : user._id});
            }
        });
    } catch (err) {
        return next(err);
    }

};

exports.changePassword = async function(req, res, next){
    User.findOne({username : req.params.username}, async (err, user) => {
        if (err) {
            return next(err);
        } else {
            try {
                //
                if (await argon2.verify(user.password, req.body.oldPassword)){
                    user.password = await argon2.hash(req.body.newPassword, {
                        type: argon2.argon2id,
                        memoryCost: 2 ** 16,
                        hashLength: 64,
                        saltLength: 32,
                        parallelism: 2
                    });
                    user.save((err) => {
                        if (err) {
                            return next(err);
                        } else {
                            res.status(200).json(user);
                        }
                    });
                } else{
                    res.status(401).json({"error" : "Unauthorized Access"});
                }

            } catch (err) {
                return next(err);
            }
        }
    });
};

exports.edit = (req, res, next) =>{
    if (req.body.password){ // This method cannot change password. Use the "changePassword" method for that purpose.(line 31)
        delete req.body.password;
    }
    if (req.body.username){
        delete  req.body.username; // We cannot change the username.
    }
    try {
        User.findOneAndUpdate({username: req.params.username},req.body,(err, user) => {
            if (err){
                return next(err);
            }
            res.status(204).send(user);
        });
    } catch (err) {
        return next(err);
    }
};

exports.promoteTo = (permissionLevel) =>{
    return (req, res, next) =>{
        req.body = {permissionLevel: permissionLevel};
        exports.edit(req, res, next);
    };
};

exports.list = function(req, res, next) {
    User.find({}, (err, users) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(users);
        }
    });
};

exports.delete = function(req, res, next) {
    User.deleteOne({username: req.body.username}, (err, result) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(result);
        }
    });
};
