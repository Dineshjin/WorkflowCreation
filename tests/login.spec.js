import {test,expect} from '@playwright/test';
const data = require('../data/data.json');
import {LoginPage} from '../page/login';


test('login_page',async ({page})=>{
   const loginPage = new LoginPage(page);

  await loginPage.goto(data.url);
  await loginPage.login(data.name, data.password);

  const successMsg = await loginPage.getSuccessMessage();
  expect.soft(successMsg).toEqual(data.result_txt);

  console.log(successMsg) //added print 
    
})