// -----------------------------------------------------------------------------------------------//
// Archive: controllers/session/login.controller.js
// Description: File responsible for the 'login' function of the 'session' class controller
// Data: 2021/08/27
// Author: Allfcourse team
// -----------------------------------------------------------------------------------------------//
import "dotenv/config"

const github = async (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
};

const signinCallback = async (req, res) => {
  const { code } = req.query

  res.json(code)
};

export default { github, signinCallback }