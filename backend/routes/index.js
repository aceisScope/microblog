const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const authConfig = require("../../auth_config.json");

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
    }),
  
    // Validate the audience and the issuer.
    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithms: ['RS256']
  });

var posts = [{
    id: '1',
    title: 'This is True!',
    body: `Banging your head against a wall for one hour burns 150 calories. Alternatively, you can walk your dog for 45 minutes, which also burns 150 calories – and is much less painful.`
}, {
    id: '2',
    title: 'Why isn’t this a law everywhere?!',
    body: `In Switzerland it is illegal to own just one guinea pig. This is because guinea pigs are social animals, and they are considered victims of abuse if they are alone.`
}];

router.get('/posts', function(req, res, next) {
    res.send({'posts': posts});
});

router.post('/posts', checkJwt, function(req, res, next) {
    console.log(req.body)
    const {title, content} = req.body;
    const newPost = {
        id: posts.length + 1,
        title: title,
        body: content
      };
    posts.push(newPost);
    res.json({success: true, post: newPost});
})
  
module.exports = router;