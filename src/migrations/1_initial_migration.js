const Migrations = artifacts.require("Flipkart");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
