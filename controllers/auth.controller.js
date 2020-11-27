const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('mongoose').model('User');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const config = require('../env.config');
const apiSecret = config.apiSecret;
const argon2 = require('argon2');
passport.use(
    'signUp',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, username, password, done) => {
            try {
                const pass = await argon2.hash(password, {
                    type: argon2.argon2id,
                    memoryCost: 2 ** 16,
                    hashLength: 64,
                    saltLength: 32,
                    parallelism: 2
                })
                const user = await UserModel.create({ forename: req.body.forename, surname: req.body.surname, username, password: pass, email:req.body.email, permissionLevel: 1 });
                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);

passport.use(
    'signIn',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        },
        async (username, password, done) => {
            try {
                const user = await UserModel.findOne({ username: username });
                if (!user) {
                    return done(null, false, { message: 'User not found' });
                }
                const validate = await user.isValidPassword(password);

                if (!validate) {
                    return done(null, false, { message: 'Wrong Password' });
                }
                return done(null, user, { message: 'Logged in Successfully' });
            } catch (error) {
                return done(error);
            }
        }
    )
);

passport.use(
    new JWTstrategy(
        {
            secretOrKey: apiSecret,
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
);
