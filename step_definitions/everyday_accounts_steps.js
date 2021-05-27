'use strict'
// Declaration
const EC = protractor.ExpectedConditions;
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const {
    Before,
    Given,
    When,
    Then,
    After,
    Status
} = require(path.join(
    __dirname,
    '..',
    'node_modules',
    'protractor-cucumber-framework',
    'lib',
    'cucumberLoader'    
)).load();

var EverydayAccountsPage = require('../page_objects/everyday_accounts_po');
// ===================GIVEN===================

// ===================WHEN===================
// When('Example', {
//     timeout: 6 * 5000
// }, async function (url) {
//     var everdayAccountsPage = new EverydayAccountsPage();

// });

// ===================THEN===================
Then('I should see all types of Everyday accounts', {
    timeout: 6 * 5000
}, async function () {
    var everdayAccountsPage = new EverydayAccountsPage();
    
    await expect(await everdayAccountsPage.getNumberOfAccountType()).to.equal(6);
});