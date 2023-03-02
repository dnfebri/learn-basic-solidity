import { ethers } from 'hardhat';
import { expect, use } from 'chai';
import { fromBn, toBn } from "evm-bn";
import { LearnCoin } from '../typechain-types';
import { getState, initiateAccounts } from './utils';

let learnCoin: LearnCoin = null as any;
let userError: any[] = [];

describe("Testing Contract Coin", () => {
  before("deploy all state", async () => {
    await initiateAccounts();
  });
  it('Deploy contract', async () => {
    const getCotract = await ethers.getContractFactory('LearnCoin');
    learnCoin = await getCotract.deploy();
    await learnCoin.deployed();
  });
  // it("Chek accounts", async () => {
  //   const { accounts } = getState();
  //   console.log(accounts[0]);
  //   console.log(accounts[1]);

  //   // accounts.map(async (row, i) => {
  //   //   const balance = await row.getBalance()
  //   //   console.log(row.address, i);
  //   //   console.log(balance);
  //   // })
  // });

  it("test mint", async () => {
    const { accounts } = getState();
    const address = accounts[0].address;
    let amount = toBn("12");
    const mint = await learnCoin.mint(address, amount);
    const balace = await learnCoin.balances(accounts[0].address);
    expect(balace).to.eq(amount);
  })

  it("sent balance", async () => {
    const { accounts } = getState();
    const pengirim = accounts[0].address;
    const penerima = accounts[1].address;
    let amount = 123000;
    await learnCoin.send(penerima, amount);
    const balace1 = await learnCoin.balances(accounts[0].address);
    const balace2 = await learnCoin.balances(accounts[1].address);
    console.log(balace1);
    console.log(balace2);
    // const balancePengirim: = balace1 - amount
    expect(balace2.toNumber()).to.eqls(amount);
  })

  it("cek Balance", async () => {
    const { accounts } = getState();
    const balace = await learnCoin.balances(accounts[0].address);
    // accounts.map(async (row, i) => {
    //   const balance = await row.getBalance()
    //   console.log(row.address, i);
    //   console.log(balance);
    // })
  });
});
