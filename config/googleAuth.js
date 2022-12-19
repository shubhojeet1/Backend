const GoogleStrategy = require( "passport-google-oauth20");
const dotenv = require("dotenv").config();
const passport = require ("passport");

const GS = GoogleStrategy.Strategy;

passport.use(
  new GS(
    {
      clientID: "398838372008-06qhd4ncq74am5vf5fnvtreo9av229sv.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:8080/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      // });

      //console.log(profile);
      const {displayName, emails, name, photos} = profile
      //console.log(emails)
      if(!emails[0].verified){
        return 
      }
      //const user = {displayName, emails, photos}
      const user = {first_name:name.givenName, last_name:name.familyName,  email: emails[0].value}
      return cb(null, user);
    }
  )
);


module.exports =  passport;
