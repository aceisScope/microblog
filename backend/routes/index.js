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
    title: 'Mad owl chases car 1',
    body: `Morecambe - Tuesday 8th August 2017

    Yesterday evening motorists were left running for their lives as a mad owl began a campaign of terror on rush traffic. 
    Eye Witness, Eric Barnes said "When I heard it Squawk in the sky above me, I thought I was done for"`
}, {
    id: '2',
    title: 'Mad owl chases car 2',
    body: `Morecambe - Tuesday 8th August 2019

    Yesterday evening motorists were left running for their lives as a mad owl began a campaign of terror on rush traffic. 
    Eye Witness, Eric Barnes said "When I heard it Squawk in the sky above me, I thought I was done for"`
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