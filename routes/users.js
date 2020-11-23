var express = require('express'); // Load Express JS which is a Node JS API for REST API
var router = express.Router(); // Load the router from express API
const passport = require('passport'); // Load passport API
const jwt = require('jsonwebtoken'); // Load jsonwebtoken API
var users = require('../controllers/users.controller'); // Load users.controller
const User = require('mongoose').model('User');
require('../controllers/auth.controller');
const permissionController = require('../controllers/permission.controller');
const config = require('../env.config');
const apiSecret = config.apiSecret;
const Member = config.permissionLevels.Member;
const Master = config.permissionLevels.Master;
const Surfer = config.permissionLevels.Master;

router.route('/')
      .post(users.create)
      .get([passport.authenticate('jwt', {session: false}), permissionController.minimumPermissionLevelRequired(Member), users.list]);

router.route('/:username')
    .patch([passport.authenticate('jwt', {session: false}), permissionController.onlySameUserOrAdminCanDoThisAction, users.changePassword])
    .put(async (req, res, next) => {
        if (req.body.permissionLevel){
            delete req.body.permissionLevel; // We cannot change permission level from this method.
        }
        users.edit(req,res,next); // Edit method prevents password and username modification
    });

router.route('/:username/promoteToMember')
    .patch([passport.authenticate('jwt', {session: false}), permissionController.minimumPermissionLevelRequired(Master), users.promoteTo(Member | Surfer)]);

router.route('/:username/promoteToMaster')
    .patch([passport.authenticate('jwt', {session: false}), permissionController.minimumPermissionLevelRequired(Master), users.promoteTo(Master | Member | Surfer)]);



router.route('/signUp')
    .post([passport.authenticate('signUp', { session: false }),
        async (req, res, next) => {
            res.json({
                message: 'Signup successful',
                user: req.user
            });
        }]);
router.route("/list")
    .get(users.list);

router.route("/delete")
    .post(users.delete);

router.post(
    '/signIn',
    async (req, res, next) => {
        passport.authenticate(
            'signIn',
            async (err, user, info) => {
                try {
                    if (err || !user) {
                        const error = new Error('An error occurred.');
                        return next(error);
                    }
                    req.login(
                        user,
                        { session: false },
                        async (error) => {
                            if (error) return next(error);

                            const body = { _id: user._id, email: user.email, username: user.username, permissionLevel: user.permissionLevel };
                            const token = jwt.sign({ user: body }, apiSecret);

                            return res.json({ token });
                        }
                    );
                } catch (error) {
                    return next(error);
                }
            }
        )(req, res, next);
    }
);

module.exports = router;
