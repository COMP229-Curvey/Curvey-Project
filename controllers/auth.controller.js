const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('mongoose').model('User');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const config = require('../env.config');
const apiSecret = config.apiSecret;

passport.use(
    'signUp',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            emailField: 'email',
        },
        async (username, password, email, done) => {
            try {
                const user = await UserModel.create({ username, password, email });
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
