const express = require("express");
const path = require("path");

const home = (req, res) => {
  res.send("Home View");
};

const homePost = (req, res) => {
  const { name, email } = req.body;
  res.send("Home Post");
};

const company = (req, res) => {
  res.send("Company View");

};

const companyPost = (req, res) => {

  res.send("Company Post");
};

module.exports = {
  home,
  homePost,
  company,
  companyPost,
};
